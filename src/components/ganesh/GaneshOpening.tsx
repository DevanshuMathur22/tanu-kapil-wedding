"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const petals = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  delay: (i % 8) * 0.8,
  duration: 12 + (i % 5) * 2,
  size: 7 + (i % 4) * 3,
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
  return <div className={`ganesh-diya ${side}`}><span className="diya-flame"/><span className="diya-bowl"/><span className="diya-glow"/></div>;
}

export default function GaneshOpening({ onNext }: { onNext: () => void }) {
  const [bookOpening, setBookOpening] = useState(false);
  const [bookOpened, setBookOpened] = useState(false);

  useEffect(() => {
    if (!bookOpened) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previous; };
    }
    onNext();
  }, [bookOpened, onNext]);

  if (bookOpened) return null;

  return (
    <main className="ganesh-opening book-cover-active">
      {!bookOpened && (
        <motion.button
          type="button"
          className="book-front-cover"
          aria-label="Tap to open wedding invitation"
          initial={{ rotateY: 0 }}
          animate={bookOpening ? { rotateY: -155, opacity: 0 } : { rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          onClick={() => { if (!bookOpening) setBookOpening(true); }}
          onAnimationComplete={() => { if (bookOpening) setBookOpened(true); }}
        >

      <div className="ganesh-grain"/>
      <div className="ganesh-aura"/>
      <div className="ganesh-particles">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="gold-particle" style={{ left: `${(i * 43) % 100}%`, top: `${(i * 29) % 100}%` }}/>
        ))}
      </div>
      <div className="flower-rain">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className={`flower-petal petal-${petal.id % 4}`}
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size * 1.55,
              rotate: `${petal.rotate}deg`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
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
          <span>♟</span>
          <span>♟</span>
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
          <div className="ganesh-mandala-ring"/>
          <div className="ganesh-rays" />
          <div className="ganesh-halo"/>
          <div><GaneshArtwork/></div>
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
          <div className="ganesh-cover-shlok">
            <p>वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।</p>
            <p>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
          </div>
          <p>WITH THE DIVINE BLESSINGS</p>
          <span className="mantra-line"/>
        </motion.div>

        <motion.div
          className="ganesh-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <span className="ganesh-scroll-link">
            <span>BEGIN THE CELEBRATION</span>
            <div>↓</div>
          </span>
        </motion.div>
      </div>

        </motion.button>
      )}
    </main>
  );
}
