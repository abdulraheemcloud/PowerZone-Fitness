# PowerZone Fitness – Basic Plan Demo Website

## Project Description

This is a **Basic Plan Demo Website (₹4,999)** built by **RNS Digital** for portfolio purposes.
It demonstrates the quality and features delivered to clients under the Basic/Starter plan.

**Business:** PowerZone Fitness  
**Location:** Saravanampatti, Coimbatore, Tamil Nadu  
**Phone / WhatsApp:** +91 75502 68805  
**Theme:** Dark Modern Gym  
**Designed by:** [RNS Digital](https://rnsdigital.co.in)

---

## Features

- Dark industrial gym theme with red accent colours
- Sticky navigation bar with smooth scroll and active link highlighting
- Animated hero section with headline and CTA buttons
- Services section (4 programs)
- Membership plans (Basic & Premium) with feature comparison
- Gallery section (3 images, hover effects)
- Contact section with address, phone, WhatsApp button, and embedded Google Map
- CTA banner ("Limited Seats Available – Join Today")
- Footer with quick links and branding
- Floating WhatsApp button (fixed, always visible)
- Scroll-reveal animations for all content sections
- Fully mobile-responsive layout (hamburger menu on mobile)

---

## Folder Structure

```
gym-basic-demo/
│
├── index.html          ← Main HTML file (all sections)
├── README.md           ← This file
│
├── css/
│   └── style.css       ← All styles (variables, layout, responsive)
│
├── js/
│   └── script.js       ← Navbar scroll, hamburger menu, scroll reveal
│
└── images/
    ├── gym-hero.jpg    ← Hero background (1920×1080 px)
    ├── gym1.jpg        ← Gallery image 1 – Weights Floor (800×600 px)
    ├── gym2.jpg        ← Gallery image 2 – Cardio Zone (800×600 px)
    └── gym3.jpg        ← Gallery image 3 – Training Area (800×600 px)
```

---

## How to Run Locally

1. **Download / Clone** this project folder to your computer.

2. **Add your images** inside the `images/` folder using the exact file names listed above.
   (See Image Guidelines below for specifications.)

3. **Open the project** — simply double-click `index.html` to open it in your browser.
   No local server or build tool is required.

4. **Optional – Live Server (VS Code):**
   - Install the **Live Server** extension in VS Code.
   - Right-click `index.html` → **"Open with Live Server"**.
   - The site will open at `http://127.0.0.1:5500` and auto-reload on file changes.

---

## Image Naming Guidelines

All images must be placed inside the `images/` folder with **exactly** these file names:

| File Name       | Usage              | Notes                        |
|-----------------|--------------------|------------------------------|
| `gym-hero.jpg`  | Hero background    | Wide landscape, people training |
| `gym1.jpg`      | Gallery – Image 1  | Weights / gym floor shot     |
| `gym2.jpg`      | Gallery – Image 2  | Cardio equipment / treadmills |
| `gym3.jpg`      | Gallery – Image 3  | Personal training / trainer   |

> ⚠️ File names are **case-sensitive**. Use lowercase only. Do not rename to `Gym-Hero.JPG` etc.

---

## Recommended Image Resolution

### Hero Image

| Property    | Value                     |
|-------------|---------------------------|
| File name   | `gym-hero.jpg`            |
| Resolution  | **1920 × 1080 px** (Full HD) |
| Aspect ratio | 16:9                     |
| File size   | **300 – 400 KB** (after compression) |
| Tips        | Choose a dramatic, wide gym floor or training shot. Dark or moody lighting works best with this theme. |

### Gallery Images

| Property    | Value                     |
|-------------|---------------------------|
| File names  | `gym1.jpg`, `gym2.jpg`, `gym3.jpg` |
| Resolution  | **800 × 600 px**          |
| Aspect ratio | 4:3                      |
| File size   | **150 – 250 KB** (after compression) |
| Tips        | Use bright, clear shots of different areas of the gym. |

---

## Image Compression

Before adding images to the project, compress them to reduce load time:

1. Go to **[tinypng.com](https://tinypng.com)**
2. Upload your `.jpg` or `.png` images
3. Download the compressed versions
4. Rename them as per the guidelines above and place them in the `images/` folder

> Compressing images improves page speed and SEO scores significantly.

---

## Customisation Notes

- **Phone / WhatsApp number:** Search for `7550268805` in `index.html` and replace with the client's number.
- **Address:** Update in the Contact section and the Google Maps embed URL.
- **Google Maps embed:** Replace the `<iframe src="...">` URL in the Contact section with the business's actual Google Maps embed link.
- **Colours:** All theme colours are stored as CSS variables at the top of `css/style.css` — easy to update.
- **Plans & Pricing:** Edit the plan cards directly in `index.html`.

---

## Credits

| Role            | Details                                  |
|-----------------|------------------------------------------|
| Web Designer    | RNS Digital – [rnsdigital.co.in](https://rnsdigital.co.in) |
| Business        | PowerZone Fitness, Saravanampatti        |
| Plan            | Basic Plan – ₹4,999                      |
| Year            | 2026                                     |

---

*This demo site is built for portfolio purposes by RNS Digital.*
