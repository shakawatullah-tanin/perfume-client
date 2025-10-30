import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Banner = () => {

    const image = [
        {name :"image1",
            link : "https://axeo-theme.myshopify.com/cdn/shop/files/Slider1_767x.jpg?v=1614287895"
        },
        {
            name : "image2",
            link : "https://axeo-theme.myshopify.com/cdn/shop/files/slider2-bg_2000x.jpg?v=1614287880"
        }
    ]
  return (
    <div>
      <Carousel className="max-w-[1000] mx-auto ">
        <CarouselContent>
          {image.map((iamge, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <Image src={image.link} alt=""></Image>
                    <span className="text-4xl font-semibold"></span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banner;
