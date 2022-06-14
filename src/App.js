import React from "react";
import './App.css';
import { Container } from '@mui/material';
import ShopPage from './Pages/ShopPage';



const App = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <ShopPage />
      </Container>
    </div>
  );
}

export default App;
