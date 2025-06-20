# 🌐 Google Home Page Clone

A polished and responsive Google homepage clone that brings together a clean UI, powerful modern features, and intuitive interactions — all built using **React.js** and **Tailwind CSS**.

---

## 🚀 Live Demo

🔗 [Visit RMgX on Vercel](https://r-mg-x.vercel.app/)

---

## ✨ Features

### 🔍 Smart Search Interface
- Clean, Google-inspired search bar UI
- React `useRef` and `useState` for real-time input control
- Instant focus on search interaction

### 🎙️ Voice Recognition Integration
- Integrated with [`react-speech-recognition`](https://www.npmjs.com/package/react-speech-recognition)
- Click the mic to **speak your query**
- Automatically fills input with recognized text
- Gracefully handles start/stop mic states

> ⚠️ **Note:** Voice recognition works flawlessly in **local development** but may not function on hosted versions due to:
> - System mic permission conflicts
> - Chrome-only support (desktop)
> - HTTPS restrictions or user privacy settings

### 📱 Responsive Design
- Fully mobile-friendly layout
- Automatically switches to a custom **mobile view** with a back button and trending searches
- `isMobile` and `isFocused` driven logic for seamless transitions

### 🌗 Light & Dark Mode Support
- Beautiful theming with **Tailwind dark mode**
- Smooth UI consistency across both themes

### 📈 Trending Searches Component
- Mocked trending searches (placeholder for real data integration)
- Clean, scrollable UI

### 🎨 Pixel-Perfect Styling
- Google Fonts and consistent iconography
- Hover shadows, transitions, and depth
- Uses **React Icons** for all icons

### 🧠 State-Smart Architecture
- Controlled component structure
- Parent-child state syncing between `SearchBar` and `MobileFocused`
- Modular components for better maintainability

### 🧹 Clean Code Structure
- Modular components like SearchBar, MobileFocused, and TrendingSearches for separation of concerns
- Simplified logic flow through isolated UI responsibilities
- Clear naming and inline comments to enhance readability and maintainability

---

## 🛠️ Tech Stack

| Tech | Description |
|------|-------------|
| **React.js** | Component-based architecture |
| **Tailwind CSS** | Utility-first styling, responsive and theme-aware |
| **react-speech-recognition** | Web Speech API wrapper for voice recognition |
| **React Icons** | Icon system with scalable vector icons |
| **Vercel** | Deployed on [Vercel](https://vercel.com/) for blazing-fast static hosting |

---

## 🧪 Optimization Highlights

- ⚡ Fast and lightweight bundle via optimized React build
- 🎯 Input focus management for better UX
- 🧼 Cleanup effects to prevent memory leaks
- 📦 Lazy and modular component architecture
- 🚫 Prevents redundant mic triggers and multiple listening states

---

## ⚠️ Voice Recognition Notes

> Voice recognition using the Web Speech API is supported **only** on:
> - ✅ Desktop Chrome over HTTPS or `localhost`
> - ❌ Not supported on Firefox, Safari, or most mobile browsers

Despite best efforts, on **deployed environments** (Vercel/Render), the microphone may not activate due to:
- User-denied mic permissions
- System restrictions (Windows/macOS privacy)
- Browser limitations
