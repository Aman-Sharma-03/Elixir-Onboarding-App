# Elixir Club - SWE Intern Mobile Assignment

Welcome! This project is a mobile application developed for the **Elixir SWE Intern** assignment. The focus is on building a well-structured modular, scalable and maintainable React Native app using modern best practices including TypeScript, TailwindCSS, Redux Toolkit, and Expo.

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

   ```bash
   git clone https://github.com/Aman-Sharma-03/Elixir-Onboarding-App.git
   cd Elixir-Onboarding-App
   ```

### 2. Install dependencies
   ```bash
   npm install
   ```

### 3. Start the app

   ```bash
   npx expo start --tunnel
   ```

- Used the --tunnel flag to avoid local firewall issues.
- Open Expo Go and scan the QR code in your terminal.


Alternative Options: 
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)


## 🧠 Design Principles
- Modular Architecture: Each screen, component, and slice is isolated for scalability and reusability.
- Separation of Concerns: UI, logic, and state management are kept in separate layers for clarity and maintainability.
- Type Safety: TypeScript is used throughout the app to catch bugs early and ensure robust typings.
- DRY (Don’t Repeat Yourself): Shared UI elements and utilities prevent redundancy.
- Mobile-First Design: Built with Tailwind CSS using responsive, touch-friendly components.


## Navigation Strategy
- expo-router is used for file-based routing.
- Nested layouts and dynamic routing allow scalable page management.

   Example:
      app/
      ├── _layout.tsx         # App-wide layout
      ├── index.tsx           # Landing page (permissions)
      (onboarding)/        # grouping the screens
         ├── layout.tsx          # Layout for onboarding screens
         ├── login.tsx           # Login screen
         ├── otp.tsx             # OTP screen
         ├── user-details.tsx    # User details input
         ├── dashboard.tsx       # Main authenticated screen

## Reusable Components
Built with reusability and consistency in mind:
- Validator: Common validator function which accepts schema, objectToBeValidated and error state setter function
- Permission Function: These are separated out for reusablitity
- Services: All the API calls (mocked for now) are separated in the separate function, so that if required they can be used just by exporting
- ErrorMessage: Common Error Message component which takes the Error State and id to identify the field to check
- Input Component: Reusable text input with dynamic props, helps in identify the input box and updating the data to the parent element
- Button Component: Customizable button with action as a props

## Validation with Yup
- Schema-based declarative validation
- Instant field-level error feedback before submitting the form
- Consistent UX for forms

## State Management
Used Redux Toolkit to manage app-wide state.
- userSlice: Stores user information and details
- locationSlice: Stores user's current location longitude and latitude

## Service Mocks
- Location Services: If location access fails or is unavailable, fallbacks alerts are triggered.
- ATT on Android: Since App Tracking Transparency is iOS-specific, mock it on Android platforms.
