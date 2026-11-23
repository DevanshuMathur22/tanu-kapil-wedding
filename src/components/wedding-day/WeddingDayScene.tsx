"use client";

import { motion } from "motion/react";

const events = [
  { time: "7:00 AM", name: "Shri Ganesh Nimantran", symbol: "", image: "/ganesh-symbol.png", detail: "An auspicious beginning" },
  { time: "9:00 AM", name: "Shri Ganesh Pooja", symbol: "🪔", image: "/ganesh-pooja.jpg", detail: "Seeking divine blessings" },
  { time: "11:00 AM", name: "Breakfast", symbol: "☕", image: "/breakfast.jpg", detail: "A gathering of family" },
  { time: "1:30 PM", name: "Lunch", symbol: "❋", image: "/lunch.jpg", detail: "Together over a meal" },
  { time: "3:00 PM", name: "Bhaat Ceremony", symbol: "❀", image: "/bhaat.jpg", detail: "A cherished family tradition" },
  { time: "8:00 PM", name: "Baraat", symbol: "♛", image: "/baraat.jpg", detail: "The grand wedding procession" },
  { time: "8:30 PM", name: "Dinner", symbol: "✧", image: "/dinner.jpg", detail: "An evening of celebration" },
];

export default function WeddingDayScene() {
  return (
    <section className="wedding-day-scene">
      <div className="wedding-scene-effects" aria-hidden="true">
        <span className="wedding-petal petal-a">✿</span>
        <span className="wedding-petal petal-b">❀</span>
        <span className="wedding-petal petal-c">✿</span>
        <span className="wedding-petal petal-d">❀</span>
        <span className="wedding-petal petal-e">✿</span>
        <span className="wedding-diya diya-a">🪔</span>
        <span className="wedding-diya diya-b">🪔</span>
      </div>
      <div className="wedding-day-inner">
        <motion.header
          className="wedding-day-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4 }}
        >
          <span>॥ शुभ विवाह ॥</span>
          <div className="wedding-day-floral">❀　✧　❀</div>
          <h2>The Wedding Day</h2>
          <p>A day filled with traditions, blessings and celebrations.</p>
          <div className="wedding-day-date">02 FEBRUARY 2027</div>
          <small>TUESDAY · KIRAN PARADISE · JAIPUR</small>
        </motion.header>

        <motion.article
          className="haldi-feature"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.4, delay: 0.35 }}
        >
          <div className="haldi-feature-image">
            <img src="/haldi-ceremony.jpg" alt="Haldi Ceremony" />
          </div>
          <div className="haldi-shlok">
            <span>॥ श्री गौरी नमः ॥</span>
            <p>सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।</p>
            <p>शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥</p>
          </div>
          <div className="haldi-feature-caption">
            <h3>Haldi Ceremony</h3>
            <span className="haldi-feature-time">12:00 PM</span>
            <span className="haldi-feature-date">02 FEBRUARY 2027</span>
          </div>
        </motion.article>

        <div className="wedding-events-heading">
          <span>THE DAY'S CELEBRATIONS</span>
          <h3>And the festivities continue</h3>
          <div>❧　✧　❧</div>
        </div>

        <div className="wedding-day-grid">
          {events.map((event, index) => (
            <motion.article
              className="wedding-event-card"
              key={event.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 1.1, delay: index * 0.35 }}
            >
              <div className={`wedding-event-visual${event.image ? " has-image" : ""}`}>
                {event.image ? <img src={event.image} alt={event.name} /> : <span>{event.symbol}</span>}
              </div>
              <div className="wedding-event-details">
                <span className="wedding-event-time">{event.time}</span>
                <h3>{event.name}</h3>
                <p>{event.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <footer className="wedding-day-venue">
          <span>THE WEDDING VENUE</span>
          <h3>Kiran Paradise</h3>
          <p>Iskcon Road, Ward 27, Sector 101</p>
          <p>Mansarovar, Jaipur, Rajasthan 302020</p>
          <a className="venue-map-link" href="https://maps.app.goo.gl/34JJDY1EiWPtBF2z8?g_st=ac" target="_blank" rel="noreferrer">OPEN IN GOOGLE MAPS ↗</a>
          <motion.div
            className="venue-rsvp-layout"
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <motion.div
              className="venue-qr"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <img src="/venue-qr.png" alt="Scan to open Kiran Paradise in Google Maps" />
              <span>SCAN FOR DIRECTIONS</span>
            </motion.div>
            <motion.div
              className="venue-rsvp"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span>RSVP</span>
              <h4>Devanshu Mathur</h4>
              <a className="rsvp-phone" href="tel:+919664498007">+91 96644 98007</a>
              <a className="rsvp-phone" href="tel:+917737771037">+91 77377 71037</a>
              <a className="rsvp-whatsapp" href="https://wa.me/919664498007" target="_blank" rel="noreferrer">WHATSAPP ↗</a>
            </motion.div>
          </motion.div>
          <div>❧ ✧ ❧</div>
        </footer>
      </div>
    </section>
  );
}
