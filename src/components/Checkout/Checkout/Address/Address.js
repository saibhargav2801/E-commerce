import React, { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Button,
  Grid,
  MenuItem,
  TextField,
  InputBase,
} from "@material-ui/core";
import { context } from "../../../../CartContext";

const Address = ({ updateStep }) => {
  const { updateIsclicked, updateChecked } = useContext(context);
  const [address, updateAddress] = useState("");
  const [last, updateLast] = useState("");
  const [first, updateFirst] = useState("");
  const [city, updateCity] = useState("");
  const [email, updateEmail] = useState("");
  const [zip, updateZip] = useState("");
  return (
    <Grid
      container
      spacing={3}
      justifyContent="space-around"
      style={{ margin: "auto", width: "90%" }}
    >
      <Grid item xs={10} md={5}>
        <TextField
          defaultValue={first}
          fullWidth
          label="First Name"
          required
          onChange={(e) => updateFirst(e.target.value)}
        />
      </Grid>
      <Grid item xs={10} md={5}>
        <TextField
          value={last}
          fullWidth
          label="Last Name"
          required
          onChange={(e) => {
            updateLast(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={10} md={5}>
        <TextField
          value={address}
          fullWidth
          label="Address"
          required
          onChange={(e) => updateAddress(e.target.value)}
        />
      </Grid>
      <Grid item xs={10} md={5}>
        <TextField
          value={email}
          fullWidth
          label="Email"
          required
          onChange={(e) => updateEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={10} md={5}>
        <TextField
          value={city}
          fullWidth
          label="City"
          required
          onChange={(e) => updateCity(e.target.value)}
        />
      </Grid>
      <Grid item xs={10} md={5}>
        <TextField
          value={zip}
          fullWidth
          label="Zip Code"
          required
          onChange={(e) => updateZip(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <Button
          type="button"
          color="primary"
          variant="contained"
          alignItems="center"
          onClick={() => {
            if (zip === "") {
              alert("Enter details");
            } else {
              updateStep(1);
            }
          }}
          style={{ marginLeft: "30px" }}
        >
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default Address;
