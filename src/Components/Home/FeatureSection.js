import React from "react";
import "../styles/FeatureSection.css";
const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature">
        <h3>Real-Time Data</h3>
        <p>Get the latest cryptocurrency data in real-time.</p>
      </div>
      <div className="feature">
        <h3>Interactive Charts</h3>
        <p>Visualize cryptocurrency trends with interactive charts.</p>
      </div>
      <div className="feature">
        <h3>News & Updates</h3>
        <p>Stay informed with the latest news and updates.</p>
      </div>
    </section>
  );
};

export default FeatureSection;
