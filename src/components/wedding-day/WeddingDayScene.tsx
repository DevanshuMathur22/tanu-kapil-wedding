"use client";

import { motion } from "motion/react";
import { useState } from "react";

const events = [
  { time: "7:00 AM", name: "Shri Ganesh Nimantran", image: "/ganesh-symbol.png", detail: "॥ श्री गणेशाय नमः ॥", invite: "भगवान श्री गणेश के पावन आशीर्वाद से हमारे शुभ विवाह समारोह का मंगलमय आरंभ। इस शुभ अवसर पर सपरिवार पधारकर अपनी उपस्थिति और आशीर्वाद प्रदान करें।" },
  { time: "9:00 AM", name: "Sakdi Bindayak", image: "/bindayak.jpg", detail: "श्रद्धा, परंपरा और मंगलकामनाएँ", invite: "परिवारजनों के साथ इस मंगलमय पारंपरिक रस्म में सम्मिलित होकर नवयुगल को अपना स्नेह और शुभाशीष प्रदान करें।" },
  { time: "11:00 AM", name: "Breakfast", image: "/breakfast.jpg", detail: "अपनों के संग खुशनुमा सुबह", invite: "आइए, स्वादिष्ट नाश्ते और अपनों की प्यारी संगत के साथ इस उत्सव भरी सुबह को और यादगार बनाएँ।" },
  { time: "12:15 PM", name: "Haldi Ceremony", image: "/haldi-ceremony.jpg", detail: "हल्दी के रंग, खुशियों के संग", invite: "हल्दी की शुभ रस्म में रंग, उमंग, हंसी और संगीत के बीच शामिल होकर Tanu और Kapil को अपने प्यार और आशीर्वाद से सराबोर करें।" },
  { time: "1:30 PM", name: "Lunch", image: "/lunch.jpg", detail: "पंगत, परंपरा और परिवार का प्यार", invite: "सपरिवार पधारकर पारंपरिक पंगत में हमारे साथ भोजन का आनंद लें। अपनों के संग बिताए ये पल ही उत्सव की असली मिठास हैं।" },
  { time: "3:00 PM", name: "Bhaat Ceremony", image: "/bhaat.jpg", detail: "मायके के स्नेह और आशीर्वाद की रस्म", invite: "मामा पक्ष के स्नेह, मान-सम्मान और आशीर्वाद से सजी इस प्यारी पारिवारिक परंपरा में शामिल होकर समारोह की शोभा बढ़ाएँ।" },
  { time: "8:00 PM onwards", name: "Dinner", image: "/dinner.jpg", detail: "स्वाद, स्नेह और खुशियों भरी शाम", invite: "रंगीन रोशनी, लज़ीज़ व्यंजनों और अपनों की महफिल के बीच हमारे साथ इस खूबसूरत शाम का आनंद लें।" },
  { time: "8:30 PM", name: "Welcome of Baraat", image: "/baraat.jpg", detail: "ढोल, नगाड़े और शाही स्वागत", invite: "ढोल-नगाड़ों की गूंज और मंगल गीतों के साथ बारात का पारंपरिक स्वागत करने के लिए सपरिवार पधारें।" },
  { time: "Under the Fading Stars", name: "Vidaai", image: "/vidaai.jpg", detail: "दुआओं के संग नई शुरुआत", invite: "आँखों में यादें, दिल में अपनों का प्यार और होठों पर शुभकामनाएँ लिए, Tanu और Kapil की नई जिंदगी के लिए अपना आशीर्वाद दें।" },
];

export default function WeddingDayScene() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const event = events[active];
  const previous = () => setActive((current) => (current - 1 + events.length) % events.length);
  const next = () => setActive((current) => (current + 1) % events.length);

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
        <motion.header className="wedding-day-intro" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <span>॥ शुभ विवाह ॥</span>
          <div className="wedding-day-floral">❀　✧　❀</div>
          <h2>The Wedding Day</h2>
          <p>A day filled with traditions, blessings and celebrations.</p>
          <div className="wedding-day-date">02 FEBRUARY 2027</div>
          <small>TUESDAY · KIRAN PARADISE · JAIPUR</small>
        </motion.header>

        <div className="wedding-carousel-heading">
          <span>THE DAY'S CELEBRATIONS</span>
          <h3>Eight moments, one beautiful celebration</h3>
          <div>❧　✧　❧</div>
        </div>

        <div className="wedding-event-carousel" onTouchStart={(e) => setTouchStart(e.touches[0].clientX)} onTouchEnd={(e) => { if (touchStart === null) return; const distance = e.changedTouches[0].clientX - touchStart; if (Math.abs(distance) > 45) distance < 0 ? next() : previous(); setTouchStart(null); }}>
          <button className="wedding-carousel-arrow" type="button" onClick={previous} aria-label="Previous event">‹</button>
          <motion.article key={event.name} className="wedding-carousel-card" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
            <div className="wedding-carousel-image">
              <img src={event.image} alt={event.name} loading="lazy" decoding="async" />
            </div>
            <div className="wedding-carousel-content">
              <span className="wedding-carousel-date">02 FEBRUARY 2027</span>
              <h3>{event.name}</h3>
              <span className="wedding-carousel-time">{event.time}</span>
              <p className="wedding-carousel-detail">{event.detail}</p>
              <div className="wedding-carousel-divider">❧ ✧ ❧</div>
              <h4>You're Invited</h4>
              <p>{event.detail}. Join us with your family and bless Tanu and Kapil on this special occasion.</p>
            </div>
          </motion.article>
          <button className="wedding-carousel-arrow" type="button" onClick={next} aria-label="Next event">›</button>
        </div>

        <div className="wedding-carousel-controls">
          <span>{String(active + 1).padStart(2, "0")} / 08</span>
          <div className="wedding-carousel-dots">
            {events.map((item, index) => <button key={item.name} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show ${item.name}`} />)}
          </div>
          <span>SWIPE TO EXPLORE</span>
        </div>

        <footer className="wedding-day-venue">
          <span>THE WEDDING VENUE</span>
          <h3>Kiran Paradise</h3>
          <p>Iskcon Road, Ward 27, Sector 101</p>
          <p>Mansarovar, Jaipur, Rajasthan 302020</p>
          <a className="venue-map-link" href="https://maps.app.goo.gl/34JJDY1EiWPtBF2z8?g_st=ac" target="_blank" rel="noreferrer">OPEN IN GOOGLE MAPS ↗</a>
          <motion.div className="venue-rsvp-layout" initial={{ opacity: 0, y: 35, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.1, ease: "easeOut" }}>
            <motion.div className="venue-qr" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.25 }}>
              <img src="/venue-qr.png" alt="Scan to open Kiran Paradise in Google Maps" loading="lazy" decoding="async" />
              <span>SCAN FOR DIRECTIONS</span>
            </motion.div>
            <motion.div className="venue-rsvp" initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}>
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
