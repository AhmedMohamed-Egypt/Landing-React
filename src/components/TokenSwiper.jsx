import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import CardToken from "./CardToken";
import { Navigation, Pagination } from 'swiper/modules';

register();

const data = ['Reward your followers and fans with exclusive content, cash prizes, NFTs, and more.','Monetize your traffic and generate revenue from your audience.','Monetize your traffic and generate revenue from your audience.']

function TokenSwiper() {
 
  useEffect(() => {
    const swiperEl = document.querySelector(".theToken__list swiper-container");

    const swiperParams = {
      modules: [Navigation, Pagination],
      pagination: {
        clickable: true,
       
      },
         
      breakpoints:{
        375: {
          slidesPerView: 1,
        },
        770: {
          slidesPerView: 3,
        },
      },
      
      injectStyles: [`
      .swiper-pagination {

        .swiper-pagination-bullet{
          width: 13px;
          height: 13px;
          &:not(.swiper-pagination-bullet-active){
            background-color: transparent;
            border: 1px solid #AB8BD1;
          }
          &.swiper-pagination-bullet-active{
            background-color: #57258F;
          }
        }
      }
      
      @media only screen and (min-width: 770px) {
        .swiper-wrapper{
            display:flex;
            flex-direction:column
          }
      }

      `]
    };

    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
  });
  return (
    <div>
      <swiper-container init="false" pagination="true">
    
      {data.map((item,index)=>
      
            <swiper-slide key={index} class="swiper-slide">
          <CardToken  txt={item}/>
      </swiper-slide>
      
      )
        }
      
      </swiper-container>
    </div>
  );
}

export default TokenSwiper;
