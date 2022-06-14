import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import ProductOrder from '../ProductOrder/ProductOrder'

const Basket = (props) => {
  const { basketItems, addToBasket, onRemove, productDiscount } = props;

  const [totalCost, setTotalCost] = useState(0);

  // Calculates Total of all Item orders minus the total discount value
  const calculateTotal = () => {
    let total = 0;
    let totalDiscount = 0;
    let totalToPay = 0;

    basketItems.forEach((item) => {
      total += item.qty * item.price;
    });

    if (basketItems.length > 0) {
      productDiscount.forEach((product) => {
        let discount = product.discount;
        totalDiscount += discount;
      });
    }

    totalToPay = total - totalDiscount;
    setTotalCost(totalToPay.toFixed(2));
  };

  useEffect(() => {
    calculateTotal();
  }, [productDiscount, basketItems]);

  return (
    <>
      <h3 style={{border: "1px solid black", padding: "0.5em"}}>Basket</h3>

      {basketItems.length === 0 && <div>Cart is Empty</div>}

      <Table
        style={{ width: "80%", margin: "0 auto" }}
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>Item</th>
            <th>Unit Cost</th>
            <th>Total Cost</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          <ProductOrder
            basketItems={basketItems}
            addToBasket={addToBasket}
            onRemove={onRemove}
            productDiscount={productDiscount}
          />
        </tbody>
      </Table>
      <p aria-label="total cost of basket">
        <b>Total Pay:</b> £{totalCost}
      </p>
    </>
  );
};

export default Basket;
