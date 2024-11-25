
# React User Profile Layout

This project is a user profile layout built with **React**, initialized using **Vite**. It features **Phosphor Icons** for elegant iconography and uses **CSS Modules** for styling.

## 🛠️ Technologies Used To Date

- **Vite**: Modern front-end tooling for fast development and build times.
- **React**: JavaScript library for building user interfaces.
- **Phosphor Icons**: Flexible, customizable icons for React.
- **CSS Modules**: Scoped and modular CSS for better maintainability.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kiqreis/layout-with-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd layout-with-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

The project will be available at [http://localhost:5173](http://localhost:5173).

## 📂 Project Structure

```
src/
  ├── assets/            # Images and static files
  ├── components/        # Reusable React components
  ├── styles/            # CSS Modules
  └── App.jsx            # Main application file
```

## 🖌️ Styling

This project uses **CSS Modules** to encapsulate styles within each component. This ensures that styles do not conflict across components.

## 🧩 Icons

Icons are provided by **Phosphor Icons**. You can easily import and customize icons as needed:

```jsx
import { PencilSimpleLine } from '@phosphor-icons/react';

function Example() {
  return <PencilSimpleLine size={32} />;
}
```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
