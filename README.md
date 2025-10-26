# SwiftTix - Ticket Management System

A robust ticket management web application built with Vue.js, providing seamless user experience for ticket creation, tracking, and management.

## 🚀 Frameworks and Libraries Used

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vuex** - State management pattern + library
- **CSS3** - Custom styling with CSS variables
- **LocalStorage API** - Client-side data persistence

## 📋 Setup and Execution

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd ticket-app-vue
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run serve
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8080`
   - The application will automatically reload when you make changes

### Building for Production

```bash
# Build for production
npm run build

# The built files will be in the 'dist' folder
```

## 🔄 Switching Between Framework Versions

This is the **Vue.js** version of the SwiftTix application. Other available versions:

- **React Version** - [Link to React version if available]
- **Twig Version** - [Link to Twig version if available]

To switch between versions:
1. Navigate to the respective framework's project directory
2. Run `npm install` to install dependencies
3. Run the development server using the appropriate command
4. Access via the specified port (typically 3000 for React, 8080 for Vue)

## 🏗️ UI Components and State Structure

### Component Architecture
- **Views**: Landing, Auth, Dashboard, Ticket
- **Common Components**: NavBar, Footer
- **Auth Components**: LoginForm, SignupForm
- **Ticket Components**: TicketForm, TicketList

### State Management
- **Authentication State**: Managed via localStorage with session tokens
- **Ticket Data**: Stored in localStorage with CRUD operations
- **Form State**: Local component state with real-time validation

### Key Features
- **Protected Routes**: Authentication-required pages redirect to login
- **Form Validation**: Real-time validation with error messages
- **Responsive Design**: Mobile-first approach with tablet/desktop adaptations
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation

## ♿ Accessibility Features

- Semantic HTML structure throughout
- ARIA labels and roles for screen readers
- Keyboard navigation support
- Focus indicators for interactive elements
- Color contrast compliance
- Responsive design for various devices

## 🐛 Known Issues

- Form validation errors clear on field focus
- Mobile menu doesn't close automatically on navigation
- No persistent toast notification component
- Limited error handling for edge cases

## 🔐 Test User Credentials

### Pre-configured Test Account
- **Email**: `swift@gamil.com`
- **Password**: `swift123`

### Creating New Accounts
- Users can register new accounts via the Signup form
- All user data is stored locally in browser storage

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎨 Design Consistency

- **Max Width**: 1440px centered layout
- **Color Scheme**: Green primary theme with status-based colors
- **Status Colors**: 
  - Open: Green (#41b883)
  - In Progress: Amber (#e0a82d)
  - Closed: Gray (#9ca3af)
- **Responsive Breakpoints**: Mobile (768px), Tablet (900px)

## 🔧 Development

### Project Structure
```
src/
├── components/     # Reusable UI components
├── views/          # Page-level components  
├── store/          # State management
├── router/         # Navigation configuration
└── assets/         # Static files
```

### Key Files
- `main.js` - Application entry point
- `App.vue` - Root component
- `router/index.js` - Route configuration
- `store/storage.js` - Data persistence utilities

---

**Built for Stage 2 Assessment** - A demonstration of consistent UI/UX across multiple frontend frameworks with identical functionality and design language.