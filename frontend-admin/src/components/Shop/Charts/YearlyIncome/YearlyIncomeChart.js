import React, {Component} from "react";
import {Chart} from "react-google-charts";
import axios from "axios";


// chart code
const lineChart = (
  <Chart
    // width={"600px"}
    height={"320px"}
    padding={"20px"}
    chartType="Line"
    // loader={<div>Loading Chart</div>}
    data={[
      ["Month", "Yearly Income"],
      ["Jan", 37.8],
      ["Feb", 30.9],
      ["Mar", 25.4],
      ["Apr", 11.7],
      ["May", 11],
      ["Jun", 8.8],
      ["Jul", 7.6],
      ["Aug", 12.3],
      ["Sep", 16.9],
      ["Oct", 12.8],
      ["Nov", 5.3],
      ["Dec", 6.6],

    ]}
    options={{}}
  />
);

// chart code end
export default class LineChart extends Component {

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


  render() {
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