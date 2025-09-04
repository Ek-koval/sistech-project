import React from "react";
import { Container, Grid, Button } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import ScienceIcon from "@mui/icons-material/Science";
import FunctionsIcon from "@mui/icons-material/Functions";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "./Curriculum.css";

const Curriculum = () => {
  // Дані для секцій
  const sections = [
    {
      paragraph:
        "Our curriculum at A Kids Place Childcare is designed to ignite curiosity and foster a love of learning. We offer a balanced program that combines structured educational activities with plenty of time for play and exploration.",
      cards: [
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
      ],
    },
    {
      paragraph:
        "We tailor our programs to suit the developmental stages of each age group, ensuring that every child can progress at their own pace. Our goal is to provide a holistic education that supports cognitive, social, emotional, and physical development.",
      cards: [
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
      ],
    },
  ];

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

        {/* Контейнер для 2 колонок */}
        <Grid className="grid_container" container spacing={4}>
          {sections.map((section, i) => (
            <Grid   item xs={12} md={6} key={i}>
              {/* Абзац */}
              <p className="section-description">{section.paragraph}</p>

              {/* Дві картки під абзацом */}
              <Grid container spacing={2}>
                {section.cards.map((card, j) => (
                  <Grid item xs={3} key={j}>
                    <div className="curriculum-card">
                      <img src={card.img} alt={card.title} />
                      <div className="curriculum-card-content">
                        <h3 className="curriculum-card-title">
                          {card.icon} {card.title}
                        </h3>
                        <p className="curriculum-card-text">{card.text}</p>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Curriculum;