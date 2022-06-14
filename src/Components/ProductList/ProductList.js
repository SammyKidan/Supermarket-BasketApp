import React from "react";
import {Button} from '@mui/material/';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


const ProductList = (props) => {

  const {products, addToBasket, onRemove, basketItems} = props

  
  
  return (
    <>
      
      <h4 aria-label="Listed Products" style={{ marginTop: "3em", border: "1px solid black", padding: "0.5em"}}>
        Product listings
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products.productOrders?.map((item) => (
          <Card
            key={item.id}
            sx={{ width: 255, height: "350px", margin: "15px 0" }}
          >
            <CardMedia
              component="img"
              height="50%"
              alt={item.alt}
              image={item.img}
            />

            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                <p>{item.name}</p>
                <p>£{item.price.toFixed(2)}</p>
              </Typography>
            </CardContent>

            
            <CardActions style={{ float: "right" }}>
              {basketItems.find((basketItem) => basketItem.id === item.id) ? (
                <Button
                  style={{ backgroundColor: "#F56C67", color: "white" }}
                  aria-label="Remove from basket"
                  role="button"
                  size="small"
                  onClick={() => onRemove(item)}
                >
                  Remove
                </Button>
              ) : null}

              <Button
                style={{ backgroundColor: "#64C471", color: "white" }}
                aria-label="Add to basket"
                data-testid={item.id}
                onClick={() => addToBasket(item)}
                size="small"
              >
                Add To Basket
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductList;
