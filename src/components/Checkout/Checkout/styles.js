import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    paper: {
      width: "100%",
      [theme.breakpoints.up("sm")]: { width: "60%", margin: "auto" },
    },
  };
});
