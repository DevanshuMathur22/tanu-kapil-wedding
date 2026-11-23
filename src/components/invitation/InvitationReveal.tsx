"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const petals = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 9) % 100}%`,
  delay: (i % 10) * 0.8,
  duration: 9 + (i % 6) * 1.5,
  size: 7 + (i % 4) * 3,
}));

const weddingTimestamp = new Date("2027-02-02T00:00:00+05:30").getTime();

export default function InvitationReveal() {
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = Math.max(0, weddingTimestamp - Date.now());
      setCountdown({
        days: Math.floor(remaining / 86400000),
        hours: Math.floor((remaining % 86400000) / 3600000),
        minutes: Math.floor((remaining % 3600000) / 60000),
        seconds: Math.floor((remaining % 60000) / 1000),
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="invitation" className="wedding-scene">
      <div className="wedding-grain" />
      <div className="wedding-aura" />

      <div className="wedding-petals">
        {petals.map((p) => (
          <motion.span
            key={p.id}
            className={`wedding-petal petal-${p.id % 3}`}
            style={{ left: p.left, width: p.size, height: p.size * 1.6 }}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{
              y: "110vh",
              x: [0, 25, -20, 15, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.9, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="wedding-corner wedding-corner-tl">✧</div>
      <div className="wedding-corner wedding-corner-tr">✧</div>
      <div className="wedding-corner wedding-corner-bl">✧</div>
      <div className="wedding-corner wedding-corner-br">✧</div>

      <div className="wedding-content">
        <motion.div
          className="wedding-top-floral"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
        >
          ❀　✿　❀　✿　❀
        </motion.div>

        <motion.div
          className="wedding-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3 }}
        >
          <span>✧ A NEW BEGINNING ✧</span>
          <h2>The Celebration Begins</h2>
          <p>A BEAUTIFUL JOURNEY OF TWO HEARTS</p>
        </motion.div>

        <motion.div
          className="wedding-mandap-decoration"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.8, delay: 0.3 }}
        >
          <div className="mandap-arch">
            <span className="mandap-flower">❀</span>
            <span className="mandap-leaves">❧</span>
            <span className="mandap-flower">❀</span>
          </div>
          <div className="mandap-lotus">❀</div>
          <div className="mandap-line" />
        </motion.div>

        <motion.div
          className="wedding-names"
          initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 1.6 }}
        >
          <span>THE WEDDING OF</span>
          <h1>Tanu</h1>
          <div className="wedding-and">&</div>
          <h1>Kapil</h1>
          <div className="wedding-name-divider">❧ ✧ ❧</div>
        </motion.div>

        <motion.div
          className="wedding-countdown"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <span className="countdown-heading">TIME UNTIL THE WEDDING</span>
          <div className="countdown-grid">
            {countdown && [
              { label: "DAYS", value: countdown.days },
              { label: "HOURS", value: countdown.hours },
              { label: "MINUTES", value: countdown.minutes },
              { label: "SECONDS", value: countdown.seconds },
            ].map((unit) => (
              <div className="countdown-unit" key={unit.label}>
                <strong>{String(unit.value).padStart(2, "0")}</strong>
                <span>{unit.label}</span>
              </div>
            ))}
          </div>
          <p className="countdown-date">02 FEBRUARY 2027</p>
        </motion.div>

        <motion.div
          className="wedding-details"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1.1, duration: 1.3 }}
        >
          <p className="wedding-message">
            Two souls, united by sacred vows, embarking on a beautiful journey of love, devotion and togetherness.
          </p>
          <p className="wedding-blessing-footer">॥ SHUBHAM BHAVATU ॥</p>
          <p className="wedding-invitation-line">
            Your presence and blessings will make this occasion truly auspicious.
          </p>
        </motion.div>

        <motion.div
          className="wedding-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5 }}
        >
          <span>LET THE CELEBRATION BEGIN</span>
          <div>↓</div>
        </motion.div>
      </div>
    </section>
  );
}
