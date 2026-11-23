"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const petals = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  delay: (i % 12) * 0.65,
  duration: 8 + (i % 7) * 1.4,
  size: 7 + (i % 5) * 3,
  rotate: i * 47,
}));


function GaneshArtwork() {
  return (
    <div className="ganesh-image-wrap">
      <Image
        src="/ganeshji.png"
        alt="Shri Ganesh Ji"
        width={736}
        height={1308}
        priority
        className="ganesh-original-image"
      />
    </div>
  );
}

function Diya({ side }: { side: "left" | "right" }) {
  return (
    <motion.div
      className={`ganesh-diya ${side}`}
      animate={{ y: [0, -4, 0], opacity: [0.85, 1, 0.85] }}
      transition={{ duration: 2.4, repeat: Infinity }}
    >
      <motion.span
        className="diya-flame"
        animate={{ scale: [1, 1.12, 0.94, 1], rotate: [-3, 3, -2] }}
        transition={{ duration: 1.1, repeat: Infinity }}
      />
      <span className="diya-bowl"/>
      <span className="diya-glow"/>
    </motion.div>
  );
}

export default function GaneshOpening() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);

  useEffect(() => {
    const fade = window.setTimeout(() => setFadeLoader(true), 2500);
    const hide = window.setTimeout(() => setShowLoader(false), 3000);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(hide);
    };
  }, []);

  return (
    <main className={`ganesh-opening ${showLoader ? "loader-active" : ""}`}>
      {showLoader && (
        <div className={`divine-loader ${fadeLoader ? "loader-fade" : ""}`}>
          <motion.div
            className="loader-om"
            initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            ॐ
          </motion.div>
          <motion.div
            className="loader-mandala"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            ✺
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            ॥ श्री गणेशाय नमः ॥
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            शुभारंभ
          </motion.p>
          <div className="loader-progress"><span /></div>
          <span className="loader-caption">A DIVINE BEGINNING</span>
        </div>
      )}
      {!showLoader && (
        <>
      <div className="ganesh-grain"/>
      <div className="ganesh-aura"/>

      <div className="ganesh-particles">
        {Array.from({ length: 34 }, (_, i) => (
          <motion.span
            key={i}
            className="gold-particle"
            style={{ left: `${(i * 43) % 100}%`, top: `${(i * 29) % 100}%` }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 1.5, 0.4], y: [-8, -35] }}
            transition={{ duration: 3 + (i % 4), delay: i * 0.17, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="flower-rain">
        {petals.map((petal) => (
          <motion.span
            key={petal.id}
            className={`flower-petal petal-${petal.id % 4}`}
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size * 1.55,
              rotate: petal.rotate,
            }}
            initial={{ y: "-12vh", opacity: 0 }}
            animate={{
              y: "112vh",
              x: [0, 35, -25, 20, 0],
              rotate: [petal.rotate, petal.rotate + 220],
              opacity: [0, 1, 0.9, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="ganesh-frame">
        <div className="royal-frame-corners" aria-hidden="true">
          <span>✧</span><span>✧</span><span>✧</span><span>✧</span>
        </div>
        <div className="floral-toran" aria-hidden="true">
          {Array.from({ length: 17 }, (_, i) => <span key={i}>✿</span>)}
        </div>
        <div className="temple-bells" aria-hidden="true">
          <motion.span animate={{ rotate: [-7, 7, -7] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>♟</motion.span>
          <motion.span animate={{ rotate: [7, -7, 7] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>♟</motion.span>
        </div>
        <motion.div
          className="ganesh-top-ornament"
          initial={{ opacity: 0, scale: 0.4, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          ✺
        </motion.div>

        <motion.p
          className="ganesh-eyebrow"
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "7px" }}
          transition={{ delay: 0.6, duration: 1.8 }}
        >
          AN AUSPICIOUS BEGINNING
        </motion.p>

        <motion.div
          className="ganesh-illustration-wrap"
          initial={{ opacity: 0, scale: 0.90, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 3.5, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.div
            className="ganesh-mandala-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
          <div className="ganesh-rays" />
          <motion.div
            className="ganesh-halo"
            animate={{ rotate: -360, scale: [1, 1.025, 1] }}
            transition={{ rotate: { duration: 90, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          />
          <motion.div
            animate={{ y: [0, -5, 0], scale: [1, 1.012, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <GaneshArtwork/>
          </motion.div>
        </motion.div>

        <Diya side="left"/>
        <Diya side="right"/>
        <div className="lotus-rangoli" aria-hidden="true">
          <span>✿</span>
          <i>✧</i>
        </div>

        <motion.div
          className="ganesh-mantra"
          initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2, duration: 1.8 }}
        >
          <span className="mantra-line"/>
          <h1>॥ श्री गणेशाय नमः ॥</h1>
          <p>WITH THE DIVINE BLESSINGS</p>
          <span className="mantra-line"/>
        </motion.div>

        <motion.div
          className="ganesh-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <a className="ganesh-scroll-link" href="#invitation">
            <span>BEGIN THE CELEBRATION</span>
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </a>
        </motion.div>
      </div>
        </>
      )}
    </main>
  );
}
