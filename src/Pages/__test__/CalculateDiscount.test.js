import listOfDiscounts from '../../MockData/ListOfDiscounts.json';

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
    
 return itemDiscountTotal

  };

 // Function to calculate the discount value for each product in the basket

test("If 5 plants added to the basket the expected discount value is (£)10", () => {
   const plantOrder= {
        id: 3,
        name: "Plant",
        price: 5.0,
        discountID: 4253,
        qty: 5,
      };
    
  expect(calculateDiscount(plantOrder)).toBe(10);
  });

  test("If 15 toiletPapers are added to the basket the expected discount value is (£)1.30", () => {
    const toiletPaperOrder = {
        id: 2,
        name: "Toiler Paper",
        price: 0.65,
        discountID: 2233,
        qty: 15,
      };
     
   expect(calculateDiscount(toiletPaperOrder)).toBe(1.30);
   });


   test("If 2 face masks are added to the basket the expected discount value is (£)1.30", () => {
    const faceMasksOrder = {
        id: 1,
        name: "Face Mask",
        price: 2.5,
        qty: 9,
        discountID: 1321,
      };
     
   expect(calculateDiscount(faceMasksOrder)).toBe(4);
   });


  



