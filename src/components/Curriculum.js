import React from "react";
import { Container, Grid, Button } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import ScienceIcon from "@mui/icons-material/Science";
import FunctionsIcon from "@mui/icons-material/Functions";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "./Curriculum.css";

const Curriculum = () => {
  return (
    <div className="curriculum-page">
      {/* ===== Header Section ===== */}
      <Container className="curriculum-header">
        <div className="curriculum-header-text">
          <h1 className="curriculum-title">
            Welcome to <br /> A Kids Place Childcare
          </h1>
          <Button className="call-now-btn" variant="contained">
            Call now
          </Button>
        </div>
        <img src="/images/hero.png" alt="Kids playing" />
      </Container>

      {/* ===== Curriculum Section ===== */}
      <Container>
        <h2 className="section-title">Curriculum</h2>
        <p className="section-description">
          Our curriculum at A Kids Place Childcare is designed to ignite
          curiosity and foster a love of learning. We offer a balanced program
          that combines structured educational activities with plenty of time
          for play and exploration.
        </p>
        <p className="section-description">
          We tailor our programs to suit the developmental stages of each age
          group, ensuring that every child can progress at their own pace. Our
          goal is to provide a holistic education that supports cognitive,
          social, emotional, and physical development.
        </p>

        {/* ===== Cards Section ===== */}
        <Grid container spacing={3} className="curriculum-cards">
          {[
            {
              icon: <BrushIcon color="primary" />,
              title: "Creative Arts",
              text: "Encouraging expression through music, art, and drama.",
              img: "/images/creative.png",
            },
            {
              icon: <ScienceIcon color="primary" />,
              title: "Science & Nature",
              text: "Hands-on activities that promote inquiry and discovery.",
              img: "/images/science.png",
            },
            {
              icon: <FunctionsIcon color="primary" />,
              title: "Mathematics",
              text: "Fun, interactive ways to explore numbers and problem-solving.",
              img: "/images/math.png",
            },
            {
              icon: <MenuBookIcon color="primary" />,
              title: "Language & Literacy",
              text: "Developing strong communication skills through storytelling, reading, and writing.",
              img: "/images/language.png",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className="curriculum-card">
                <img src={item.img} alt={item.title} />
                <div className="curriculum-card-content">
                  <h3 className="curriculum-card-title">
                    {item.icon}
                    {item.title}
                  </h3>
                  <p className="curriculum-card-text">{item.text}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Curriculum;
