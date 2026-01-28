Chai Royale — Cinematic Scrollytelling Landing Page

This project is a cinematic scrollytelling landing page built with React and CSS, designed to introduce a premium Indian chai brand through motion, depth, and storytelling.

✨ Key Features

Scroll-driven storytelling using native scroll progress

Cinematic background with subtle parallax and depth

Four narrative stages that transition smoothly like film scenes

Performance-first approach (no heavy animation libraries)

Royal Indian visual theme (gold, espresso, heritage tones)

Responsive and accessible with reduced-motion support

🛠️ Tech Stack

React (component structure)

CSS (GPU-accelerated transforms) for animation

requestAnimationFrame for smooth scroll handling

No external animation libraries (Framer / GSAP avoided intentionally)

🧠 Implementation Approach

Scroll position is mapped to a normalized progress value (0 → 1), which drives:

Background scale and parallax

Stage visibility, opacity, blur, and motion

Progress indicator at the top

All motion is handled via CSS variables, keeping React re-renders minimal and performance high.

📱 Responsive Design

Desktop: full cinematic scrollytelling experience

Mobile: extended scroll length with simplified motion

Respects prefers-reduced-motion

🎯 Purpose

Built as an internship assignment showcase to demonstrate:

Advanced UI/UX thinking

Scroll-based interaction design

Performance-aware frontend engineering

Visual storytelling without overengineering
