import { useState } from "react";
import './DrBotanist.css';

const DrBotanist = () => {
  const [plantImage, setPlantImage] = useState(null);
  const [tips, setTips] = useState("");

  // Function to handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPlantImage(URL.createObjectURL(file));
      // Add logic to analyze the image and provide tips (dummy text for now)
      setTips("Dr. Botanist's Tip: Your plant seems to need more sunlight. Try placing it in a brighter spot.");
    }
  };

  // Function to handle image capture via camera
  const handleImageCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPlantImage(URL.createObjectURL(file));
      // Add logic to analyze the image and provide tips (dummy text for now)
      setTips("Dr. Botanist's Tip: This plant could benefit from additional potassium. Consider using a potassium-rich fertilizer.");
    }
  };

  return (
    <div className="dr-botanist-container">
      <header className="header">
        <h1>Dr. Botanist: Your Plant’s Expert Caregiver</h1>
        <p>Is your plant showing signs of distress? Whether it&apos;s yellowing leaves, tiny pests, or poor growth, Dr. Botanist is here to help.</p>
      </header>

      <section className="upload-section">
        <h2>Upload or Capture a Photo of Your Plant</h2>
        <div className="upload-buttons">
          <button onClick={() => document.getElementById('file-upload').click()}>Upload Image</button>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          
          <button onClick={() => document.getElementById('camera-upload').click()}>Capture with Camera</button>
          <input
            id="camera-upload"
            type="file"
            accept="image/*"
            capture="camera"
            style={{ display: "none" }}
            onChange={handleImageCapture}
          />
        </div>

        {plantImage && (
          <div className="image-preview">
            <img src={plantImage} alt="Uploaded Plant" />
          </div>
        )}
      </section>

      {tips && (
        <section className="care-tips">
          <h2>Dr. Botanist&apos;s Tips:</h2>
          <p>{tips}</p>
        </section>
      )}

      <section className="what-can-dr-botanist-do">
        <h2>What Dr. Botanist Can Do:</h2>
        <ul>
          <li><strong>Diagnose Plant Health Issues:</strong> Dr. Botanist uses advanced diagnostic tools and a vast database to help identify plant problems.</li>
          <li><strong>Create a Custom Treatment Plan:</strong> After diagnosing, Dr. Botanist crafts a tailored plan for watering, sunlight, pests, etc.</li>
          <li><strong>Pest & Disease Management:</strong> Identify and treat pests like aphids, mealybugs, or fungal infections.</li>
          <li><strong>Nutrient Deficiency Solutions:</strong> Helps with yellow leaves or stunted growth through nutritional adjustments.</li>
          <li><strong>Optimize Growth Environment:</strong> Get tips on improving sunlight, temperature, humidity, and more.</li>
          <li><strong>Growth Monitoring & Follow-Up:</strong> Regular check-ins and follow-up care recommendations.</li>
          <li><strong>Plant Education:</strong> Learn about your plant’s needs and early signs of stress.</li>
          <li><strong>Growth Progress Reports:</strong> Track your plant’s recovery with periodic assessments.</li>
        </ul>
      </section>

      <section className="features">
        <h2>Features of Dr. Botanist:</h2>
        <ul>
          <li><strong>Plant Symptom Checker:</strong> Input symptoms and photos to get a fast diagnosis.</li>
          <li><strong>Personalized Care Plans:</strong> A detailed, tailored guide for your plant.</li>
          <li><strong>Pest & Disease Identification:</strong> Effectively treat pests and diseases.</li>
          <li><strong>Plant Care Education:</strong> Learn the best practices for plant maintenance.</li>
          <li><strong>Reminders & Tracking:</strong> Regular check-ins to monitor your plant’s recovery.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Trust Dr. Botanist to Keep Your Plants Healthy and Thriving!</p>
      </footer>
    </div>
  );
};

export default DrBotanist;
