import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [editValue, setEditValue] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleEdit = e => {
    e.preventDefault();
    setEditValue(!editValue);
    // console.log("editValue", editValue);
  };
  return (
    <Card className={classes.root} style={{ height: "30rem" }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={<MoreVertIcon onClick={e => handleEdit(e)} />}
        title={props.productName}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.productImage}
        title="image"
      />

      <CardContent>
        {editValue ? (
          <Typography variant="body2" color="textSecondary" component="p">
            <div className="short-desc">{props.shortDescription}</div>
          </Typography>
        ) : (
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            variant="outlined"
            value={props.shortDescription}
          />
        )}
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h2">
          Price : {props.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h2">
          Rating : {props.reviewRating}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h2">
          Review Count : {props.reviewCount}
        </Typography>
      </CardContent>
    </Card>
  );
}
