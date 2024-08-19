
# Pizza Order Website - React App

## Overview

Welcome to the Pizza Website React app! This project is a simple web application that allows users to browse, customize, and order pizzas online. The app is built using React, following best practices for structuring and organizing the project for scalability and maintainability.

## Features

- **Home Page**: Displays featured pizzas and promotions.
- **Menu Page**: Shows the full list of available pizzas with options to customize.
- **Pizza Customization**: Users can select sizes, toppings, and quantities.
- **Cart**: Users can review their selected items and proceed to checkout.
- **Checkout**: Simple form to capture user details and order information.

## Project Structure

The project is organized into the following directories:

```
pizza-website/
│
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── PizzaCard.js
│   │   ├── CartItem.js
│   │   └── CustomizationForm.js
│   │
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── MenuPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   └── NotFoundPage.js
│   │
│   ├── context/
│   │   └── CartContext.js
│   │
│   ├── hooks/
│   │   └── usePizzaCustomization.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.js
│   ├── index.js
│   └── routes.js
│
├── .gitignore
├── README.md
├── package.json
└── yarn.lock
```

### Directory and File Breakdown

- **`public/`**: Contains static assets like the main `index.html` and public images. The assets here are available at the root level when the app is built.

- **`src/`**: Contains the main application code.
  - **`assets/`**: Contains images and other assets specific to the app's UI.
  - **`components/`**: Reusable components such as `Header`, `Footer`, and `PizzaCard`. Each component is kept modular for reusability across the app.
  - **`pages/`**: Each file represents a distinct page in the app like `HomePage`, `MenuPage`, `CartPage`, etc. Pages are typically composed of multiple components.
  - **`context/`**: Holds the context providers such as `CartContext`, which is used to manage global state (e.g., the shopping cart).
  - **`hooks/`**: Custom hooks like `usePizzaCustomization` are defined here for reusable business logic across components.
  - **`styles/`**: Global styles and CSS files are placed here. `global.css` applies universal styles across the app.
  - **`App.js`**: The root component that renders the page layout and includes the routing logic.
  - **`index.js`**: The entry point for the React app, rendering the `App` component into the DOM.
  - **`routes.js`**: Defines the app's routes and connects pages to specific URLs.

### Dependencies

The project uses the following dependencies:

- **React**: For building user interfaces.
- **React Router**: For handling navigation and routing within the app.
- **Context API**: For managing global state (e.g., shopping cart) across the application.

### Getting Started

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/pizza-website.git
   cd pizza-website
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the app**:
   ```
   yarn start
   ```
   This will start the development server and open the app in your default web browser.

### Scripts

- `yarn start`: Runs the app in development mode.
- `yarn build`: Builds the app for production.
- `yarn test`: Runs tests (if any are defined).

### Contributing

Feel free to fork this repository and submit pull requests. Any contributions are greatly appreciated!

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
