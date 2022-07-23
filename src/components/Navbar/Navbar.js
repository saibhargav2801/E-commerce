import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";

import logo from "../../assets/commerce.png";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./style";
import { context } from "../../CartContext";
import { useContext } from "react";
function Navbar({ totalItems }) {
  const classes = useStyles();
  const { isClicked, updateIsclicked, updateChecked, isChecked } =
    useContext(context);
  return (
    <>
      <AppBar position="fixed" color="inhert" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <img
              src={logo}
              alt="comerce.js"
              height="25px"
              className={classes.image}
            />
            YourKart
          </Typography>
          <div className={classes.grow} />
          {isClicked && (
            <div>
              <Button
                variant="contained"
                type="button"
                color="primary"
                onClick={() => {
                  updateIsclicked(false);
                  updateChecked(false);
                }}
              >
                Shop More
              </Button>
            </div>
          )}
          <div className={classes.button}>
            {!isChecked && (
              <IconButton
                aria-label="show-cart"
                color="inherit"
                onClick={() => {
                  updateIsclicked(true);
                }}
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
