import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "../assests/images/slider-1.jpg";
import Image1 from "../assests/images/history1.jpeg";


function Slider() {
  return (
    <section>
      <div class="banner-up">
        <div class="container-fluid p-0">
          <Carousel>
            <Carousel.Item>
              <img src={Image} style={{width:window.innerWidth, height:window.innerHeight/2}}  alt="..." />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={Image1} style={{width:window.innerWidth, height:window.innerHeight/2}} alt="..." />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Slider;
