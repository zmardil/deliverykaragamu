import React, {Component} from "react";
import axios from "axios";
import { Chart } from "react-google-charts";


const lineChart = (
  <Chart
    height={"120px"}
    padding={"20px"}
    chartType="Line"
    // loader={<div>Loading Chart</div>}
    data={[
      ["Month", ""],
      ["Jan", 37.8],
      ["Feb", 30.9],
      ["Mar", 25.4],

  ]}
  options={{

  }}
    // rootProps={{ "data-testid": "3" }}
  />
);

export default class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/ShopItems/")
      .then((response) => {
        this.setState({

        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render(){
  return (
    <div>
      <div
        className="weightLineChart"
        style={{

          margin: "auto",
          justifyContent: "center",

        }}
      >

          {lineChart}

      </div>
    </div>
  );
  }

}
