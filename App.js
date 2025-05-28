import React, { useEffect, useState } from "react";
import "./App.css";
import StarfieldBackground from "./StarfieldBackground";

function Timeline() {
  const days = [
    {
      date: "June 20, 2025 (Friday)",
      events: [
        { time: "09:00", title: "Opening Ceremony" },
        { time: "10:00", title: "Keynote & Icebreakers" },
        { time: "11:00", title: "Hacking Begins" },
        { time: "14:00", title: "Workshop: AI for Everyone" },
        { time: "19:00", title: "Mentor Hours" }
      ]
    },
    {
      date: "June 21, 2025 (Saturday)",
      events: [
        { time: "All Day", title: "Hacking Continues & Mentorship" },
        { time: "18:00", title: "Fun Community Event" }
      ]
    },
    {
      date: "June 22, 2025 (Sunday)",
      events: [
        { time: "10:00", title: "Project Submission Deadline" },
        { time: "10:30", title: "Project Expo" },
        { time: "12:00", title: "Judging & Awards" },
        { time: "13:00", title: "Closing Ceremony" }
      ]
    }
  ];
  return (
    <div className="timeline">
      {days.map((day, i) => (
        <div className="timeline-day" key={i}>
          <div className="timeline-date-main">{day.date}</div>
          {day.events.map((ev, j) => (
            <div className="timeline-event" key={j}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{ev.time}</div>
              <div className="timeline-title">{ev.title}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="section visible testimonials" id="testimonials">
      <h2>What Past Hackers Say</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>“An electrifying experience! I learned more in 48 hours than in a semester.”</p>
          <span>– Fernando, 2024 Winner</span>
        </div>
        <div className="testimonial">
          <p>“The mentors were so helpful and the vibe was pure energy. Can't wait for 2025!”</p>
          <span>– El Gato, 2024 Finalist</span>
        </div>
        <div className="testimonial">
          <p>“It was a super cool experience. I got to work with a really good team”</p>
          <span>– Amber, 2024 Participant</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    function checkVisibility() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections((prev) => {
            if (!prev.includes(section.id)) {
              return [...prev, section.id];
            }
            return prev;
          });
        }
      });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    <div className="App">
      <StarfieldBackground />
      <nav>
        <div className="nav-container">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#partners">Partners</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>HackSphere 2025</h1>
          <p className="tagline">Code. Create. Conquer.</p>
          <p className="date">June 20–22, 2025 · Online · 300+ Hackers</p>
          <a href="#contact">
            <button className="cta-btn"> Register Now</button>
          </a>
        </div>
      </section>

      <section id="about" className={`section${visibleSections.includes("about") ? " visible" : ""}`}>
        <h2>About</h2>
        <p>
          HackSphere 2025 is a global online hackathon for developers, creators, and innovators.
        </p>
        <div className="about-highlights">
          <div>
            <h3>💡 48 Hours</h3>
            <p>Non-stop coding, learning, and creating.</p>
          </div>
          <div>
            <h3>🤝 Mentors</h3>
            <p>Get advice from industry leaders.</p>
          </div>
          <div>
            <h3>🏆 Prizes</h3>
            <p>Win swag, recognition, and more!</p>
          </div>
        </div>
      </section>

      <section id="schedule" className={`section${visibleSections.includes("schedule") ? " visible" : ""}`}>
        <h2>Schedule</h2>
        <Timeline />
        <div style={{ marginTop: 20, fontSize: 14, color: "#b2ffff" }}>
          <em>All times in IST · Full schedule and links will be emailed to participants</em>
        </div>
      </section>

      <section id="partners" className={`section${visibleSections.includes("partners") ? " visible" : ""}`}>
        <h2>Partners</h2>
        <div className="partners-logos" style={{ marginBottom: 16 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
        </div>
        <ul className="partners-list">
          <li>Microsoft</li>
          <li>IBM</li>
          <li>Google</li>
          <li>OpenAI</li>
          <li>TechSpark</li>
        </ul>
      </section>

      <Testimonials />

      <section id="faq" className={`section${visibleSections.includes("faq") ? " visible" : ""}`}>
        <h2>FAQ</h2>
        <div className="faq">
          <div className="faq-item">
            <h4>Who can participate?</h4>
            <p>Anyone 16+ who loves tech. Students and professionals welcome!</p>
          </div>
          <div className="faq-item">
            <h4>Is it free?</h4>
            <p>Yes, HackSphere is 100% free for all accepted participants.</p>
          </div>
          <div className="faq-item">
            <h4>Do I need a team?</h4>
            <p>Teams are 2–4 people. You can join solo and find a team at the event.</p>
          </div>
          <div className="faq-item">
            <h4>What should I bring?</h4>
            <p>Your laptop, charger, and energy! We provide the rest (virtually).</p>
          </div>
        </div>
      </section>

      <section id="contact" className={`section${visibleSections.includes("contact") ? " visible" : ""}`}>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:contact@hacksphere2025.com">contact@hacksphere2025.com</a>
        </p>
        <p>
          Instagram: <a href="https://instagram.com/hacksphere" target="_blank" rel="noreferrer">@hacksphere</a>
        </p>
        <p>
          Or use the form below:
        </p>
        <form className="contact-form" autoComplete="off" onSubmit={e => { e.preventDefault(); alert("Message sent!"); }}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your Name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required placeholder="How can we help?"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 HackSphere. All rights reserved. &nbsp;|&nbsp;
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
