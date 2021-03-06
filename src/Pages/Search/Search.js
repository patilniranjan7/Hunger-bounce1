import React, { useState } from "react";
import {
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "150px",
      height: "60px",
    },
  },
}));

function Search() {
  const classes = useStyles();
  const [show , setshow] = useState(true);
  return (
    <div>{show ?(null):(null) }
    <div>
      <Link to="/search">
        <FormControl className={`search ${classes.root}`}>
          <Button
            color="default"
            variant="contained"
            startIcon={<SearchIcon />}
            style={{ color: "var(--app-color)" }}
          >
            Search
          </Button>
        </FormControl>
      </Link>
    </div>
    </div>
  );
}

export default Search;
