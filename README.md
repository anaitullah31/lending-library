# 📚 Lending Library – Online Book Borrowing Platform

🔗 **Live Site:** https://lending-library-eight.vercel.app/  
🔗 **GitHub Repo:** https://github.com/anaitullah31/lending-library  

---

## 🚀 Project Overview

**Lending Library** is a modern online book borrowing platform designed to digitize the traditional library experience. Users can explore books, filter by categories, and borrow them digitally with a secure and seamless interface.

The application is built with performance, responsiveness, and user experience in mind using **Next.js, Tailwind CSS, BetterAuth, and MongoDB (or local data)**.

---

## 🎯 Key Features

### 🏠 Home Page
- Hero banner: *"Find Your Next Read"*
- Marquee showing new arrivals and offers
- Featured Books section (Top 4 books)
- Additional custom sections for enhanced UI

---

### 🔐 Authentication
- Email & Password Login/Register
- Google Social Login
- Error handling with toast notifications
- Secure authentication using **BetterAuth**

---

### 📚 All Books Page
- Responsive grid layout
- Search books by title
- Filter books by category (Story, Tech, Science)
- Book cards with details button

---

### 📖 Book Details Page (Private Route)
- Accessible only for logged-in users
- Displays:
  - Book cover
  - Title, author, description
  - Available quantity
- Borrow button:
  - Redirects to login if not authenticated
  - Shows confirmation toast

---

### 👤 My Profile (Private Route)
- Displays user information
- Update profile feature:
  - Change name and profile image
  - Uses BetterAuth update user API

---

### 🎨 UI & UX
- Fully responsive (Mobile, Tablet, Desktop)
- Clean and modern UI design
- Custom Navbar & Footer
- Smooth interactions with **Swiper.js**

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router)
- **Styling:** Tailwind CSS + HeroUI
- **Authentication:** BetterAuth
- **UI Components:** HeroUI
- **Carousel:** Swiper.js
- **Icons:** React Icons / Lucide

---

## 📦 NPM Packages Used

- `next`
- `react`
- `tailwindcss`
- `@heroui/react`
- `better-auth`
- `swiper`
- `react-icons`
- `react-toastify`

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/anaitullah31/lending-library

# Navigate into project
cd lending-library

# Install dependencies
npm install

# Run development server
npm run dev
