import React, { Component } from "react";

export default class Imageslider extends Component {
  render() {
    return (
      <div>
        {" "}
        <section id="carousel">
          <div class="carousel slide" data-ride="carousel" id="carousel-1">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item">
                <div class="jumbotron pulse animated hero-nature carousel-hero">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div class="carousel-item">
                <div class="jumbotron pulse animated hero-photography carousel-hero">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  {/* Make Space to adjust heigth */}
                </div>
              </div>
              <div class="carousel-item active">
                <div class="jumbotron pulse animated hero-technology carousel-hero">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  {/* Make Space to adjust heigth */}
                </div>
              </div>
            </div>
            <div>
              <a
                class="carousel-control-prev"
                href="#carousel-1"
                role="button"
                data-slide="prev"
              >
                <i class="fa fa-chevron-left"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousel-1"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-chevron-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <ol class="carousel-indicators">
              <li data-target="#carousel-1" data-slide-to="0"></li>
              <li data-target="#carousel-1" data-slide-to="1"></li>
              <li
                data-target="#carousel-1"
                data-slide-to="2"
                class="active"
              ></li>
            </ol>
          </div>
        </section>
      </div>
    );
  }
}
