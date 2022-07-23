import {
  FormControlLabel,
  RadioGroup,
  Typography,
  Radio,
  Button,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import { context } from "../../../CartContext";
import { useContext } from "react";
import React, { useState } from "react";

const Payment = ({ cart, updateStep, MakeEmpty }) => {
  const { updateIsclicked, updateChecked } = useContext(context);
  const [clicked, updateclicked] = useState(false);
  const Details = () => {
    return (
      <>
        <Grid container justifyContent="space-around">
          <Grid item xs={12} md={8}>
            <TextField label="CardNumber" fullWidth required />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="CVV" required />
          </Grid>
        </Grid>
        <Button
          variant="outlined"
          onClick={() => updateStep(0)}
          color="primary"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "10px",
          }}
        >
          Edit Address
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (cart.total_items) {
              MakeEmpty();
              alert("Thanks for shopping");
            } else {
              alert("Add some items to your Cart");
            }
          }}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "10px",
          }}
        >
          Proceed
        </Button>
      </>
    );
  };
  return (
    <>
      <Typography variant="h4" align="center" style={{ marginBottom: "40px" }}>
        Order Summary
      </Typography>
      <Grid container justifyContent="space-around">
        {cart.line_items.map((item) => {
          return (
            <>
              <Grid item xs={8} style={{ margin: "10px" }}>
                <Typography vairant="h4" component="h4">
                  {item.name}
                </Typography>
                <Typography vairant="h6" color="secondary">
                  Quantity:{item.quantity}
                </Typography>
              </Grid>
              <Grid item xs={2} style={{ margin: "10px" }}>
                <Typography vairant="h6">
                  {item.line_total.formatted_with_symbol}
                </Typography>
              </Grid>
            </>
          );
        })}
        <Grid item xs={8} style={{ margin: "10px" }}>
          <Typography style={{ fontWeight: "bold" }}>Total</Typography>
        </Grid>
        <Grid item xs={2} style={{ margin: "10px" }}>
          <Typography style={{ fontWeight: "bold" }}>
            {cart.subtotal.formatted_with_symbol}
          </Typography>
        </Grid>
      </Grid>
      <Grid alignItems="center" style={{ margin: "30px" }}>
        <Typography
          variant="h5"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          Payment details
        </Typography>
        <RadioGroup defaultValue="Cash">
          <FormControlLabel
            value="Cash"
            control={
              <Radio
                onClick={() => {
                  updateclicked(false);
                }}
              />
            }
            label="Cash On Delivery"
          />
          <FormControlLabel
            value="Card"
            control={
              <Radio
                onClick={() => {
                  updateclicked(true);
                }}
              />
            }
            label="Card"
          />
        </RadioGroup>
        {clicked ? (
          <Details />
        ) : (
          <>
            <Button
              variant="outlined"
              onClick={() => updateStep(0)}
              color="primary"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "10px",
              }}
            >
              Edit Address
            </Button>
            <Button
              style={{ margin: "10px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                if (cart.total_items) {
                  MakeEmpty();
                  alert("Thanks for shopping");
                } else {
                  alert("Add some items to your Cart");
                }
              }}
            >
              Proceed
            </Button>
          </>
        )}
      </Grid>
    </>
  );
};

export default Payment;
