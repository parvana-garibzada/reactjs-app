import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderForm from '../components/OrderForm';

export default function Order() {
  return (
    <div>
      <Header />
      <main>
        <h1>Order Your Pizza</h1>
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
