import React, { useEffect, useState } from "react";
import {
  Hero_Container,
  Hero_Content,
  Left,
  Right,
  Title,
  SubText,
  CTA_Group,
  PrimaryBtn,
  SecondaryBtn,
  Stats,
  StatDash,
  StatItem,
  Glow,
  CursorGlow,
  CodeCard,
  ParticleCanvas,
} from "@/styles/hero";

const roles = ["React Apps", "Scalable UI", "Modern Web"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  // typing effect
  useEffect(() => {
    if (subIndex === roles[index].length) {
      setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1000);
      return;
    }

    const timeout = setTimeout(() => {
      setText((prev) => prev + roles[index][subIndex]);
      setSubIndex((prev) => prev + 1);
    }, 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  useEffect(() => {
    setText("");
  }, [index]);

  // cursor glow
  useEffect(() => {
    const move = (e) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // particles
  useEffect(() => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // ✅ Bounce from edges (IMPORTANT FIX)
        if (p.x <= 0 || p.x >= canvas.width) p.dx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.dy *= -1;

        // ✅ Optional: slight random movement (natural feel)
        p.dx += (Math.random() - 0.5) * 0.01;
        p.dy += (Math.random() - 0.5) * 0.01;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(31,191,143,0.6)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <Hero_Container>
      <ParticleCanvas id="particles" />
      <CursorGlow id="cursor-glow" />
      <Glow />

      <Hero_Content>
        <Left>
          <p className="intro">Hi, I'm</p>

          <Title>
            Rasiga Jayakumar <br />
            <span>Frontend Engineer</span>
          </Title>

          <SubText>
            I build → <span className="typing">{text}</span>
          </SubText>

          <CTA_Group>
            <PrimaryBtn>View Projects</PrimaryBtn>
            <SecondaryBtn>Download Resume</SecondaryBtn>
            {/* <a href="YOUR_LINKEDIN_URL" target="_blank">
              LinkedIn ↗
            </a> */}
          </CTA_Group>

          <Stats>
            <StatItem>
              <strong>3+</strong>
              <span>Years</span>
            </StatItem>
            <StatDash></StatDash>
            <StatItem>
              <strong>10+</strong>
              <span>Projects</span>
            </StatItem>
          </Stats>
        </Left>

        <Right>
          <CodeCard>
            {`{
  role: "Frontend Engineer",experience: "3+ years",
  expertise: [
    "React & Next.js",
    "Scalable UI Architecture",
    "CMS Integration (Strapi, Contentful)",
    "Cloud & CI/CD (Azure, AWS)"
    ],
  bonus: "Built AI-powered features using LLM APIs"
}`}
          </CodeCard>
        </Right>
      </Hero_Content>
    </Hero_Container>
  );
}
