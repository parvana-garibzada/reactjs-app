import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function CartPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>Your Cart</h1>
        <Cart />
      </main>
      <Footer />
    </div>
  );
}
