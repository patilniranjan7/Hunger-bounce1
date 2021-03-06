import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Link } from "react-router-dom";
import "./RestaurantItems.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function RestaurantItems({ image, key, data }) {
  const classes = useStyles();
  let img = data.featured_image;

  return (
    <Link to="/restaurant" style={{ textDecoration: "none" }}>
      <Card
        className={`card ${classes.root}`}
        style={{
          textDecoration: "none",
          borderRadius: "10px",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
          objectFit: "contain",
        }}
      >
        <CardActionArea>
          <CardMedia
            className={`card__img ${classes.media}`}
            image={img === "" ? image : img}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="p"
              className="name"
              style={{ marginBottom: "10px", fontSize: "20px" }}
            >
              {data.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="cuisine"
              style={{ marginBottom: "10px" }}
            >
              {data.cuisines}
            </Typography>

            <div className="row">
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="rating"
                style={{ color: "white" }}
              >
                <StarRateIcon />
                {data.user_rating.aggregate_rating}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {data.currency}
                {data.average_cost_for_two}
              </Typography>
            </div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ marginBottom: "10px" }}
            >
              Timing: {data.timings}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Direction: {data.location.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default RestaurantItems;
