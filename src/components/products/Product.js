import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import { AddShoppingCart } from "@material-ui/icons";
function Product({ product, onAddtoCart }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="h6"
          color="textSecondary"
        />
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => {
            onAddtoCart(product.id, 1);
          }}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
