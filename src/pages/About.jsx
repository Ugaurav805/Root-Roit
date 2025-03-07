import './About.css';

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1>Welcome to Root Roit!</h1>
        <p>
          <strong>Our Mission:</strong> We aim to make plant care easy, fun, and accessible for everyone.
          Whether you&apos;re a seasoned gardener or just getting started, our app is here to help you
          understand and nurture your plants.
        </p>
        <h2>Features:</h2>
        <ul>
          <li>Upload a picture of your plant, and our intelligent system will analyze its health.</li>
          <li>Receive insights about your plant&apos;s growth, nutrition needs, and potential issues.</li>
          <li>Get personalized care instructions, including recommended fertilizers and watering schedules.</li>
        </ul>
        <h2>How It Works:</h2>
        <p>
          Using advanced image recognition and plant care expertise, our app identifies your plant&apos;s
          condition and suggests actionable steps to keep it thriving.
        </p>
        <p>
          Join us in making plant care effortless and enjoyable!
        </p>
        <p>
          <strong>Happy Growing,</strong>
          <br />
          The Root Roit Team
        </p>
        <button className="cta-button">Join Our Community</button>
      </div>
    </div>
  );
}

export default About;