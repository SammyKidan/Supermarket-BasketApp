import { render} from '@testing-library/react';
import App from "./App";
import ShopPage from "./Pages/ShopPage";


test("renders App", () => {
  render(<App />);
});


test("renders ShopPage", () => {
  render(<ShopPage />);
});






