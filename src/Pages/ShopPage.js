import React, { useState, useEffect } from "react";
import Basket from "../Components/Basket/Basket";
import ProductList from "../Components/ProductList/ProductList";
import ProductsData from "../MockData/MockData.json";
import ListOfDiscounts from "../MockData/ListOfDiscounts.json"
import Discounts from "../Components/Discounts/Discounts"

const ShopPage = () => {

  const [products, setProducts] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [productDiscount, setProductDiscount] = useState([]);
  const [listOfDiscounts, setListOfDiscounts] = useState([]);

  
  

  // Functions to Add to Basket
   const addToBasket = (product) => {
    const exist = basketItems.find((x) => x.id === product.id);

    if (exist) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === product.id ? { ...exist, qty: (exist.qty += 1) } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, qty: 1 }]);
    }
  };



  // Functions to Remove from basket
  const onRemove = (product) => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (basketItems.length > 0 && exist) {
      if (exist.qty === 1) {
        setBasketItems(basketItems.filter((x) => x.id !== product.id));
      } else {
        setBasketItems(
          basketItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    } else {
      return;
    }
  };
  

  // Function to calculate the discount value for each product in the basket
const calculateDiscount = (order) => {

    let itemDiscountTotal = 0;
    let amountToDiscount = [];

    const applyDiscount = (discountToApply) => {
      amountToDiscount.forEach(() => {
        itemDiscountTotal = discountToApply;
      });

    }

    for (let i = 1; i <= order.qty; i++) {
      // This loops the length amount of the quantity value of each basketItem

      listOfDiscounts.forEach((promo) => {
        
        const productHasDiscount = order.discountID === promo.discountID;
        const qtyDiscountRequirement = i % promo.discountForEvery === 0;

        if (productHasDiscount && qtyDiscountRequirement) {
          amountToDiscount.push(i);
         
          let discountToApply = amountToDiscount.length * (promo.discountNumber * order.price);
          applyDiscount(discountToApply);
        }

      });
    }
    

   

    const exist = productDiscount.find((x) => x.id === order.id);

    if (exist) {
      setProductDiscount(
        productDiscount.map((x) =>
          x.id === order.id
            ? { ...exist, discount: (exist.discount = itemDiscountTotal) }
            : x
        )
      );
    } else {
      setProductDiscount([
        ...productDiscount,
        { id: order.id, discount: itemDiscountTotal },
      ]);
    }

  };

  // This useEffect is used to populate the state of the array of products with the product data from the MockData.json file
  useEffect(() => {
    setProducts(ProductsData);
    setListOfDiscounts(ListOfDiscounts);
  }, []);

  // This useEffect hook is here to trigger the calculateDiscount function everytime the state of the basket is updated
  useEffect(() => {
    basketItems.forEach((basketItem) => {
      calculateDiscount(basketItem);
    });
  }, [basketItems]);

  return (
    <div>
      <h1 aria-label='E-commerce Store' style={{border: "1px solid black", padding: "0.5em"}}>Supermarket Basket</h1>
      <Discounts />

      {basketItems.length !== 0 && (
        <Basket
          addToBasket={addToBasket}
          onRemove={onRemove}
          basketItems={basketItems}
          productDiscount={productDiscount}
        />
      )}
      
      <ProductList
        addToBasket={addToBasket}
        onRemove={onRemove}
        products={products}
        basketItems={basketItems}
      />
      
    </div>
  );
};

export default ShopPage;
 
