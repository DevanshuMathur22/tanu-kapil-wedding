"use client";

import { motion } from "motion/react";

export default function CelebrationScene() {
  return (
    <section id="celebrations" className="celebration-scene">
      <div className="celebration-grain" />
      <div className="celebration-inner">
        <motion.div
          className="celebration-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="celebration-eyebrow">॥ मंगलमय आयोजन ॥</span>
          <div className="celebration-floral">❀　✧　❀</div>
          <h2>Wedding Celebrations</h2>
          <p className="celebration-subtitle">
            A beautiful tapestry of traditions, rituals and togetherness.
          </p>
          <div className="celebration-divider">❧ ✧ ❧</div>
        </motion.div>

        <motion.article
          className="mehendi-feature"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="mehendi-cone mehendi-cone-left" aria-hidden="true" />
          <span className="mehendi-cone mehendi-cone-right" aria-hidden="true" />
          <div className="mehendi-henna-decor" aria-hidden="true">
            <span className="henna-vine henna-vine-left">❧ ✿ ❧ ✧ ❀ ❧</span>
            <span className="henna-vine henna-vine-right">❧ ✿ ❧ ✧ ❀ ❧</span>
            <span className="henna-paisley paisley-left">❦</span>
            <span className="henna-paisley paisley-right">❦</span>
            <span className="henna-sparkle sparkle-a">✧</span>
            <span className="henna-sparkle sparkle-b">✺</span>
            <span className="henna-sparkle sparkle-c">✧</span>
          </div>
          <div className="mehendi-extras" aria-hidden="true">
            <div className="mehendi-toran">✿ ❀ ✿ ❀ ✿ ❀ ✿ ❀ ✿</div>
            <span className="mehendi-mandala mandala-left">❋</span>
            <span className="mehendi-mandala mandala-right">❋</span>
            <span className="mehendi-bell bell-left">♢</span>
            <span className="mehendi-bell bell-right">♢</span>
            <span className="mehendi-petal petal-one">✿</span>
            <span className="mehendi-petal petal-two">❀</span>
            <span className="mehendi-petal petal-three">✿</span>
            <span className="mehendi-petal petal-four">❀</span>
            <span className="mehendi-diya diya-left">🪔</span>
            <span className="mehendi-diya diya-right">🪔</span>
          </div>
          <div className="mehendi-artwork">
            <img
              src="/mehendi-ceremony.jpg"
              alt="Traditional Mehendi ceremony with floral swing and bride"
              loading="lazy"
              decoding="async"
            />
            <div className="mehendi-shlok">
              <span>॥ श्री गौरी नमः ॥</span>
              <p>सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।</p>
              <p>शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥</p>
            </div>
          </div>
          <div className="mehendi-caption">
            
            <h3>Mehendi Ceremony</h3>
            <small>01 FEBRUARY 2027 · 11:00 AM</small>
          </div>
        </motion.article>


      </div>
    </section>
  );
}
