// import React, { Component } from 'react'
// import { Paper, FormControl, TextField, Button } from "@material-ui/core";
// import {makeStyles} from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(3),
//       minWidth: 150,
//     },
//     inputControl: {
//       margin: theme.spacing(1),
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(10),
//     },
// }));

//     const classes = useStyles();

// export default class UpdateItem extends Component {
//     constructor(props) {
//         super(props);

//         this.onChangeColor1 = this.onChangeColor1.bind(this);
//         this.onChangeColor2 = this.onChangeColor2.bind(this);
//         this.onChangeColor3 = this.onChangeColor3.bind(this);
//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangePrice = this.onChangePrice.bind(this);
//         this.onChangeCDescription = this.onChangeCDescription.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//           username: "",
//           description: "",
//           duration: 0,
//           date: new Date(),
//           users: [],
//         };
//     }
//     onChangeColor1(e) {

//     }
//     onChangeColor2(e) {

//     }
//     onChangeColor3(e) {

//     }
//     onChangeName(e) {

//     }
//     onChangePrice(e) {

//     }
//     onChangeCDescription(e) {

//     }

//     render() {
//         return (
//             <div class="card" style={{margin: "100px", borderRadius: "43px", backgroundColor: " #73a8f0"}}>
//                 <div class="card-body" style={{backgroundColor: "rgba(115,168,240,0)", padding: "65px"}}>
//                     <div class="row">
//                         <div class="col">
//                             <div class="card" style={{borderRadius: "78px"}}><img class="card-img w-100 d-block" src="./assets/img/shoes/1.png"/></div>
//                         </div>
//                         <div class="col">
//                             <div class="card" style={{borderRadius: "70px;"}}>
//                                 <div class="card-body">
//                                 <FormControl className={classes.formControl}>
//               <TextField
//                 value={name}
//                 className={classes.inputControl}
//                 label="Name"
//                 onChange={onChangeName}
//                 variant="outlined"
//               />

//               <TextField
//                 value={price}
//                 className={classes.inputControl}
//                 label="Price"
//                 onChange={onChangePrice}
//                 variant="outlined"
//               />

//               <TextField
//                 id="filled-multiline-flexible"
//                 className={classes.inputControl}
//                 label="Description"
//                 multiline
//                 rowsMax={4}
//                 value={description}
//                 onChange={onChangeCDescription}
//                 variant="outlined"
//               />

//               <div className="row">
//                 <TextField
//                   type="color"
//                   className={classes.inputControl}
//                   style={{
//                     minWidth: "45px",
//                     maxWidth: "50px",
//                   }}
//                   value={color1}
//                   onChange={onChangeColor1}
//                   variant="outlined"
//                 />
//                 <TextField
//                   type="color"
//                   className={classes.inputControl}
//                   style={{
//                     minWidth: "45px",
//                     maxWidth: "50px",
//                   }}
//                   value={color2}
//                   onChange={onChangeColor2}
//                   variant="outlined"
//                 />
//                 <TextField
//                   type="color"
//                   className={classes.inputControl}
//                   style={{
//                     minWidth: "45px",
//                     maxWidth: "50px",
//                   }}
//                   value={color3}
//                   onChange={onChangeColor3}
//                   variant="outlined"
//                 />
//               </div>

//               <TextField
//                 type="file"
//                 value={name}
//                 className={classes.inputControl}
//                 onChange={onChangeName}
//                 variant="outlined"
//               />

//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: "#263238",
//                   color: "white",
//                 }}
//               >
//                 Insert
//               </Button>
//             </FormControl>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
