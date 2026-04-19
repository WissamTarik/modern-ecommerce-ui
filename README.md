# 🛒 Fresh Cart Storefront

Fresh Cart is a professional-grade, high-performance E-commerce storefront built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project demonstrates a scalable Frontend architecture, focusing on optimized data fetching, robust state management, and a seamless user experience.

## 🚀 Live Demo
**[Insert Your Vercel Deployment Link Here]**

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS + Shadcn/UI
* **Authentication:** Next-Auth (Auth.js)
* **Forms & Validation:** React Hook Form + Zod
* **Icons:** Lucide-React & React Icons
* **State Management:** React Context API

---

## ✨ Key Technical Features

### 🔍 Dynamic URL-Based Filtering
Implemented a sophisticated filtering system using a custom `useFilter` hook. It synchronizes the UI state (Categories, Brands, Search) directly with URL search parameters, making the user's view fully shareable and bookmarkable without unnecessary page reloads.

### ⚡ Parallel Data Fetching
Optimized server-side performance by implementing `Promise.all` in Server Components. This allows categories, brands, products, and user-specific data (like wishlists) to be fetched simultaneously, drastically reducing the total Time to First Byte (TTFB).

### 🛡️ Secure Route Middleware
A custom middleware layer manages authentication flows:
* Redirects authenticated users away from login/register pages.
* Protects private routes (Wishlist, Cart) by redirecting unauthenticated users to the login page.
* Exempts static assets and API routes to ensure zero performance overhead on internal Next.js requests.

### 🔌 Standardized API Client
Built a unified `apiClient` using the Fetch API that handles:
* Automatic injection of Bearer tokens for authorized requests.
* Standardized error handling and JSON parsing.
* Protection against non-JSON responses (HTML error pages) from the backend.

### 📱 Responsive Design
A mobile-first approach using Tailwind CSS, featuring a responsive sidebar for filters on desktop and a smooth Slide-over Sheet for mobile users.

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/WissamTarik/modern-ecommerce-ui.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    NEXT_PUBLIC_API_BASE_URL=[https://ecommerce.routemisr.com](https://ecommerce.routemisr.com)
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_generated_secret_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 🏗️ Folder Structure Highlights

* `src/app/api/auth/[...nextauth]` - Next-Auth route configuration.
* `src/app/(Home)/_components/FilterSidebar` - Core filtering logic and UI.
* `src/utils/apiClient.ts` - Centralized API logic.
* `src/middleware.ts` - Route protection and redirection logic.

---

## 👨‍💻 Author
**Wissam Tarik**

* **GitHub:https://github.com/WissamTarik

---

## 📄 License
This project is licensed under the MIT License.
