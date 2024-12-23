<h1 align="center">My Portfolio Website</h1>
<p align="center"><i>Making A User friendly Portfolio Website using React Framework</i></p>
<div align="center">
  <a href="https://github.com/akshatrajsaxena/MyPortfolioReact/stargazers"><img src="https://img.shields.io/github/stars/akshatrajsaxena/MyPortfolioReact" alt="Stars Badge"/></a>
  <a href="https://github.com/akshatrajsaxena/MyPortfolioReact/network/members"><img src="https://img.shields.io/github/forks/akshatrajsaxena/MyPortfolioReact" alt="Forks Badge"/></a>
  <a href="https://github.com/akshatrajsaxena/MyPortfolioReact/pulls"><img src="https://img.shields.io/github/issues-pr/akshatrajsaxena/MyPortfolioReact" alt="Pull Requests Badge"/></a>
  <a href="https://github.com/akshatrajsaxena/MyPortfolioReact/issues"><img src="https://img.shields.io/github/issues/akshatrajsaxena/MyPortfolioReact" alt="Issues Badge"/></a>
  <a href="https://github.com/akshatrajsaxena/MyPortfolioReact/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/akshatrajsaxena/MyPortfolioReact" ?color=2b9348"></a>
  <a href="https://github.com/akshatrajsaxena/MyPortfolioReact/blob/master/LICENSE"><img src="https://img.shields.io/github/license/akshatrajsaxena/MyPortfolioReact ?color=2b9348" alt="License Badge"/></a>
</div>
<br>

# Portfolio Website
 
 **Welcome to my Portfolio code! the build of the code is done mainly in Javascript using react Framework.** This project showcases my skills, experiences, achievements and projects. Below you will find detailed information about the technologies used, file structure, responsiveness, and how to access my website.

## Why I Use React Framework

I chose React for this project due to its component-based architecture, which allows for reusable and maintainable code. React's virtual DOM ensures efficient updates and rendering, leading to a smoother user experience. Additionally, React's rich ecosystem and community support make it an excellent choice for building modern web applications.

## Is the Website Responsive?

No, the website is not responsive. You may have different views depending on your device. This website was made by me to understand react JS framework, and I was intensely aware of its functionality.

## Project Structure

The project is organized into several components and directories for better maintainability:

    src/components: Contains all React components, such as Header, Footer, Experience, and Projects.
    src/assets: Stores images, icons, and other static assets.
    src/styles: Includes CSS modules for styling components.
    src/data: Contains JSON files with data for skills and history (now embedded directly in components).
    src/utils: Utility functions, like getImageUrl.
    public: Public assets and the main HTML file.

Main Components

```
App.js: The root component that includes the main layout and routing.
Header.js: Displays the navigation bar and logo.
Footer.js: Contains the footer content.
Experience.js: Showcases my skills and professional history.
Projects.js: Lists my personal and professional projects.
```
# Wanna Visit my Website
[My PortFolio](https://akshatrajsaxena.netlify.app/)

## How to Access the Website

Currently i haven't hosted my website anywhere as it is in development. But in future i will surely host it and will update the things on this repo.

### Clone the Repository

```
git clone https://github.com/akshatrajsaxena/react-portfolio.git
cd react-portfolio
```

### Install Dependencies

```
npm install
```

### Run the Development Server

```
npm run dev
```

Open http://localhost:3000  in your browser to view the website.

## What is the Purpose of This Website?

The purpose of this website is to showcase my professional skills, work experience, and projects. It serves as an online portfolio for potential employers and collaborators to learn more about me and my work.
How is the Website Styled?

The website uses CSS modules for styling, ensuring scoped and maintainable CSS. Additionally, it utilizes CSS Flexbox and Grid for layout management, ensuring a responsive design.
How to Contribute?

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## Screenshot

![Screenshot 2024-07-07 131242](https://github.com/akshatrajsaxena/MyPortfolioReact/assets/119042958/b61b5dfc-8b19-4732-99b0-273d84fca9dd)

Above is the main my homepage which is currently in development and being updated on regular basis

## LICENSE

[MIT License](https://github.com/akshatrajsaxena/developerfolio/blob/main/LICENSE)

## Contact

If you have any questions or would like to get in touch, you can reach me at [Akshat Raj Saxena](mailto:akshat22054@iiitd.ac.in)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



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
