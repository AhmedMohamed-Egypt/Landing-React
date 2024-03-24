import { useEffect } from "react";

import { register } from "swiper/element/bundle";
import CardTraffic from "./CardTraffic";

register();
const data = [
  { num: 1, txtList: ["Purchase", "Gain Tokens"] },
  { num: 2, txtList: ["Create", "a lottery"] },
  { num: 3, txtList: ["Set the prizes,", "rules, and ticket", "price"]},
  { num: 4, txtList: ["Promote your ,", "lottery to your", "audience"]},
  { num: 5, txtList: ["Invite ,", "sponsors to", "your lottery"] },
  { num: 6, txtList: ["Distribute prizes  ,", "to the winners"] },
];

function TrafficSwiper() {
  useEffect(() => {
    const swiperEl = document.querySelector(
      ".theToken__traffic swiper-container"
    );

    const swiperParams = {
      speed: 500,
      spaceBetween: 5,
     
      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 6,
        },
      },
      injectStyles: [
        `
      :host{
          display: flex;
          flex-wrap: wrap;
          
      }
     
      @media only screen and (min-width: 651px){
        ::slotted(swiper-slide){
        width: 48% !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }
      :host .swiper-wrapper{
        
        display: flex;
        flex-wrap: wrap;
      }
      }
      .icon-chevron-thin-right:before {
        content: "\\e900";
      }
      .icon-chevron-thin-left:before {
        content: "\\e901";
      }
      .swiper-button-next svg{
        display:none
      }
      .swiper-button-prev svg{
        display:none
      }
      .swiper-button-next{
        right: 50px;
      }
      .swiper-button-next::after {
        content:'\\e900';
        font-family: "icomoon" !important;
        font-weight: bold;
        font-size: 24px;
        color: #b480ee;
      }
      .swiper-button-prev{
        left: 50px;
      }
      .swiper-button-prev::after{
        content: "\\e901";
        font-family: "icomoon" !important;
        font-weight: bold;
        font-size: 24px;
        color: #b480ee;
      }

    
     
      `,
      ],
    };

    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
  });
  return (
    <swiper-container init="false" navigation="true">
      {data.map((item,index) => (
        <swiper-slide key={index} class="swiper-slide">
          <CardTraffic  num={item.num} txtList={item.txtList}/>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default TrafficSwiper;
