@echo off
echo Removing git lock file...
del /f ".git\index.lock" 2>nul

echo Reinitializing git...
rmdir /s /q .git 2>nul
git init

echo Adding files...
git add .

echo Committing...
git commit -m "Initial commit: BInsure project with features page"

echo Adding remote and pushing...
git remote add origin https://github.com/aks-45/binsure.git
git branch -M main
git push -u origin main

pause