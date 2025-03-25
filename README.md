# Web Idiomas - Linguaflix

An interactive platform for learning languages (German and Spanish) developed with Astro and React.

## 🚀 Features

- **Interactive Lessons**: Content structured by levels (Basic, Intermediate, Advanced)
- **Multimedia Components**:
  - Video player integrated with Plyr
  - Vocabulary section with images and translations
  - Pronunciation practice with visual feedback
- **Responsive Design**: Adaptive interface for all devices
- **Intuitive Navigation**: Slidable card system to explore lessons

## 🛠️ Technologies Used

- [Astro](https://astro.build/) - Modern web framework
- [React](https://reactjs.org/) - JavaScript library for interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility CSS framework
- [Plyr](https://github.com/sampotts/plyr) - HTML5 video player

## 📚 Project Structure

```
web-idiomas/
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Page templates
│   ├── pages/         # Pages and routes
│   └── data/          # Data and content
├── public/            # Static files
└── package.json       # Dependencies and scripts
```

## 🚧 Current Status

The project is under active development. Currently implemented:

- ✅ Main page with level navigation
- ✅ Basic lesson system
- ✅ Custom video player controls
- ✅ Vocabulary section with images
- ✅ Interactive pronunciation practice

### In Progress

- 🔄 Implementation of more lessons and content
- 🔄 Interactivity improvements
- 🔄 User progress system
- 🔄 Performance optimization

## 🚀 How to Run

1. Clone the repository:
```bash
git clone https://github.com/IanPaniagua/web-idiomas-linguaflix.git
cd web-idiomas
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome. Please open an issue first to discuss the changes you would like to make.

## 📞 Contact

Ian Paniagua - [@IanPaniagua](https://github.com/IanPaniagua)

Project Link: [https://github.com/IanPaniagua/web-idiomas-linguaflix](https://github.com/IanPaniagua/web-idiomas-linguaflix)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
