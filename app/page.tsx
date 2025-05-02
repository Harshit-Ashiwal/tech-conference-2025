import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Button from "./components/Button";

export default function EventLandingPage() {
  return (
    <div className={styles["event-page"]}>
      <header className={styles.header}>
        <div className={styles["header-container"]}>
          <div className={styles.logo}>
            <h1>TechConf 2025</h1>
          </div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#speakers">Speakers</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#venue">Venue</a>
              </li>
              <li>
                <Link href="#register" passHref legacyBehavior>
                  <Button variant="primary" className={styles["register-btn"]}>
                    Register Now
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1>TechConf 2025</h1>
          <h2>Shaping the Future of Technology</h2>
          <p>June 15-17, 2025 • San Francisco, CA</p>
          <div className={styles["hero-buttons"]}>
            <Link href="#register" passHref legacyBehavior>
              <Button variant="primary">Register Now</Button>
            </Link>
            <Link href="#schedule" passHref legacyBehavior>
              <Button variant="secondary">View Schedule</Button>
            </Link>
          </div>
          <div className={styles.countdown}>
            <div className={styles["countdown-item"]}>
              <span className={styles.count}>120</span>
              <span className={styles.label}>Days</span>
            </div>
            <div className={styles["countdown-item"]}>
              <span className={styles.count}>08</span>
              <span className={styles.label}>Hours</span>
            </div>
            <div className={styles["countdown-item"]}>
              <span className={styles.count}>45</span>
              <span className={styles.label}>Minutes</span>
            </div>
            <div className={styles["countdown-item"]}>
              <span className={styles.count}>30</span>
              <span className={styles.label}>Seconds</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles["section-title"]}>About The Event</h2>
          <div className={styles["about-content"]}>
            <div className={styles["about-text"]}>
              <p>
                Join us for the most anticipated tech conference of the year. TechConf 2025 brings together industry
                leaders, innovators, and tech enthusiasts for three days of learning, networking, and inspiration.
              </p>
              <p>
                This year's theme, "Shaping the Future of Technology," explores emerging trends in AI, blockchain, cloud
                computing, and more.
              </p>
              <div className={styles.stats}>
                <div className={styles["stat-item"]}>
                  <span className={styles["stat-number"]}>50+</span>
                  <span className={styles["stat-label"]}>Speakers</span>
                </div>
                <div className={styles["stat-item"]}>
                  <span className={styles["stat-number"]}>3</span>
                  <span className={styles["stat-label"]}>Days</span>
                </div>
                <div className={styles["stat-item"]}>
                  <span className={styles["stat-number"]}>2000+</span>
                  <span className={styles["stat-label"]}>Attendees</span>
                </div>
                <div className={styles["stat-item"]}>
                  <span className={styles["stat-number"]}>30+</span>
                  <span className={styles["stat-label"]}>Workshops</span>
                </div>
              </div>
            </div>
            <div className={styles["about-image"]}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Conference attendees"
                width={600}
                height={400}
                className={styles["rounded-image"]}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" className={styles.speakers}>
        <div className={styles.container}>
          <h2 className={styles["section-title"]}>Featured Speakers</h2>
          <div className={styles["speakers-grid"]}>
            {[1, 2, 3, 4, 5, 6].map((speaker) => (
              <div key={speaker} className={styles["speaker-card"]}>
                <div className={styles["speaker-image"]}>
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Speaker ${speaker}`}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={styles["speaker-info"]}>
                  <h3>Jane Doe</h3>
                  <p className={styles["speaker-role"]}>CTO, Tech Innovations</p>
                  <p className={styles["speaker-bio"]}>
                    Leading expert in artificial intelligence and machine learning with over 15 years of experience.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles["view-all"]}>
            <Link href="#" passHref legacyBehavior>
              <Button variant="secondary">View All Speakers</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="schedule" className={styles.schedule}>
        <div className={styles.container}>
          <h2 className={styles["section-title"]}>Event Schedule</h2>
          <div className={styles["schedule-tabs"]}>
            <div className={`${styles.tab} ${styles.active}`}>Day 1</div>
            <div className={styles.tab}>Day 2</div>
            <div className={styles.tab}>Day 3</div>
          </div>
          <div className={styles["schedule-content"]}>
            <div className={styles["schedule-item"]}>
              <div className={styles.time}>9:00 AM - 10:00 AM</div>
              <div className={styles["schedule-details"]}>
                <h3>Opening Keynote: The Future of Technology</h3>
                <p className={styles.speaker}>By John Smith, CEO of Future Tech</p>
                <p className={styles.location}>Main Hall</p>
              </div>
            </div>
            <div className={styles["schedule-item"]}>
              <div className={styles.time}>10:30 AM - 11:30 AM</div>
              <div className={styles["schedule-details"]}>
                <h3>AI and Machine Learning: Trends and Applications</h3>
                <p className={styles.speaker}>By Dr. Emily Johnson</p>
                <p className={styles.location}>Room A</p>
              </div>
            </div>
            <div className={styles["schedule-item"]}>
              <div className={styles.time}>12:00 PM - 1:00 PM</div>
              <div className={styles["schedule-details"]}>
                <h3>Lunch Break</h3>
                <p className={styles.location}>Dining Hall</p>
              </div>
            </div>
            <div className={styles["schedule-item"]}>
              <div className={styles.time}>1:30 PM - 2:30 PM</div>
              <div className={styles["schedule-details"]}>
                <h3>Blockchain Revolution: Beyond Cryptocurrency</h3>
                <p className={styles.speaker}>By Michael Chen</p>
                <p className={styles.location}>Room B</p>
              </div>
            </div>
            <div className={styles["schedule-item"]}>
              <div className={styles.time}>3:00 PM - 4:00 PM</div>
              <div className={styles["schedule-details"]}>
                <h3>Panel Discussion: Ethics in Technology</h3>
                <p className={styles.speaker}>Moderated by Sarah Williams</p>
                <p className={styles.location}>Main Hall</p>
              </div>
            </div>
          </div>
          <div className={styles["download-schedule"]}>
            <Link href="#" passHref legacyBehavior>
              <Button variant="secondary">Download Full Schedule</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="venue" className={styles.venue}>
        <div className={styles.container}>
          <h2 className={styles["section-title"]}>Venue</h2>
          <div className={styles["venue-content"]}>
            <div className={styles["venue-info"]}>
              <h3>San Francisco Convention Center</h3>
              <p>
                747 Howard Street
                <br />
                San Francisco, CA 94103
              </p>
              <p>
                The San Francisco Convention Center is a state-of-the-art facility located in the heart of downtown San
                Francisco, easily accessible by public transportation.
              </p>
              <Link href="#" passHref legacyBehavior>
                <Button variant="secondary">Get Directions</Button>
              </Link>
            </div>
            <div className={styles["venue-image"]}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="San Francisco Convention Center"
                width={600}
                height={400}
                className={styles["rounded-image"]}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="register" className={styles.register}>
        <div className={styles.container}>
          <h2 className={styles["section-title"]}>Register Now</h2>
          <div className={styles["pricing-cards"]}>
            <div className={styles["pricing-card"]}>
              <div className={styles["card-header"]}>
                <h3>Early Bird</h3>
                <div className={styles.price}>$499</div>
                <p>Available until March 15, 2025</p>
              </div>
              <div className={styles["card-body"]}>
                <ul>
                  <li>Access to all keynotes</li>
                  <li>Access to all sessions</li>
                  <li>Lunch and refreshments</li>
                  <li>Conference swag bag</li>
                  <li>Networking reception</li>
                </ul>
              </div>
              <div className={styles["card-footer"]}>
                <Link href="#" passHref legacyBehavior>
                  <Button variant="primary">Register</Button>
                </Link>
              </div>
            </div>
            <div className={`${styles["pricing-card"]} ${styles.featured}`}>
              <div className={styles["card-header"]}>
                <h3>Full Pass</h3>
                <div className={styles.price}>$699</div>
                <p>Regular registration</p>
              </div>
              <div className={styles["card-body"]}>
                <ul>
                  <li>Access to all keynotes</li>
                  <li>Access to all sessions</li>
                  <li>Lunch and refreshments</li>
                  <li>Conference swag bag</li>
                  <li>Networking reception</li>
                  <li>Workshop access</li>
                  <li>After-party ticket</li>
                </ul>
              </div>
              <div className={styles["card-footer"]}>
                <Link href="#" passHref legacyBehavior>
                  <Button variant="primary">Register</Button>
                </Link>
              </div>
            </div>
            <div className={styles["pricing-card"]}>
              <div className={styles["card-header"]}>
                <h3>VIP Pass</h3>
                <div className={styles.price}>$999</div>
                <p>Limited availability</p>
              </div>
              <div className={styles["card-body"]}>
                <ul>
                  <li>Access to all keynotes</li>
                  <li>Access to all sessions</li>
                  <li>Lunch and refreshments</li>
                  <li>Premium swag bag</li>
                  <li>Networking reception</li>
                  <li>Workshop access</li>
                  <li>After-party ticket</li>
                  <li>Exclusive VIP lounge</li>
                  <li>Speaker dinner access</li>
                </ul>
              </div>
              <div className={styles["card-footer"]}>
                <Link href="#" passHref legacyBehavior>
                  <Button variant="primary">Register</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sponsors}>
        <div className={styles.container}>
          <h2 className={styles["section-title"]}>Our Sponsors</h2>
          <div className={styles["sponsors-grid"]}>
            {[1, 2, 3, 4, 5, 6].map((sponsor) => (
              <div key={sponsor} className={styles["sponsor-logo"]}>
                <Image
                  src={`/placeholder.svg?height=100&width=200`}
                  alt={`Sponsor ${sponsor}`}
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className={styles["become-sponsor"]}>
            <p>Interested in sponsoring TechConf 2025?</p>
            <Link href="#" passHref legacyBehavior>
              <Button variant="secondary">Become a Sponsor</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles["newsletter-content"]}>
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest updates about TechConf 2025.</p>
            <form className={styles["newsletter-form"]}>
              <input type="email" placeholder="Your email address" required />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles["footer-content"]}>
            <div className={styles["footer-logo"]}>
              <h2>TechConf 2025</h2>
              <p>Shaping the Future of Technology</p>
            </div>
            <div className={styles["footer-links"]}>
              <div className={styles["footer-column"]}>
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#speakers">Speakers</a>
                  </li>
                  <li>
                    <a href="#schedule">Schedule</a>
                  </li>
                  <li>
                    <a href="#venue">Venue</a>
                  </li>
                  <li>
                    <a href="#register">Register</a>
                  </li>
                </ul>
              </div>
              <div className={styles["footer-column"]}>
                <h3>Contact</h3>
                <ul>
                  <li>info@techconf2025.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                </ul>
              </div>
              <div className={styles["footer-column"]}>
                <h3>Follow Us</h3>
                <div className={styles["social-links"]}>
                  <a href="#" className={styles["social-link"]}>
                    Twitter
                  </a>
                  <a href="#" className={styles["social-link"]}>
                    LinkedIn
                  </a>
                  <a href="#" className={styles["social-link"]}>
                    Facebook
                  </a>
                  <a href="#" className={styles["social-link"]}>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["footer-bottom"]}>
            <p>© 2025 TechConf. All rights reserved.</p>
            <div className={styles["footer-bottom-links"]}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}