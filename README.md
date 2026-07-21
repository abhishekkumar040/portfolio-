# Abhishek Kumar — Portfolio

A single-page personal portfolio website for **Abhishek Kumar**, a final-year Computer Science student, Web Developer, and AI Engineer based in Bengaluru, India. Built as a self-contained HTML file with a dark, terminal-inspired aesthetic.

🔗 **Live site:** _add your deployed URL here_

## About

This portfolio highlights a blend of technical and creative work:

- Full-stack development (Python, FastAPI, Flask, React, Next.js)
- Explainable AI / machine learning projects
- Media & content creation (150K+ combined audience across Instagram, YouTube, and Facebook)

## Features

- **Responsive single-page design** — works across desktop and mobile
- **Animated hero section** with a typing effect that cycles through roles
- **Simulated "scan" animation** showing an animated confidence meter
- **Scroll-reveal animations** for sections as you scroll down the page
- **Animated statistics counters** (audience size, model accuracy, CGPA, etc.)
- **Sections include:**
  - About
  - Projects (with metric bars for model accuracy/precision/recall/F1)
  - Skills (languages, AI/ML, frameworks, databases, tools & cloud, deployment)
  - Experience & achievements
  - Education timeline
  - Certifications
  - Resume download
  - Contact
- Respects `prefers-reduced-motion` for accessibility

## Tech Stack

- **HTML5** — semantic single-file structure
- **CSS3** — custom properties (CSS variables), gradients, animations, responsive grid/flexbox layouts
- **Vanilla JavaScript** — no frameworks or build tools required
  - `IntersectionObserver` for scroll-triggered reveal and counter animations
  - Typing-effect animation for the role text
- **Google Fonts** — Space Grotesk, IBM Plex Mono, Inter

## Getting Started

This is a static, dependency-free website — no build step required.

1. Clone the repository
   ```bash
   git clone https://github.com/abhishekkumar040/<repo-name>.git
   cd <repo-name>
   ```
2. Open `abhishek-kumar-portfolio.html` directly in your browser, **or** serve it locally:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

## Project Structure

```
.
├── abhishek-kumar-portfolio.html   # Main portfolio page (HTML, CSS, JS all in one file)
└── Abhishek_Kumar_Resume.pdf       # Downloadable resume (linked from the site)
```

## Customization

To adapt this template for your own portfolio:

- Update the `<title>` and `<meta name="description">` tags in the `<head>`
- Edit the **hero**, **about**, **projects**, **skills**, **experience**, **education**, and **certifications** sections with your own content
- Replace `Abhishek_Kumar_Resume.pdf` with your own resume file
- Update contact details (email, phone, and social links) in the **Contact** section
- Adjust the color palette via the CSS custom properties defined in `:root` (e.g. `--teal`, `--amber`, `--bg`)

## Deployment

Since this is a static site, it can be deployed for free on:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Render](https://render.com)

## Contact

- **Email:** bika2413@gmail.com
- **GitHub:** [@abhishekkumar040](https://github.com/abhishekkumar040)
- **LinkedIn:** [abhishek-singh-57233019b](https://www.linkedin.com/in/abhishek-singh-57233019b/)
- **Instagram:** [@abhishek.media](https://www.instagram.com/abhishek.media/)
- **YouTube:** [@abhishek.mediaa](https://www.youtube.com/@abhishek.mediaa)

## License

© 2026 Abhishek Kumar. All rights reserved.
