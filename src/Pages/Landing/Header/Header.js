import React from "react";
import hb from "./hb.jpg";
import { Button } from "@material-ui/core";
import css from "./Header.module.css";

import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";

function Header() {
  const Button = styled(MuiButton)(spacing);
  return (
    <div className={css.header}>
      <img src={hb} alt="logo" className={css.LOGO} />
      <div className={css.buttons}>
        <Button
          variant="contained"
          color="secondary"
          className="first"
          m="1rem"
        >
          Create an account
        </Button>

        <Button variant="contained" color="default" className={css.second}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Header;
