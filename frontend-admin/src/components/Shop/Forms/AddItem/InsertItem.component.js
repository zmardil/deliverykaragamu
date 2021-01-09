import React, { useState } from "react";
import { Paper, FormControl, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 150,
  },
  inputControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(10),
  },
}));

export default function EcommerceInsertitem() {
  const classes = useStyles();
  const [color1, setColor1] = useState("#025beb");
  const [color2, setColor2] = useState("#ff0019");
  const [color3, setColor3] = useState("#05fa53");
  const [name, setItemName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  function onChangeColor1(e) {
    setColor1(e.target.value);
  }
  function onChangeColor2(e) {
    setColor2(e.target.value);
  }
  function onChangeColor3(e) {
    setColor3(e.target.value);
  }
  function onChangeName(e) {
    setItemName(e.target.value);
  }
  function onChangePrice(e) {
    setPrice(e.target.value);
  }
  function onChangeCDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Paper
            elevation={3}
            style={{
              padding: "10px",
              background: "linear-gradient(45deg, #ededed 30%, #fcfcfc 90%)",
              borderRadius: "20px",
              boxShadow: "10px 5px 10px rgba(110, 107, 107, 0.548)",
            }}
          >
            <h3>Update Item</h3>
            <FormControl className={classes.formControl}>
              <TextField
                value={name}
                className={classes.inputControl}
                label="Name"
                onChange={onChangeName}
                variant="outlined"
              />

              <TextField
                value={price}
                className={classes.inputControl}
                label="Price"
                onChange={onChangePrice}
                variant="outlined"
              />

              <TextField
                id="filled-multiline-flexible"
                className={classes.inputControl}
                label="Description"
                multiline
                rowsMax={4}
                value={description}
                onChange={onChangeCDescription}
                variant="outlined"
              />

              <div className="row">
                <TextField
                  type="color"
                  className={classes.inputControl}
                  style={{
                    minWidth: "45px",
                    maxWidth: "50px",
                  }}
                  value={color1}
                  onChange={onChangeColor1}
                  variant="outlined"
                />
                <TextField
                  type="color"
                  className={classes.inputControl}
                  style={{
                    minWidth: "45px",
                    maxWidth: "50px",
                  }}
                  value={color2}
                  onChange={onChangeColor2}
                  variant="outlined"
                />
                <TextField
                  type="color"
                  className={classes.inputControl}
                  style={{
                    minWidth: "45px",
                    maxWidth: "50px",
                  }}
                  value={color3}
                  onChange={onChangeColor3}
                  variant="outlined"
                />
              </div>

              <TextField
                type="file"
                value={name}
                className={classes.inputControl}
                onChange={onChangeName}
                variant="outlined"
              />

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#263238",
                  color: "white",
                }}
              >
                Insert
              </Button>
            </FormControl>
          </Paper>
        </div>
      </div>
      <br />
    </>
  );
}
