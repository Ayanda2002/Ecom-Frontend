import React, { useState } from 'react';
import '../styles/contact.css'; // Import your CSS file

const Contact = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  return (
    <div>
      <header>
        <div className="main-bar">
          <a href="/#">
            <div className="title">
              <img className="logo" src="images/ramen.png" alt="logo" />
              <h1>
                Yummy <br />
                Tummy's
              </h1>
            </div>
          </a>
          <div className="icons">
            <a href="/cart">
              <img className="cart" src="images/online-shopping.png" alt="cart" />
            </a>
            <div className="user-menu">
              <img
                className="user"
                src="images/user.png"
                alt="user"
                onClick={toggleUserMenu}
              />
              {userMenuVisible && (
                <div className="dropdown active">
                  <a href="/sign-in">Sign In</a>
                  <a href="/sign-up">Sign Up</a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="/menu" className="menu">Menu</a>
            </li>
            <li>
              <a href="/partnerships" className="partnerships">Partnerships</a>
            </li>
            <li>
              <a href="/about" className="about-us">About Us</a>
            </li>
            <li>
              <a href="/contact" className="contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="hello">
          <img src="images/hello.jpg" alt="Hello bord-sign" />
        </div>
        <div className="contact-info">
          <div className="line">
            <span>Get in </span>
            <br />
            <span className="highlight">Touch</span>
          </div>
          <p>
            At Yummy Tummy's, your feedback matters. We welcome your thoughts, suggestions, compliments, and concerns because they inspire us to serve you better every day. Whether you have a unique idea, a kind note, or an issue you'd like to share, we're here to listen and grow. Your input drives our commitment to innovation, ensuring we deliver an unforgettable dining experience every time you visit.
            <br /><br />
            We value every compliment—it fuels our passion to keep delighting our guests. Likewise, complaints are an opportunity for us to learn, improve, and make sure your next visit is even better. Don't hesitate to reach out—your voice helps shape the Yummy Tummy's experience.
            <br /><br />
            Thank you for being part of our journey to create a place where good food and great memories come together. Together, let's make Yummy Tummy's the ultimate destination for deliciousness and happiness!
          </p>
        </div>
        <div className="user-input">
          <div className="left">
            <input type="text" name="First name" id="fname" placeholder="First name" />
            <input type="text" name="Last name" id="lname" placeholder="Last name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <label for="subject" style={{ color: 'black' }}>Please choose a subject:</label>
            <select id="subject" name="subject" placeholder="abc">
              <option value="" disabled selected>Please choose a subject</option>
              <option value="complain">Complain</option>
              <option value="compliment">Compliment</option>
              <option value="suggestion">Suggestion</option>
            </select>
          </div>
          <div className="right">
            <textarea id="message" name="message" placeholder="Write your message here..."></textarea>
            <button>Send</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="section">
            <h2>Eat</h2>
            <ul>
              <li>
                <a href="menu">Menu</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Explore</h2>
            <ul>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="values">Our Values</a>
              </li>
              <li>
                <a href="partnerships">Partnerships</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Help</h2>
            <ul>
              <li>
                <a href="contact">Contact Us</a>
              </li>
              <li>
                <a href="faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
          <div className="app-links">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-link"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/apple.webp`}
                alt="Download on the App Store"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="google-play-link"
            >
              <img
                className="google"
                src={`${process.env.PUBLIC_URL}/images/google.png`}
                alt="Get it on Google Play"
              />
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/instragram.jpg`}
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/facebook.jpg`}
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/x.png`}
                alt="X (formerly Twitter)"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/youtube.png`}
                alt="YouTube"
              />
            </a>
          </div>
        </div>
        <div className="copyrights">
          <p>
            Copyright &copy; Tummy Yummy's South Africa. 2025 All Rights Reserved. build pwa-45-12-18_9f34a1c2
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
