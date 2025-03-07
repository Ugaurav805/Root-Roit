import './HelpCenter.css';
import { FaSearch } from 'react-icons/fa';

function HelpCenter() {
  return (
    <div className="help-center-fullpage">
      {/* Header Section */}
      <header className="help-center-header">
        <h1>Help Center</h1>
        <a href="https://RootRiot.com" className="visit-link" aria-label="Visit Root Riot website">
          Visit RootRiot.com →
        </a>
      </header>

      {/* Main Section */}
      <main className="help-center-main">
        <h2>Hi, how can we help?</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Ask a question..."
            className="search-input"
            aria-label="Search for help"
          />
          <button className="search-button" aria-label="Search button">
            <FaSearch />
          </button>
        </div>

        {/* Trending/Popular Queries */}
        <section className="popular-queries">
          <h3>Trending Searches</h3>
          <ul>
            <li><a href="#">How to care for succulents?</a></li>
            <li><a href="#">Best watering techniques for indoor plants</a></li>
            <li><a href="#">How to treat common plant diseases?</a></li>
          </ul>
        </section>
      </main>

      {/* Popular Articles Section */}
      <section className="popular-articles">
        <h3>Popular Articles</h3>
        <ul>
          <li>How to take care of a spider plant?</li>
          <li>Best practices for watering your plants?</li>
          <li>Common plant diseases and how to treat them?</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>
            <details>
              <summary>How often should I water my plants?</summary>
              <p>Watering frequency depends on the type of plant. Generally, it&apos;s best to check the soil moisture before watering. Let it dry out a bit between waterings.</p>
            </details>
          </li>
          <li>
            <details>
              <summary>What should I do if my plant has yellowing leaves?</summary>
              <p>Yellowing leaves could indicate overwatering, poor drainage, or a nutrient deficiency. Try adjusting your watering schedule and ensuring your plant gets the right nutrients.</p>
            </details>
          </li>
        </ul>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us">
        <h3>Contact Us</h3>
        <p>If you have any further questions, feel free to reach out to our support team.</p>
        <button className="contact-button" aria-label="Contact Support">Contact Support</button>
      </section>
    </div>
  );
}

export default HelpCenter;
