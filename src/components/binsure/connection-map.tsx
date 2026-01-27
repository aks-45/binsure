import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const cities = [
  { name: "Mumbai", x: 30, y: 60, connections: [1, 2, 5] },
  { name: "Delhi", x: 35, y: 30, connections: [0, 3, 4] },
  { name: "Bangalore", x: 38, y: 75, connections: [0, 3, 6] },
  { name: "Hyderabad", x: 42, y: 62, connections: [1, 2, 4] },
  { name: "Chennai", x: 45, y: 78, connections: [1, 3, 6] },
  { name: "Pune", x: 32, y: 62, connections: [0, 2] },
  { name: "Kolkata", x: 60, y: 48, connections: [2, 4] },
];

export function ConnectionMap() {
  const [activeCity, setActiveCity] = useState<number | null>(null);
  const [visibleCities, setVisibleCities] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mapOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      cities.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCities((prev) => [...prev, index]);
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const isConnected = (cityIndex: number, targetIndex: number) => {
    if (activeCity === null) return false;
    return (
      activeCity === cityIndex ||
      activeCity === targetIndex ||
      (cities[activeCity]?.connections.includes(cityIndex) &&
        cities[activeCity]?.connections.includes(targetIndex))
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{ position: 'relative' }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: mapOpacity }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-10" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-3">
            Pan-India Presence
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Connecting businesses across major cities
          </p>
        </motion.div>

        {/* Map container */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto aspect-[4/3] bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* India outline image from public folder, tinted to match border color */}
          <img
            src="/500px-India_outline.svg.png"
            alt="India outline"
            className="absolute inset-0 w-full h-full opacity-25 object-contain m-auto pointer-events-none"
            style={{ filter: 'grayscale(1) brightness(0) invert(0.45) sepia(1) saturate(600%) hue-rotate(170deg)' }}
          />

          {/* Grid background */}
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <defs>
              <pattern
                id="map-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
          </svg>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {cities.map((city, index) =>
              city.connections.map((targetIndex) => {
                const target = cities[targetIndex];
                const isActive = isConnected(index, targetIndex);
                const bothVisible =
                  visibleCities.includes(index) &&
                  visibleCities.includes(targetIndex);

                return (
                  <motion.line
                    key={`${index}-${targetIndex}`}
                    x1={`${city.x}%`}
                    y1={`${city.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke={isActive ? "#60a5fa" : "#1e40af"}
                    strokeWidth={isActive ? "2" : "1"}
                    opacity={bothVisible ? (isActive ? 0.8 : 0.3) : 0}
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: bothVisible ? 1 : 0,
                      opacity: bothVisible ? (isActive ? 0.8 : 0.3) : 0,
                    }}
                    transition={{ duration: 1, delay: Math.max(index, targetIndex) * 0.2 }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="8"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </motion.line>
                );
              })
            )}
          </svg>

          {/* City nodes */}
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              className="absolute"
              style={{
                left: `${city.x}%`,
                top: `${city.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: visibleCities.includes(index) ? 1 : 0,
                scale: visibleCities.includes(index) ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setActiveCity(index)}
              onMouseLeave={() => setActiveCity(null)}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 -m-3"
                animate={{
                  scale: activeCity === index ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full bg-blue-500 rounded-full blur-lg opacity-50" />
              </motion.div>

              {/* Node */}
              <motion.div
                className={`relative w-3 h-3 rounded-full border-2 cursor-pointer transition-all ${
                  activeCity === index
                    ? "bg-blue-400 border-blue-300 w-5 h-5"
                    : "bg-blue-600 border-blue-400"
                }`}
                whileHover={{ scale: 1.5 }}
              />

              {/* City label */}
              <motion.div
                className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: activeCity === index ? 1 : 0,
                  y: activeCity === index ? 0 : -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-blue-500/50">
                  <span className="text-blue-300 text-xs">{city.name}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats below map */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-1">7+</div>
            <div className="text-blue-200 text-sm">Major Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-1">500+</div>
            <div className="text-blue-200 text-sm">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-1">24/7</div>
            <div className="text-blue-200 text-sm">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
