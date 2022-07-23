import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import useStyles from "./styles";
const Cartitem = ({ item, onRemoveCart, onUpdateCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        className={classes.media}
        alt={item.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCart(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCart(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => onRemoveCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cartitem;
