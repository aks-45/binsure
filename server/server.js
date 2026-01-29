import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import pg from 'pg';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    database: isProduction ? 'PostgreSQL' : 'SQLite',
    databaseUrl: process.env.DATABASE_URL ? 'configured' : 'missing'
  });
});

// Database setup - use PostgreSQL in production, SQLite in development
let db;
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  // PostgreSQL for production
  const { Pool } = pg;
  db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  
  // Create table for PostgreSQL
  db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `).catch(console.error);
} else {
  // SQLite for development
  db = new sqlite3.Database(join(__dirname, 'contacts.db'));
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT,
      created_at TEXT NOT NULL
    )`);
  });
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Received contact form submission:', { name, email, phone: phone ? 'provided' : 'not provided' });
  
  try {
    if (isProduction) {
      // PostgreSQL query
      console.log('Using PostgreSQL database');
      const result = await db.query(
        'INSERT INTO contacts (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING id',
        [name, email, phone, message]
      );
      console.log('Contact saved successfully with ID:', result.rows[0].id);
      res.json({ success: true, id: result.rows[0].id });
    } else {
      // SQLite query
      console.log('Using SQLite database');
      const now = new Date().toLocaleString('sv-SE');
      const stmt = db.prepare(`INSERT INTO contacts (name, email, phone, message, created_at) VALUES (?, ?, ?, ?, ?)`);
      stmt.run([name, email, phone, message, now], function(err) {
        if (err) {
          console.error('SQLite error:', err);
          return res.status(500).json({ error: 'Failed to save contact' });
        }
        console.log('Contact saved successfully with ID:', this.lastID);
        res.json({ success: true, id: this.lastID });
      });
      stmt.finalize();
    }
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact', details: error.message });
  }
});

// Get all contacts endpoint
app.get('/api/contacts', async (req, res) => {
  try {
    if (isProduction) {
      // PostgreSQL query
      const result = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
      res.json(result.rows);
    } else {
      // SQLite query
      db.all('SELECT * FROM contacts ORDER BY created_at DESC', (err, rows) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to fetch contacts' });
        }
        res.json(rows);
      });
    }
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Database: ${isProduction ? 'PostgreSQL' : 'SQLite'}`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  if (isProduction) {
    console.log(`DATABASE_URL configured: ${process.env.DATABASE_URL ? 'Yes' : 'No'}`);
  }
});