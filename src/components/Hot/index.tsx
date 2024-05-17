"use client";
import { Carousel } from "@mantine/carousel";
import "./style.scss";
export default function Hot() {
  return (
    <div className="component hot-component">
      <Carousel
        withIndicators
        height={300}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={3}
      >
        <Carousel.Slide>
          <div className="item"></div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="item"></div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="item"></div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="item"></div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="item"></div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="item"></div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
