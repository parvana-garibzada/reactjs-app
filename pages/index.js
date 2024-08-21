import Header from '../components/Header';
import Footer from '../components/Footer';
import PizzaList from '../components/PizzaList';

const pizzas = [
  { id: 1, name: 'Pepperoni', description: 'Classic Pepperoni', price: 9.99, image: '/images/pizza.jpg' },
  { id: 2, name: 'Margherita', description: 'Fresh Basil and Tomatoes', price: 8.99, image: '/images/pizza.jpg' },
];

export const  Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to the Pizza Order Website</h1>
        <PizzaList pizzas={pizzas} />
      </main>
      <Footer />
    </div>
  );
}
