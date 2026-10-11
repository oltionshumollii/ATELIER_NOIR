# ATELIER NOIR — Light, shaped.

A premium, responsive concept website for a fictional independent lighting and interior objects studio. This portfolio project combines editorial typography, architectural photography, product filtering, quick-view dialogs, scroll reveals, responsive navigation, and a pre-filled email enquiry flow.

> **Concept project:** ATELIER NOIR is fictional. Product names, descriptions, prices, and the contact address are illustrative and do not represent a real shop.

## Features
- Responsive editorial layout for desktop, tablet, and mobile
- Product filtering by category
- Accessible quick-view product dialogs
- Scroll reveal animations with `IntersectionObserver`
- Mobile navigation, form validation, and pre-filled email draft
- Semantic HTML, accessible labels, SEO and Open Graph metadata
- Reduced-motion support
- No frameworks, build step, or package installation required

## Stack
HTML5 · CSS3 · Vanilla JavaScript (ES6+) · Google Fonts · Unsplash photography

## Structure
```text
ATELIER_NOIR/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
└── assets/
    ├── styles.css
    └── app.js
```

## Run locally
1. Download or clone the repository.
2. Open `index.html` in a modern browser.
3. For a local server, open the folder in Visual Studio Code and use Live Server.

Fonts and images load from external services, so an internet connection is recommended.

## Deploy to GitHub Pages
1. Create a repository and upload the project files to its root.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select `main` and `/(root)`, then save.
5. Wait for the deployment URL to appear.

## Customize
- Edit sections and copy in `index.html`.
- Adjust design tokens, layouts, and breakpoints in `assets/styles.css`.
- Change filtering, dialogs, navigation, animation, and contact behavior in `assets/app.js`.
- Replace the demo `.example` email before adapting the site for a real organization.

## Contact form
This is a front-end demo. It does not send data to a server or store submissions. It validates the fields and opens the visitor's default email application with a pre-filled message. The reserved `.example` address is not a real contact inbox.

## Credits
- Concept, design direction, and development: **Oltion Shumolli**
- Fonts: Google Fonts (DM Sans, Manrope)
- Photography: Unsplash image URLs

## License
The project code and authored content are covered by the included **Custom Personal Use License**. Third-party assets remain subject to their respective terms. Read `LICENSE` before reuse or publication.
