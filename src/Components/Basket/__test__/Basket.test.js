import { render} from "@testing-library/react";

import Basket from "../Basket";
const basketItems = [
  {
    id: 1,
    name: "Face Mask",
    price: 2.5,
    qty: 11,
  },
  {
    id: 2,
    name: "Toiler Paper",
    price: 0.65,
    discountID: 2233,
    qty: 16,
  },
  {
    id: 3,
    name: "Plant",
    price: 5.0,
    discountID: 4253,
    qty: 5,
  },
];

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

  return totalToPay.toFixed(2);
};

const productDiscount = [
  { discount: 5, id: 1 },
  { discount: 1.3, id: 2 },
  { discount: 10, id: 3 },
];

test("Should render Basket component", () => {
  render(
    <Basket basketItems={basketItems} productDiscount={productDiscount} />
  );
});

test("Check that the calculateTotal function takes correctly calculates the total of inclusive of discount", () => {
  // Total should equal £46.60

  expect(calculateTotal()).toBe("46.60");
});
