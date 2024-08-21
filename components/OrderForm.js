const OrderForm = () => {
  return (
    <form>
      <h2>Order Form</h2>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Address" required />
      <input type="tel" placeholder="Phone Number" required />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
