This is a Next.js + TypeScript based E-Commerce project with Tailwind CSS, dark mode support, and a responsive navigation bar.

## Getting Started
Clone the Repository
git clone https://github.com/your-username/my-ecommerce.git
cd my-ecommerce
2️⃣ Install Dependencies
npm install
3️⃣ Run the Development Server
npm run dev
Then open http://localhost:3000 in your browser.

## Features Implemented
Next.js  with TypeScript
Tailwind CSS for styling
Dark Mode Toggle with local storage persistence
Navigation Bar with responsive menu
Product Listing Page with filtering
Component-based architecture for scalability

## Features Implemented Step by Step
1️ Set up Next.js + TypeScript

npx create-next-app@latest my-app --typescript
cd my-app
2️ Install Tailwind CSS

npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

3️ Create Dark Mode Toggle Component
Created DarkModeToggle.tsx and added local storage persistence.

4️ Built Header with Navigation Bar
Implemented a responsive navigation bar.
Mobile menu toggle added using useState.
Integrated DarkModeToggle inside Header.tsx.
5️ Integrated Layout Component
Created layout.tsx to wrap the entire app.
Imported Header.tsx and Footer.tsx inside layout.tsx.
6️ Created Product Listing Page
Designed ProductCard.tsx for displaying products.
Implemented SearchBar.tsx to filter products.
Added Filter.tsx to filter products by category.


