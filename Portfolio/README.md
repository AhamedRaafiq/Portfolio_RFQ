# Portfolio Frontend Assets & Code Guide

This directory houses the complete frontend application for the **Ahamed Raafiq Engineering Portfolio**.

---

## 🗂️ Directory Overview

```text
Portfolio/
├── index.html                  # Single-page application markup
└── assets/
    ├── css/
    │   ├── main.css            # Primary stylesheet (typography, layout, custom hero, dark mode)
    │   ├── bootstrap.min.css   # Responsive grid layout system
    │   ├── aos.css             # Animate on Scroll animation styles
    │   ├── swiper-bundle.css   # Carousel / slider styling
    │   └── magnific-popup.css  # Lightbox overlay styles
    ├── js/
    │   ├── main.js             # Theme initialization, preloader timeline, back-to-top button
    │   ├── custom-gsap.js      # Advanced GSAP timelines & scroll effects
    │   ├── purecounter.js      # Incremental number counter engine
    │   ├── tw-cursor.js        # Magic animated cursor tracking
    │   ├── jquery-3.7.1.min.js # Base DOM library
    │   └── gsap/               # GSAP core and premium plugins
    ├── images/
    │   ├── Certificate/        # Academic & industry certificate PDFs and previews
    │   ├── logo/               # Site favicons and brand marks
    │   ├── thumbs/             # High-resolution project, domain, and profile thumbnails
    │   └── tools/              # 20 high-fidelity vector & color tool badges
    └── Tool Logo/              # Additional branding assets
```

---

## 🧩 HTML Architecture (`index.html`)

The markup is organized into clean, semantic sections connected to top navigation anchors:

1. **Header / Navbar (`.header-three`)**:
   - Social icons (LinkedIn, GitHub, X)
   - Pill-styled navigation links (`Home`, `Experience`, `Skills`, `Projects`, `Certifications`, `Contacts`)
   - Direct `DOWNLOAD CV` button
2. **Hero Section (`#hero-v2`)**:
   - Giant watermark typography (`RAAFIQ`)
   - Left vertical status rail (`Robotics Engineer | 2026`)
   - Live metrics row (Projects Built, Industry Internships, Certifications)
   - Headline, tagline, description, and primary CTA row
   - Center-right blended portrait of Ahamed Raafiq with real-time baseline synchronization
   - Animated scroll-down indicator
3. **About Me (`#about`)**:
   - Degree credentials badge (`BSc in Electronics Engineering`)
   - Narrative covering robotics, firmware, control systems, and Altium PCB design
4. **What I Do / Specialized Domains (`#services`)**:
   - 8 technical disciplines with dynamic directional hover image reveals
5. **Featured Projects (`#portfolio`)**:
   - Production projects with live links, tags, and interactive Boost/Buck converter tab switcher
6. **Verified Certifications (`#certifications`)**:
   - Professional certifications from Stanford Online, DeepLearning.AI, Coursera, SEED Labs, and Spaceborn
7. **Tech Stack & Toolchain (`#skills`)**:
   - Centered 20-card grid showcasing official toolchain badges with dual-state roll-up animations
8. **Contact & Message Section (`#contact`)**:
   - Glassmorphic card container with styled inputs and client-side email compiler
   - Direct WhatsApp messaging integration (`+94 766 994 358`)
   - Footer branding, watermark, and copyright

---

## 🛠️ Key Custom Scripts in `index.html`

### 1. Dynamic Hero Baseline Synchronization (`setupHeroBaselineAlign`)
- **Purpose**: Ensures the bottom cut of the portrait photo aligns flush with the `VIEW PROJECTS` and `DOWNLOAD CV` button baseline across all desktop viewports (`>= 992px`).
- **Features**:
  - Dynamically computes bounding rects using `getBoundingClientRect()`.
  - Applies compensatory hardware-accelerated CSS `translateY`.
  - Automatically re-syncs on `ResizeObserver`, font rendering completion, image load, and window resize.
  - Automatically resets on mobile (`< 992px`) to preserve natural responsive stacking.

### 2. Interactive Power Converter Switcher (`setupConverterSwitcher`)
- **Purpose**: Toggles between the UC3843AN Boost Converter and LM2596 Buck Converter.
- **Features**:
  - Dynamically updates Altium 3D board preview images, GitHub repo links, LinkedIn post URLs, and technical keywords.
  - Applies smooth fade-in/fade-out transitions during tab switches.

### 3. Contact Form Mailto Handler (`setupContactForm`)
- **Purpose**: Validates required fields (`Name`, `Email`, `Message`), generates a formatted mailto payload directed to `raafiqofficial@gmail.com`, and opens the user's default email client with visual confirmation.

---

## 🎨 How to Make Common Updates

### Adding a New Project:
1. Place project thumbnail image in `assets/images/thumbs/`.
2. Locate `#portfolio` in `index.html`.
3. Add or modify a `.portfolio-three-item` container with project title, domain tag, description, and GitHub/demo link.

### Updating Toolchain Logos:
1. Place 64x64 or vector PNGs in `assets/images/tools/` following the `[tool]_color.png` naming convention.
2. Locate `#skills` in `index.html` and update the respective `<img>` tag and skill title.

### Updating Resume:
1. Replace `CV/Raafiq_Resume_(R1).pdf` with your updated resume file while keeping the file name identical.
