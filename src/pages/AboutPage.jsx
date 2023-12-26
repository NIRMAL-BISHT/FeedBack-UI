import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for product or a service.</p>
      </div>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
