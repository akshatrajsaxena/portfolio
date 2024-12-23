# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
react-portfolio
├─ assets
│  ├─ about
│  │  ├─ aboutImage.png
│  │  ├─ cursorIcon.png
│  │  ├─ logo (1).png
│  │  ├─ logo (2).png
│  │  ├─ serverIcon.png
│  │  ├─ uiIcon.png
│  │  └─ web_developer.png
│  ├─ achievements
│  │  ├─ blockchain.png
│  │  ├─ codeforces.png
│  │  └─ React_icon.png
│  ├─ contact
│  │  ├─ emailIcon.png
│  │  ├─ githubIcon.png
│  │  └─ linkedinIcon.png
│  ├─ hero
│  │  ├─ myself.png
│  │  ├─ profile-pic(1).png
│  │  └─ profile-pic.png
│  ├─ history
│  │  ├─ google.png
│  │  ├─ lit.jpg
│  │  ├─ microsoft.png
│  │  └─ netflix.png
│  ├─ nav
│  │  ├─ closeIcon.png
│  │  └─ menuIcon.png
│  ├─ projects
│  │  └─ project.png
│  └─ skills
│     ├─ cpp.png
│     ├─ css.png
│     ├─ figma.png
│     ├─ graphql.png
│     ├─ html.png
│     ├─ java.png
│     ├─ mongodb.png
│     ├─ node.png
│     ├─ python.png
│     ├─ react.png
│     └─ sql.png
├─ dist
│  ├─ assets
│  │  ├─ aboutImage-bd53e1e5.png
│  │  ├─ blockchain-f5889d38.png
│  │  ├─ codeforces-0400557a.png
│  │  ├─ cpp-231fce64.png
│  │  ├─ cursorIcon-22d0a330.png
│  │  ├─ index-1f523519.css
│  │  ├─ index-34632bb3.js
│  │  ├─ java-8f837206.png
│  │  ├─ lit-42b53ee0.jpg
│  │  ├─ logo (1)-89314a70.png
│  │  ├─ logo (2)-cafb4a38.png
│  │  ├─ myself-0d616a82.png
│  │  ├─ node-521da021.png
│  │  ├─ outfit-latin-400-normal-b20a679d.woff
│  │  ├─ outfit-latin-400-normal-e5897a88.woff2
│  │  ├─ outfit-latin-ext-400-normal-04647840.woff2
│  │  ├─ outfit-latin-ext-400-normal-7a074dd1.woff
│  │  ├─ profile-pic(1)-24056c5b.png
│  │  ├─ profile-pic-27f815cf.png
│  │  ├─ project-07498ec0.png
│  │  ├─ python-b2f461c9.png
│  │  ├─ react-cccfc4c7.png
│  │  ├─ React_icon-80a16ab2.png
│  │  ├─ roboto-cyrillic-400-normal-495d38d4.woff2
│  │  ├─ roboto-cyrillic-400-normal-adba67d2.woff
│  │  ├─ roboto-cyrillic-ext-400-normal-0a32035a.woff
│  │  ├─ roboto-cyrillic-ext-400-normal-b7ef2cd1.woff2
│  │  ├─ roboto-greek-400-normal-076b9dc1.woff
│  │  ├─ roboto-greek-400-normal-daf51ab5.woff2
│  │  ├─ roboto-latin-400-normal-a9fdbefa.woff
│  │  ├─ roboto-latin-400-normal-f6734f81.woff2
│  │  ├─ roboto-latin-ext-400-normal-3c23eb02.woff2
│  │  ├─ roboto-latin-ext-400-normal-c2b94086.woff
│  │  ├─ roboto-vietnamese-400-normal-77b24796.woff2
│  │  ├─ roboto-vietnamese-400-normal-d2390f1a.woff
│  │  ├─ serverIcon-5f663350.png
│  │  ├─ sql-0394b227.png
│  │  ├─ uiIcon-747084fb.png
│  │  └─ web_developer-06caa5b5.png
│  ├─ favicon.ico
│  └─ index.html
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ App.module.css
│  ├─ components
│  │  ├─ About
│  │  │  ├─ About.jsx
│  │  │  └─ About.module.css
│  │  ├─ achievements
│  │  │  ├─ achievements.jsx
│  │  │  └─ achievements.module.css
│  │  ├─ Contact
│  │  │  ├─ Contact.jsx
│  │  │  └─ Contact.module.css
│  │  ├─ Experience
│  │  │  ├─ Experience.jsx
│  │  │  └─ Experience.module.css
│  │  ├─ Hero
│  │  │  ├─ Hero.jsx
│  │  │  └─ Hero.module.css
│  │  ├─ Navbar
│  │  │  ├─ Navbar.jsx
│  │  │  └─ Navbar.module.css
│  │  ├─ Projects
│  │  │  ├─ ProjectCard.jsx
│  │  │  ├─ ProjectCard.module.css
│  │  │  ├─ projects.json
│  │  │  ├─ Projects.jsx
│  │  │  └─ Projects.module.css
│  │  └─ utils.js
│  ├─ index.css
│  └─ main.jsx
└─ vite.config.js

```