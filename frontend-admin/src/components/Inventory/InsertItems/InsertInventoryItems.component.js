import React, { Component } from "react";

import "./InsertInventoryItems.css";

import Background from "./img/gymbanner.jpg";

export default class InsertInventoryItems extends Component {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-12 col-xl-10">
            <div
              class="card  o-hidden border-0 my-5"
              style={{
                // border: "2px solid blue",
                borderRadius: "20px",
                boxShadow: "10px 7px 10px rgba(110, 107, 107, 0.548)",
              }}
            >
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-flex">
                    <div
                      class="flex-grow-1 bg-login-image"
                      style={{
                        backgroundImage: `url(${Background})`,
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h4 class="text-dark mb-4">Inventory | Add Items</h4>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            placeholder="Enter Item Type..."
                            name="Type"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            placeholder="Enter Item Brand..."
                            name="Brand"
                          />
                        </div>

                        <div class="form-group">
                          <label
                            style={{ fontSize: "12px", marginLeft: "15px" }}
                          >
                            Manufactural Date
                          </label>
                          <input
                            class="form-control form-control-user"
                            type="date"
                            style={{ borderRadius: "20px" }}
                            placeholder="Enter Manufactural Date..."
                            name="ManufacturalDate"
                          />
                        </div>

                        <div class="form-group">
                          <label
                            style={{ fontSize: "12px", marginLeft: "15px" }}
                          >
                            Service Date
                          </label>
                          <input
                            class="form-control form-control-user"
                            type="date"
                            style={{ borderRadius: "20px" }}
                            placeholder="Enter Service Date..."
                            name="ServiceDate"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="number"
                            id="exampleInputEmail"
                            placeholder="Enter Warranty Period (Years)..."
                            name="Warranty"
                          />
                        </div>

                        <div class="form-group">
                          <label
                            style={{ fontSize: "12px", marginLeft: "15px" }}
                          >
                            Purchased Date
                          </label>
                          <input
                            class="form-control form-control-user"
                            type="date"
                            style={{ borderRadius: "20px" }}
                            placeholder="Enter Purchased Date..."
                            name="PurchasedDate"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="file"
                            id="exampleInputEmail"
                            name="Image"
                            style={{ padding: "2px" }}
                          />
                        </div>

                        <div class="form-group">
                          <button
                            class="btn btn-primary btn-block text-white btn-user additemBtn"
                            type="submit"
                          >
                            Add Item
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
