# 🎧 PodcastApp

PodcastApp is a responsive React-based web application that displays a collection of curated podcasts fetched from a public API. Users can browse podcast cards, view detailed podcast information in a modal, and visually explore genres and seasons.

---

## 🚀 Features

### 🛜 React + Vite Setup

- Uses [Vite](https://vitejs.dev/) for fast dev and build times.
- Structured with reusable components and modular code.

### 🎴 Podcast Cards

- Displays a list of podcasts in a grid layout.
- Each card shows:
  - Cover image
  - Title
  - Number of seasons
  - Associated genres
  - Time since last update

### 🗃️ Modal View

- Clicking a podcast opens a full-screen modal.
- Modal shows:
  - Podcast cover image
  - Description
  - Genre tags
  - Number of seasons with mock episode counts
  - Last updated date

### 🗼 API Integration

- Podcasts are fetched from [https://podcast-api.netlify.app/](https://podcast-api.netlify.app/)
- Full podcast details (like `description`, `genres`, `seasons`) are fetched per podcast by ID.

### ⛔ Error Handling & States

- Loading, empty state, and fetch failure states are displayed cleanly.

---

## 📁 Project Structure

📦 root/
├── 📁 public/
│ └── 📁 assets/
│ ├── 🖼️ logo.png
│ ├── 🔍 search.png
│ ├️── 👤 user.png
│ └── 🌐 favicon.png
├── 📁src/
│ ├── 📁components/
│ │ ├── 🎧PodcastCard.jsx
│ │ └── ✨Modal.jsx
│ ├── 📁data/
│ │ └── 📊genres.js
│ ├── 📁utils/
│ │ ├── ⏱️time.js
│ │ └── 💾genreUtils.js
│ ├── 📚App.jsx
│ ├── 🎨App.css
│ └── 📜main.jsx
└── 📄index.html

---

## 🧪 Tech Stack

- **React**
- **Vite**
- **HTML/CSS**
- **JavaScript**

---

## 🛠️ Installation

> 📦 Requirements:
>
> - Node.js (v14 or later)
> - npm or yarn

1. **Clone the repository**

```
git clone https://github.com/P-ule-P/PUGPUL25129_fto2502_Group-B2_Pugisho-Pule_DJS03.git
cd PUGPUL25129_fto2502_Group-B2_Pugisho-Pule_DJS03
```

2.  **Install dependencies**

```
npm install
```

3. **Run the development server**

```
npm run dev
The app should now be running at http://localhost:5173.
```

---

## 📋 How to Use

1. **Launch the App**
   Open your browser to the local dev server (http://localhost:5173).

2. **Browse Podcasts**
   The homepage displays all available podcasts in a grid layout.

3. **View Details**
   Click on any podcast card to open a modal showing full details:

- Podcast title and image

- Description and genre tags

- List of seasons (with episode counts)

- Last updated date

4. **Close Modal**
   Click the "×" close button or outside the modal to dismiss it.
