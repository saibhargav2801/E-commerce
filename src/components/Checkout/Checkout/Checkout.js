import React, { useState } from "react";
import { Paper, Stepper, Typography, Step, StepLabel } from "@material-ui/core";
import Address from "./Address/Address";
import Payment from "./Payment";
import useStyles from "./styles";
const Checkout = ({ cart, handleEmptyCart }) => {
  const classes = useStyles();
  const steps = ["Address details", "Payment details"];
  const [activestep, updateStep] = useState(0);

  console.log(activestep);
  return (
    <>
      <div style={{ padding: "25px 0px" }} />
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center" style={{ marginTop: "15px" }}>
          Checkout
        </Typography>
        <Stepper activeStep={activestep}>
          {steps.map((step) => {
            return (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activestep === 0 ? (
          <Address updateStep={updateStep} />
        ) : (
          <Payment
            cart={cart}
            updateStep={updateStep}
            MakeEmpty={handleEmptyCart}
          />
        )}
      </Paper>
    </>
  );
};
export default Checkout;
