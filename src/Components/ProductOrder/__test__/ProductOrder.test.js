import { render, screen} from '@testing-library/react';
import ProductOrder from "../ProductOrder";



let  productDiscount = [{discount:0, id:0}];

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


describe("tests for the ProductOrder Component", () => {
    const basketItems = [{
        id: 1,
        img: "https://images.unsplash.com/photo-1598207951491-255eaf139751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        name: "Face Mask",
        price: 2.5,
        qty: 2,
        discountID: 1321,
    }];


    test('renders ProductOrder component correctly', () => {
       
        render(<ProductOrder basketItems={basketItems} productDiscount={productDiscount} />);
    });


    test('Two face masks in the basket should sum up to a discount of £1', () => {

     productDiscount = [{discount:1, id:1}];
        
        render(<ProductOrder basketItems={basketItems} productDiscount={productDiscount} />);
        const faceMaskDiscountValue = screen.getByTestId('item1Discount');
        expect(discount(1)).toEqual(1);
        expect(faceMaskDiscountValue).toContainHTML('£1');
    });


    test('6 toilet paper rolls in the basket should sum up to discount value of 0.65', () => {
        const basketItems = [
        {
            id: 2,
            name: "Toiler Paper",
            price: 0.65,
            discountID: 2233,
            qty: 6
          }
        
        ];
       
        productDiscount = [{discount:0.65, id:2}];

        render(<ProductOrder basketItems={basketItems} productDiscount={productDiscount} />);
        
        const toiletPaperDiscountValue = screen.getByTestId('item2Discount');
        expect(toiletPaperDiscountValue).toContainHTML('£0.65');
    });
    
});



