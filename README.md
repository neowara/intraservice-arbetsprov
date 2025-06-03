# Intraservice Arbetsprov – Registration Form

Welcome! This project is a work test for Göteborg's city IntraService. It demonstrates my ability to build a modern, maintainable, and user-friendly fullstack web application using React, TypeScript, Vite, and Express.

Repository: [https://github.com/neowara/intraservice-arbetsprov](https://github.com/neowara/intraservice-arbetsprov)

---

## ✨ Project Overview

This application is a registration form for a camp activity event. It features:

- **Modern React (with hooks) and TypeScript** for type safety and maintainability
- **Reusable, generic form components** (Button, InputField, Dropdown, Section, ValidationMessage)
- **Clean separation of concerns**: data fetching and business logic are handled at the page level, while the form component is fully generic and reusable
- **Server-side validation** with clear error and success feedback
- **Accessible and responsive UI** styled with Tailwind CSS
- **Consistent error and success messaging**
- **Dropdown with outside click handling** for a modern UX
- **Form resets after successful submission** for a standard user experience
- **Kebab-case page structure** for clean URLs and maintainability

---

## 🧠 My Process & Reasoning

### 1. **Componentization & Reusability**
- Broke down the UI into small, focused, and typed components (Button, InputField, Dropdown, etc.).
- Refactored the form to be fully generic: it receives options and delegates submit logic to the parent, making it reusable for any similar scenario.
- All business logic (fetching options, handling submit, error/success state) is handled in the page, keeping the form component clean and focused on UI and user input.

### 2. **Type Safety & Clean Code**
- All components and handlers are fully typed with TypeScript.
- Removed all unused code, redundant props, and ensured all interfaces are minimal and clear.
- Added concise comments and file-level documentation for maintainability.

### 3. **User Experience**
- The form resets after a successful submission, which is standard for registration flows.
- The dropdown closes when clicking outside, and the UI is responsive and accessible.
- Success and error messages are visually distinct and use a consistent, accessible component.

### 4. **Server & Validation**
- The Express backend provides activities and handles registration with robust validation and clear error messages.
- All server routes are documented and use proper status codes.

---

## 🚀 How to Run the Project

### 1. **Clone the Repository**
```sh
git clone https://github.com/neowara/intraservice-arbetsprov.git
cd intraservice-arbetsprov
```

### 2. **Install Dependencies**
```sh
npm install
```

### 3. **Start the Server**
```sh
npm run start:server
```
The server will run on [http://localhost:3001](http://localhost:3001)

### 4. **Start the Client**
```sh
npm run start:client
```
The client will run on [http://localhost:3000](http://localhost:3000)

### 5. **Open in Browser**
Go to [http://localhost:3000](http://localhost:3000) and try the registration form!

---

## 🗂️ Project Structure

```
src/
  client/
    index.html
    components/      # Reusable UI components
    pages/
      lagerverksamhet-form/
        index.tsx    # Main entry point for the registration form
    styles/          # Tailwind and global styles
  server/
    data/            # Static data (activities.json)
    routes/          # API endpoints
    index.ts         # Express server entry
```

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript

---

## 📋 Notes for Reviewers
- The codebase is clean, modular, and ready for production or further extension.
- All logic is separated for maximum reusability and testability.
- The UI is accessible, responsive, and visually appealing.

---
