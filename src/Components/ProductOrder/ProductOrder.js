import React from 'react'

const ProductOrder = (props) => {

  const { basketItems, addToBasket, onRemove, productDiscount} = props;

  // Calculates discount per product in basket that has been ordered
  const discount = (id) => {
    let discountValue;

    if (productDiscount.length > 0) {
      const exist = productDiscount.find((x) => x.id === id);
      if (exist) {
        discountValue = exist.discount;
      }
    }
    return discountValue;
  };

  return (
    <>
      {basketItems.map((item) => (
            <tr key={item.id}>
              <td style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "inherit" }}>
                  <button aria-label='add to basket' onClick={() => addToBasket(item)} className="add">
                    +
                  </button>
                  <span></span>
                  <button aria-label='remove from basket' onClick={() => onRemove(item)} className="remove">
                    -
                  </button>
                </div>
                <p aria-label='product name and quantity' style={{ width: "100px" }}>
                  {item.name}: {item.qty}
                </p>
              </td>
              <td aria-label='product unit cost'>£{item.price.toFixed(2)}</td>
              <td aria-label='product price'>£{(item.price * item.qty).toFixed(2)}</td>
              <td aria-label='product discount'data-testid={"item"+item.id+"Discount"}>
                £{productDiscount.length !== 0 ? discount(item.id) : 0 }
                
              </td>
            </tr>
          ))}
    </>
  )
}

export default ProductOrder;
