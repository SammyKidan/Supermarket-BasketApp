import React from 'react'

 const Discounts = () => {
  return (
    <>
    <div style={{ marginTop: "2em" }}>
        <h4> Discounts </h4>
        <ul style={{ listStyle: "none", textAlign: "left"}}>
          <li aria-label="Face Mask discount">
            <b> 1 - Face Masks :</b> Two Face Masks for £4.
          </li>
          <li aria-label="Toilet Paper discount">
            <b> 2 - Toilet Paper :</b> Six rolls of toilet paper for the price
            of five.
          </li>
          <li aria-label="Plants Discount">
            <b>3 - Plants :</b> Buy two get one free
          </li>
        </ul>
      </div>
    </>
  )
}

export default Discounts
