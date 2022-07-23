import React from "react";
import Cartitem from "./CartItem/Cartitem";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useContext } from "react";
import { context } from "../../CartContext";
const Cart = ({
  cart,
  handleUpdateCartQty,
  handleEmptyCart,
  handleRemoveFromCart,
}) => {
  const { updateIsclicked, updateChecked } = useContext(context);
  const classes = useStyles();
  const isEmpty = !cart.total_items;
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your cart,
      <Typography
        style={{ cursor: "pointer", display: "inline-block" }}
        variant="subtitle1"
        color="primary"
        onClick={() => {
          updateIsclicked(false);
        }}
      >
        Add some
      </Typography>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <Cartitem
              item={item}
              onUpdateCart={handleUpdateCartQty}
              onRemoveCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.cardDetails}>
        <Grid item>
          <Typography variant="h5" style={{ marginBottom: "20px" }}>
            Subtotal:{cart.subtotal.formatted_with_symbol}
          </Typography>{" "}
        </Grid>
        <Grid item>
          <div>
            <Button
              className={classes.emptyButton}
              variant="contained"
              color="secondary"
              type="button"
              size="large"
              onClick={handleEmptyCart}
            >
              EmptyCart
            </Button>
            <Button
              onClick={() => {
                updateChecked(true);
                updateIsclicked(true);
              }}
              className={classes.checkoutButton}
              variant="contained"
              color="primary"
              type="button"
              size="large"
            >
              Checkout
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
