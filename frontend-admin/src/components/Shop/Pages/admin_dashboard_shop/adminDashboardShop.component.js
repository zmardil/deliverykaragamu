import React, {Component} from "react";
import Chart from "../../Charts/YearlyIncome/YearlyIncomeChart";
import BarChart from "../../Charts/BestSellingItems/BestSellingItemBarchart";


export default class adminDashboardShop extends Component {
  render() {
    return (
      <div class="d-flex flex-column" id="content-wrapper">
        <div class="row">
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ backgroundColor: "#92ade8", borderRadius: "10px" }}
            >
              <div class="card-body">
                <div class="card" style={{ backgroundColor: "#074666" }}>
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <div class="card" style={{ width: "80px" }}>
                          <img
                            class="card-img w-100 d-block"
                            src="./assets/img/Shop/3 adidas Ultraboost.png "
                            style={{ width: "64px" }}
                          />
                        </div>
                      </div>
                      <div class="col" style={{ marginTop: "36px" }}>
                        <button
                          class="btn btn-primary d-flex flex-column-reverse flex-shrink-0 justify-content-center align-items-center align-content-center m-auto justify-content-xl-start"
                          type="button"
                          style={{ marginTop: "0px", fontSize: "12px" }}
                        >
                          View Item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ backgroundColor: "#92ade8", borderRadius: "10px" }}
            >
              <div class="card-body">
                <div class="card" style={{ backgroundColor: " #074666" }}>
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <div class="card" style={{ width: "80px" }}>
                          <img
                            class="card-img w-100 d-block"
                            src="./assets/img/Shop/gettyimages-1213796751-612x612.png"
                            style={{ width: "64px" }}
                          />
                        </div>
                      </div>
                      <div class="col" style={{ marginTop: "36px" }}>
                        <button
                          class="btn btn-primary d-flex flex-column-reverse flex-shrink-0 justify-content-center align-items-center align-content-center m-auto justify-content-xl-start"
                          type="button"
                          style={{ marginTop: "0px", fontSize: "12px" }}
                        >
                          Add item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ backgroundColor: "#92ade8", borderRadius: "10px" }}
            >
              <div class="card-body">
                <div class="card" style={{ backgroundColor: "#074666" }}>
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <div class="card" style={{ width: "85px" }}>
                          <img
                            class="card-img w-100 d-block"
                            src="assets/img/Shop/report-documents-research-vector-21162870.jpg"
                            style={{ width: "64px" }}
                          />
                        </div>
                      </div>
                      <div class="col" style={{ marginTop: "36px" }}>
                        <button
                          class="btn btn-primary d-flex flex-column-reverse flex-shrink-0 justify-content-center align-items-center align-content-center m-auto justify-content-xl-start"
                          type="button"
                          style={{ marginTop: "0px", fontSize: "12px" }}
                        >
                          &nbsp;report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ backgroundColor: "#92ade8", borderRadius: "10px" }}
            >
              <div class="card-body">
                <div class="card" style={{ backgroundColor: "#074666" }}>
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <div class="card" style={{ width: "80px" }}>
                          <img
                            class="card-img w-100 d-block"
                            src="assets/img/Shop/a.jpg"
                            style={{ width: "64px" }}
                          />
                        </div>
                      </div>
                      <div
                        class="col"
                        style={{ marginTop: " 36px", marginLeft: "15px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style={{ margin: "15px" }}>
          <div class="col">
            <div
              class="card shadow-lg"
              style={{
                background: "linearGradient(90deg, rgb(146,173,232) 0%, white)",
                height: "339px",
                borderRadius: "29px",
              }}
            >
              <div class="card-body" style={{borderRadius: "49px"}}>
                <Chart/>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ borderRadius: "30px", backgroundColor: "rgb(255,255,255)" }}
            >
              <div class="card-body"><BarChart/></div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ borderRadius: "30px", backgroundColor: "rgb(7,70,102)" }}
            >
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ borderRadius: "30px", backgroundColor: "rgb(7,70,102)" }}
            >
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
