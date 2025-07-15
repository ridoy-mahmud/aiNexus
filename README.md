# 🌌 AI Nexus - Futuristic AI Tools Platform

A cutting-edge, dark-mode AI tools platform built with React and Vanta.js, featuring stunning 3D animated backgrounds and a sleek glassmorphism design.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00ff88?style=for-the-badge&logo=vercel)](https://your-deployment-link.vercel.app)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vanta.js](https://img.shields.io/badge/Vanta.js-0.5.24-ff6b6b?style=for-the-badge)](https://www.vantajs.com/)

## ✨ Features

- 🌟 **Futuristic Design**: Modern glassmorphism UI with Web3-inspired aesthetics
- 🌙 **Full Dark Mode**: Carefully crafted dark theme with cyan and purple accents
- 🎮 **3D Animated Background**: Stable Vanta.js TRUNK effect with fallback handling
- 📱 **Fully Responsive**: Optimized for all device sizes and screen resolutions
- ⚡ **Lightning Fast**: Built with Vite for optimal performance and hot reloading
- 🎨 **Custom Animations**: Smooth transitions, hover effects, and micro-interactions
- 🔧 **Modular Architecture**: Clean, reusable React components

## 🚀 Live Demo

Experience the live application: **[AI Nexus Platform](https://ai-nexus-dusky.vercel.app/)**

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **3D Graphics**: Three.js + Vanta.js
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.6.3
- **Font**: Poppins (Google Fonts)
- **Deployment**: Vercel

## 🎨 Design Highlights

### Visual Features

- **Glassmorphism Elements**: Translucent cards with backdrop blur effects
- **Gradient Accents**: Custom cyan-to-purple gradients throughout the interface
- **Interactive Buttons**: Sophisticated hover animations with shine effects
- **Professional Typography**: Poppins font with carefully crafted text hierarchy
- **Custom Scrollbar**: Styled scrollbars matching the dark theme

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourusername/my-ai-tools.git

# Navigate to project directory
cd my-ai-tools

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── Home.jsx           # Main routing and page logic
│   ├── Header.jsx         # Navigation component
│   ├── MainPage.jsx       # Content wrapper component
│   └── VantaBackground.jsx # 3D background effect
├── assets/
│   └── react.svg          # Static assets
├── index.css              # Global styles and utilities
└── main.jsx              # Application entry point
```

### MainPage.jsx

- Central content wrapper with grid layout
- Glassmorphism cards with hover animations
- Responsive design for all screen sizes

## 🚀 Deployment

The project is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own

1. **Fork this repository**
2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Import your forked repository
   - Deploy with default settings

3. **Alternative: Vercel CLI**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Cyan variations (#00ffff, #00cccc)
- **Secondary**: Purple variations (#8b5cf6, #a855f7)
- **Background**: Dark grays (#0a0a0a, #1a1a1a)

### Fonts

- **Primary Font**: Poppins (imported from Google Fonts)
- **Fallback**: System fonts (ui-sans-serif, system-ui)

### Animations

Custom animations are defined in `index.css`:

- Gradient animations for backgrounds
- Shine effects for buttons
- Smooth transitions throughout

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by Ridoy

---

<div align="center">
  <p>If you found this project helpful, please consider giving it a ⭐!</p>
  
  [![GitHub Stars](https://img.shields.io/github/stars/yourusername/my-ai-tools?style=social)](https://github.com/yourusername/my-ai-tools)
</div>
