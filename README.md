# Intraservice Arbetsprov – Registration Form

Welcome! This project is a work test for Göteborgs Stad IntraService. It demonstrates a modern, maintainable, and user-friendly fullstack web application using React, TypeScript, Vite, Express, and Cypress.

Repository: [https://github.com/neowara/intraservice-arbetsprov](https://github.com/neowara/intraservice-arbetsprov)

---

## ✨ Project Overview

A registration form for a camp activity event, featuring:
- **Modern React (hooks) + TypeScript** for type safety and maintainability
- **Reusable, generic form components** (Button, InputField, Dropdown, Section, Select, ValidationMessage)
- **Separation of concerns**: data fetching and business logic at the page level, generic stateless form
- **Server-side validation** with clear error and success feedback
- **Accessible, responsive UI** styled with Tailwind CSS
- **Dropdown with outside click handling** for a modern UX
- **Form resets after successful submission**
- **Kebab-case page structure** for clean URLs and maintainability
- **Comprehensive unit and E2E tests**

---

## 🧠 My Process & Reasoning

### Componentization & Reusability
- UI is broken into small, focused, and typed components.
- The form is fully generic: receives options and delegates submit logic to the parent, making it reusable for any similar scenario.
- All business logic (fetching options, handling submit, error/success state) is handled in the page, keeping the form component clean and focused on UI and user input.

### Type Safety & Clean Code
- All components and handlers are fully typed with TypeScript.
- Removed all unused code, redundant props, and ensured all interfaces are minimal and clear.
- Added concise comments and file-level documentation for maintainability.

### User Experience
- The form resets after a successful submission, which is standard for registration flows.
- The dropdown closes when clicking outside, and the UI is responsive and accessible.
- Success and error messages are visually distinct and use a consistent, accessible component.

### Server & Validation
- The Express backend provides activities and handles registration with robust validation and clear error messages.
- All server routes are documented and use proper status codes.

### Testing & Quality
- All core UI components are covered by unit tests (Jest + React Testing Library).
- The full registration flow is covered by a Cypress E2E test, including dropdown interaction, validation, and form reset.
- The codebase is clean, modular, and ready for production or further extension.

---

## 🚀 How to Run the Project

### 1. Clone the Repository
```sh
 git clone https://github.com/neowara/intraservice-arbetsprov.git
 cd intraservice-arbetsprov
```

### 2. Install Dependencies
```sh
 npm install
```

### 3. Start the Server (API)
```sh
 npm run start:server
```
The server will run on [http://localhost:3001](http://localhost:3001)

### 4. Start the Client (Vite)
```sh
 npm run start:client
```
The client will run on [http://localhost:3000](http://localhost:3000)

### 5. Open in Browser
Go to [http://localhost:3000](http://localhost:3000) and try the registration form!

---

## 🗂️ Project Structure

```
├── cypress/
│   ├── e2e/
│   │   └── registration.cy.ts      # Cypress E2E test for registration flow
│   └── screenshots/                # Cypress screenshots (auto-generated)
├── src/
│   ├── client/
│   │   ├── index.html
│   │   ├── assets/
│   │   │   └── favicon.ico
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   ├── Dropdown/
│   │   │   ├── Form/
│   │   │   ├── InputField/
│   │   │   ├── Section/
│   │   │   ├── Select/
│   │   │   └── ValidationMessage/
│   │   ├── pages/
│   │   │   └── lagerverksamhet-form/
│   │   │       └── index.tsx       # Main entry point for the registration form
│   │   └── styles/
│   │       └── index.css           # Tailwind and global styles
│   └── server/
│       ├── data/
│       │   └── activities.json     # Static data for activities
│       ├── routes/
│       │   ├── activities.ts       # API endpoint for activities
│       │   └── register.ts         # API endpoint for registration
│       └── index.ts                # Express server entry
├── babel.config.js
├── cypress.config.ts
├── jest.config.cjs
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Testing:** Jest, React Testing Library, Cypress

---

## 🧪 Testing Strategy & Rationale

### Unit Tests (Jest + React Testing Library)
- All core UI components (Button, InputField, Dropdown, Section, Select, ValidationMessage, Form) are covered by unit tests.
- Tests ensure each component renders correctly, handles user input, and responds to props and events as expected.
- Logic is tested in isolation for reliability and to catch regressions early.
- **How to run:**
  ```sh
  npm test           # Run all unit tests once
  npm run test:watch # Run unit tests in watch mode
  ```

### End-to-End (E2E) Tests (Cypress)
- The full registration flow is tested in a real browser environment.
- The E2E test fills out the form, selects activities, closes the dropdown, submits, and checks for the correct success message and that the form and selected activities are reset.
- The test mimics real user behavior, including opening/closing dropdowns and validating both UI and backend integration.
- **How to run:**
  1. Start the backend and frontend:
     ```sh
     npm run start:server
     npm run start:client
     ```
  2. In a separate terminal, run:
     ```sh
     npm run test:e2e      # Headless mode
     npm run test:e2e:open # Interactive mode
     ```

### Why Both?
- **Unit tests** catch issues in isolated logic and UI, making refactoring safe and fast.
- **E2E tests** ensure the entire stack (frontend, backend, validation, UX) works as a real user expects.

---

## 📋 Notes for Reviewers
- The codebase is clean, modular, and ready for production or further extension.
- All logic is separated for maximum reusability and testability.
- The UI is accessible, responsive, and visually appealing.