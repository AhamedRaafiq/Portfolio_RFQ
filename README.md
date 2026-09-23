# Ahamed Raafiq — Engineering Portfolio

[![Portfolio Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-AhamedRaafiq-181717?logo=github)](https://github.com/AhamedRaafiq)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ahamed%20Raafiq-0A66C2?logo=linkedin)](https://linkedin.com/in/ahamedraafiq)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat%20Directly-25D366?logo=whatsapp)](https://wa.me/94766994358)

Welcome to the official portfolio repository of **Ahamed Raafiq**, an **Electronics Engineering graduate** specializing in **Robotics & Autonomous Systems, Embedded Systems, PCB Design, UAVs, and Machine Learning**.

This repository contains the full production codebase, custom styling, interactive modules, and high-resolution assets powering the portfolio website.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Architecture & Directory Structure](#project-architecture--directory-structure)
- [Core Sections & Technical Highlights](#core-sections--technical-highlights)
  - [1. Editorial Hero Section & Dynamic Baseline Engine](#1-editorial-hero-section--dynamic-baseline-engine)
  - [2. About Me & Professional Background](#2-about-me--professional-background)
  - [3. What I Do — 8 Specialized Engineering Domains](#3-what-i-do--8-specialized-engineering-domains)
  - [4. Featured Engineering Projects](#4-featured-engineering-projects)
  - [5. Verified Industry Certifications](#5-verified-industry-certifications)
  - [6. Tech Stack & Toolchain](#6-tech-stack--toolchain)
  - [7. Glassmorphic Contact Section](#7-glassmorphic-contact-section)
- [Key Scripts & Algorithms](#key-scripts--algorithms)
- [Local Development & Setup](#local-development--setup)
- [Browser Compatibility & Performance](#browser-compatibility--performance)
- [Author & Contact](#author--contact)

---

## 🚀 Overview

The portfolio is designed with an editorial dark-and-light aesthetic featuring high-contrast typography, interactive components, responsive layouts, and GSAP-driven micro-interactions.

- **Primary Stack**: HTML5, CSS3 (Modern Flexbox, CSS Grid, Custom Properties), Vanilla JavaScript (ES6+), GSAP (ScrollSmoother, ScrollTrigger, SplitText), Bootstrap 5 Grid, Swiper.js, PureCounter, and Phosphor Icons.
- **Design Philosophy**: High technical clarity, structured hierarchy, responsive across all screen sizes (mobile, tablet, desktop, ultra-wide), and zero unnecessary dependencies.

---

## ✨ Key Features

- **Dynamic Baseline Alignment**: Proprietary JavaScript synchronization engine that aligns the portrait cut flush with the CTA button baseline in real time across any desktop screen resolution.
- **Interactive Power Converter Switcher**: Live tabbed demonstration showcasing the UC3843AN Boost Converter and LM2596 Buck Converter PCB designs with seamless image cross-fading, technical keyword switching, and external GitHub/LinkedIn links.
- **20-Badge Tech Stack & Toolchain**: Authentically branded vector tool emblems with smooth roll-up hover animations and balanced desktop grid centering.
- **Glassmorphic Contact Card**: Modern high-contrast contact form with real-time field validation, mailto payload generation, direct WhatsApp chat integration, and verified social links.
- **Fluid Micro-Animations**: Smooth cursor tracking (`tw-magic-cursor`), PureCounter numerical metrics, marquee ticker, and GSAP scroll animations.

---

## 📁 Project Architecture & Directory Structure

```text
Portfolio_RFQ/
├── .gitignore                      # Excludes temporary scripts, logs, and OS caches
├── LICENSE                         # MIT License
├── README.md                       # Repository documentation and technical guide
├── CV/
│   └── Raafiq_Resume_(R1).pdf      # High-resolution curriculum vitae
└── Portfolio/
    ├── index.html                  # Main single-page portfolio document
    └── assets/
        ├── css/
        │   ├── aos.css             # Animate On Scroll styles
        │   ├── bootstrap.min.css   # Bootstrap responsive grid framework
        │   ├── magnific-popup.css  # Modal popup styles
        │   ├── main.css            # Master stylesheet & custom responsive overrides
        │   └── swiper-bundle.css   # Slider styles
        ├── js/
        │   ├── aos.js              # Scroll trigger animations
        │   ├── boostrap.bundle.min.js # Bootstrap interactive components
        │   ├── custom-gsap.js      # Tailored GSAP timelines and animations
        │   ├── jquery-3.7.1.min.js # jQuery utility library
        │   ├── jquery.marquee.min.js # Smooth horizontal text marquee ticker
        │   ├── magnific-popup.min.js # Image / certificate lightboxes
        │   ├── main.js             # Theme initialization, preloader, back-to-top
        │   ├── phosphor-icon.js    # Phosphor vector icon sets
        │   ├── purecounter.js      # Counting animations for statistics
        │   ├── slider-active.js    # Swiper carousels initialization
        │   ├── swiper-bundle.min.js# Carousel core engine
        │   ├── tw-cursor.js        # Magic animated cursor tracker
        │   └── gsap/
        │       ├── chroma.min.js
        │       ├── gsap-scroll-smoother.js
        │       ├── gsap-scroll-to-plugin.js
        │       ├── gsap-scroll-trigger.js
        │       ├── gsap-split-text.js
        │       └── gsap.js
        ├── images/
        │   ├── Certificate/        # Verified certification credentials & transcripts
        │   ├── logo/               # Site favicons and brand marks
        │   ├── thumbs/             # Project cards, service banners, and portrait photos
        │   └── tools/              # Authentic color and monochrome toolchain badges
        └── Tool Logo/              # Source vector logos and tool branding assets
```

---

## 🏛️ Core Sections & Technical Highlights

### 1. Editorial Hero Section & Dynamic Baseline Engine
- **Location**: `#hero-v2` in `Portfolio/index.html`
- **Features**:
  - Prominent typographic watermark background (`RAAFIQ`).
  - Vertical left rail track with status tag (`Robotics Engineer`), divider line, and year mark (`2026`).
  - Live animated statistics (`+6 Projects Built`, `+2 Industry Internships`, `+5 Certifications Earned`).
  - Primary call-to-action buttons: **`VIEW PROJECTS`** (smooth scrolls to `#portfolio`) and **`DOWNLOAD CV`** (direct download of `CV/Raafiq_Resume_(R1).pdf`).
  - **Dynamic Baseline Synchronization**: Automatically calculates and enforces an exact horizontal baseline between the bottom edge of the CTA button row and the bottom of the portrait image across all viewports (`>= 992px`).

### 2. About Me & Professional Background
- **Location**: `#about` in `Portfolio/index.html`
- **Features**:
  - Degree badge (`BSc in Electronics Engineering`).
  - Detailed bio covering hands-on robotics, control theory, embedded firmware, PCB layout in Altium Designer, and ROS2 simulation pipelines.
  - Interactive circular button and summary metrics.

### 3. What I Do — 8 Specialized Engineering Domains
- **Location**: `#services` in `Portfolio/index.html`
- **Domains Covered**:
  1. **Robotics & Automation** (ROS2, Gazebo, Motion Planning, Sensor Fusion)
  2. **Electronics & PCB Design** (Altium Designer, Cadence, Multilayer Routing, Power Electronics)
  3. **Embedded Systems** (ESP32, STM32, Arduino, FreeRTOS, I2C/SPI/UART)
  4. **UAV & Drone Systems** (PX4 Autopilot, QGroundControl, Mission Planning, Telemetry)
  5. **Digital Signal Processing** (MATLAB, Filtering, FFT, Wavelet, EEG Signal Processing)
  6. **Control Systems** (PID Tuning, State-Space, MATLAB/Simulink, Closed-Loop Control)
  7. **Machine Learning** (TensorFlow, Scikit-Learn, Computer Vision, Signal Classification)
  8. **Programming & Tools** (C++, Python, Git/GitHub, Linux/Ubuntu, VS Code)
- Features interactive image popouts on hover with smooth directional transformations.

### 4. Featured Engineering Projects
- **Location**: `#portfolio` in `Portfolio/index.html`
- **Highlights**:
  - **Project 01: Non-Invasive Continuous Glucose Monitoring System (GlucoSense)** — Multi-wavelength NIR optical sensor, transimpedance amplification, ESP32 processing, and wireless dashboard.
  - **Project 02: Autonomous Line Follower Robot** — High-speed precision line tracking using custom 8-IR sensor array, PID control, and dual H-bridge motor drivers.
  - **Project 03: Power Supply Modules with Boost & Buck Converters** — Includes an interactive tab switcher comparing the **UC3843AN Step-Up DC-DC Boost Converter (9V–16V to 28V)** and **LM2596 Step-Down DC-DC Buck Converter (3.3V–20V/3A)**, complete with Altium 3D board renders, GitHub repos, and LinkedIn demos.
  - **Project 04: IMU Visualizer & Motion Tracker** — 6-DOF IMU sensor fusion, Kalman filtering, and real-time 3D orientation visualization via serial telemetry.
  - **Project 05: EEG Signal Acquisition & Processing System** — Multi-channel EEG biometric acquisition, bandpass filtering, notch filter, and spectral frequency analysis in MATLAB.
  - **Project 06: Smart Energy Harvesting & Power Management System** — Ambient solar/thermal RF harvesting with MPPT and LiPo charge management.

### 5. Verified Industry Certifications
- **Location**: `#certifications` in `Portfolio/index.html`
- **Credentials**:
  - Supervised Machine Learning: Regression and Classification (DeepLearning.AI & Stanford Online)
  - Python for Everybody Specialization (University of Michigan / Coursera)
  - Spaceborn Intern Certificate (Spaceborn Pvt Ltd)
  - SEED Internship Certification (SEED Labs)
  - Robotics & Autonomous Systems Engineering

### 6. Tech Stack & Toolchain
- **Location**: `#skills` in `Portfolio/index.html`
- **Features**:
  - 20 high-fidelity vector tool cards: ROS2, Gazebo, Altium Designer, Cadence, PX4 Autopilot, QGroundControl, Arduino, ESP32, Raspberry Pi, MATLAB, Simulink, TensorFlow, Python, C++, C, Linux/Ubuntu, Git/GitHub, VS Code, NumPy, SciPy.
  - Symmetrical desktop centering with dual-state roll-up animations (color icons on light `#f5f5f5` cards).

### 7. Glassmorphic Contact Section
- **Location**: `#contact` in `Portfolio/index.html`
- **Features**:
  - Dark glassmorphism card with blurred backdrop filter.
  - Form validation with inline feedback.
  - Direct email compilation (`mailto:raafiqofficial@gmail.com`).
  - Direct WhatsApp link (`https://wa.me/94766994358`).
  - Active verified social profiles: [LinkedIn](https://linkedin.com/in/ahamedraafiq) and [GitHub](https://github.com/AhamedRaafiq).

---

## ⚙️ Key Scripts & Algorithms

### 1. Dynamic Hero Baseline Synchronization (`setupHeroBaselineAlign`)
Maintains an exact horizontal baseline between the CTA button row and the bottom of the profile picture across varying viewport sizes and dynamic font rendering:

```javascript
function setupHeroBaselineAlign() {
  const cta = document.querySelector('.hero-v2__cta-row');
  const img = document.querySelector('.hero-v2__portrait-img');
  const box = document.querySelector('.hero-v2__portrait-box');
  const leftCol = document.querySelector('.hero-v2__left-col');
  if (!cta || !img || !box) return;

  function alignBaseline() {
    if (window.innerWidth < 992) {
      box.style.transform = '';
      return;
    }

    box.style.transform = 'none';

    const btns = cta.querySelectorAll('.hero-v2__btn');
    let ctaBottom = cta.getBoundingClientRect().bottom;
    if (btns.length > 0) {
      ctaBottom = Math.max(...Array.from(btns).map(b => b.getBoundingClientRect().bottom));
    }

    const imgBottom = img.getBoundingClientRect().bottom;
    const diff = imgBottom - ctaBottom;

    // Aligns bottom cut of portrait flush with CTA buttons
    box.style.transform = `translateY(${-diff}px)`;
  }

  alignBaseline();

  if (img.complete) alignBaseline();
  else img.addEventListener('load', alignBaseline);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(alignBaseline);
  }

  window.addEventListener('resize', alignBaseline);

  if (window.ResizeObserver && leftCol) {
    const ro = new ResizeObserver(() => alignBaseline());
    ro.observe(leftCol);
    ro.observe(cta);
  }

  window.addEventListener('load', () => {
    setTimeout(alignBaseline, 100);
    setTimeout(alignBaseline, 500);
    setTimeout(alignBaseline, 1200);
    setTimeout(alignBaseline, 2200);
  });
}
```

### 2. Interactive Power Converter Switcher (`setupConverterSwitcher`)
Smoothly switches between Boost and Buck converter technical cards with cross-fade transitions and dynamic metadata updates:

```javascript
const converterData = {
  boost: {
    titleLink: "https://github.com/AhamedRaafiq/Power_Supply_With_Boost_Converter",
    githubUrl: "https://github.com/AhamedRaafiq/Power_Supply_With_Boost_Converter",
    githubLabel: "Visit GitHub: Boost Converter Repo",
    linkedinUrl: "https://lnkd.in/p/dyk3uJRg",
    linkedinLabel: "View LinkedIn Post",
    imgSrc: "assets/images/thumbs/portfolio-three-thumb3-boost.jpg?v=boost",
    imgAlt: "UC3843AN DC-DC Boost Converter PCB Design",
    keywords: ["UC3843AN PWM", "9V–16V to 28V", "Step-Up DC-DC", "Altium Designer", "Power Integrity"]
  },
  buck: {
    titleLink: "https://github.com/AhamedRaafiq/Power_Supply_With_Buck_Converter",
    githubUrl: "https://github.com/AhamedRaafiq/Power_Supply_With_Buck_Converter",
    githubLabel: "Visit GitHub: Buck Converter Repo",
    linkedinUrl: "https://lnkd.in/p/dBTvMDjw",
    linkedinLabel: "View LinkedIn Post",
    imgSrc: "assets/images/thumbs/portfolio-three-thumb3-buck.jpg?v=buck",
    imgAlt: "LM2596 DC-DC Buck Converter Power Supply PCB Design",
    keywords: ["LM2596-ADJ", "3.3V–20V / 3A", "AC-DC Step-Down", "Altium Designer", "NI Multisim"]
  }
};
```

---

## 💻 Local Development & Setup

To run and preview the portfolio locally:

### Option 1: Using Python
```bash
# From repository root
python -m http.server 8000 --directory "Portfolio"
```
Then navigate to: `http://localhost:8000`

### Option 2: Using Node.js
```bash
# Using npx serve
npx serve Portfolio -p 8000
```
Then navigate to: `http://localhost:8000`

### Option 3: Using VS Code Live Server
1. Open the repository in Visual Studio Code.
2. Right-click `Portfolio/index.html`.
3. Select **"Open with Live Server"**.

---

## 🌐 Browser Compatibility & Performance

- **Chrome / Edge / Brave**: Fully compatible (Blink engine)
- **Firefox**: Fully compatible (Gecko engine)
- **Safari**: Fully compatible (WebKit engine, iOS 14+)
- **Responsive Layout**:
  - Desktop (> 1200px): Dual-column editorial layout with baseline synchronization
  - Tablet (768px – 1199px): Optimized column stacking and scalable font clamping
  - Mobile (< 768px): Vertical mobile-first flow with touch-friendly targets

---

## 📬 Author & Contact

**Ahamed Raafiq**  
*Electronics & Robotics Engineer*  
Colombo, Sri Lanka

- **Email**: [raafiqofficial@gmail.com](mailto:raafiqofficial@gmail.com)
- **LinkedIn**: [linkedin.com/in/ahamedraafiq](https://linkedin.com/in/ahamedraafiq)
- **GitHub**: [github.com/AhamedRaafiq](https://github.com/AhamedRaafiq)
- **WhatsApp**: [+94 766 994 358](https://wa.me/94766994358)
- **Resume**: [Download PDF](CV/Raafiq_Resume_(R1).pdf)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
