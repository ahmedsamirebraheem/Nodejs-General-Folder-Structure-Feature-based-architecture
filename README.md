# Node.js Feature-Based Boilerplate

A production-ready Node.js API template using **Feature-Based Architecture (Vertical Slices)**. This structure ensures high scalability, maintainability, and clear separation of concerns by encapsulating logic within specific feature modules.

## 🚀 Getting Started
1. **Install dependencies:** `npm install`
2. **Environment Configuration:** Create a `.env` file based on `.env.example`.
3. **Start the server:** `npm start`

## 🏗️ Architectural Philosophy
Instead of the traditional layer-based organization, this project is organized by "Features." Each `Feature` functions as an independent, encapsulated module.

### Feature Structure (Blueprint):
```text
src/features/<feature-name>/
├── <feature>.controller.js   # Handles requests and returns responses (Presentation)
├── <feature>.routes.js       # Defines API endpoints (Routing)
├── <feature>.service.js      # Business Logic (Application Layer)
├── <feature>.repository.js   # Data persistence and storage logic (Infrastructure)
├── <feature>.model.js        # Domain Entity definition
└── <feature>.dto.js          # Input validation rules (Validation Layer)