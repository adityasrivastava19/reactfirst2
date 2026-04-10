# 📱 React Social Feed App

A beginner-friendly React learning project built with **Vite** that demonstrates core React concepts through a simple social media post feed.

---

## 🚀 Tech Stack

| Technology | Version |
|---|---|
| React | ^19.2.4 |
| Vite | ^8.0.4 |
| ESLint | ^9.39.4 |

---

## ✨ Features

- **Reusable `Post` Component** — Displays user posts with profile image, name, follower count, timestamp, and content.
- **Conditional Rendering** — Timestamps are only shown when provided.
- **Inline & Object Styles** — Demonstrates both React styling approaches.
- **Component Composition** — Multiple `Post` instances built from a single reusable component.

---

## 📁 Project Structure

```
fisrtlearning/
├── public/             # Static assets
├── src/
│   ├── App.jsx         # Main app with Post component
│   ├── App.css         # Component styles
│   ├── index.css       # Global styles
│   └── main.jsx        # React entry point
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Project dependencies & scripts
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have **Node.js** (v18+) and **npm** installed.

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd fisrtlearning

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

```bash
npm run build    # Build for production
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

---

## 🧩 Component Overview

### `Post`

A reusable component that renders a single social media post card.

**Props:**

| Prop | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | ✅ | Display name of the user |
| `folwers` | `string` | ✅ | Follower count (displayed as-is) |
| `time` | `string` | ❌ | Time since post (e.g. `"12 m"`, `"1 h"`) |
| `content` | `string` | ❌ | Post body text |
| `image` | `JSX.Element` | ❌ | Profile image element (`<img />`) |

**Example usage:**

```jsx
<Post
  image={<img src="avatar.jpg" alt="user" />}
  name="John Doe"
  folwers="1,000,000"
  time="12 m"
  content="Hello from React!"
/>
```

---

## 📚 What I Learned

- Creating and exporting functional React components
- Passing and using **props** (including optional ones)
- Conditional rendering with the ternary operator
- Applying **inline styles** and style objects in JSX
- Embedding JSX elements as prop values
- Setting up a React project with **Vite**

---

## 📄 License

This project is for personal learning purposes.
