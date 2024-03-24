import { useEffect } from "react";
import Card from "./Card";
import { register } from "swiper/element/bundle";


register();

const data = [
  {
    step: "step1",
    title: "Connect",
    AirdropAmount: 165000000,
    prize: 1000000,
    list: ["MetaMask", "Ethereum Network", "Join the lottery"],
  },
  {
    step: "step2",
    title: "Purchase",
    AirdropAmount: 165000000,
    prize: 1000000,
    list: [
      "DAI Stable",
      "Purchase NFT scratch card",
      "Tokens for all Participants",
    ],
  },
  {
    step: "step3",
    title: "Reveal or Sale",
    AirdropAmount: 165000000,
    prize: 1000000,
    list: [
      "Reveal the scratch card",
      "Purchase NFT scratch card",
      "Take your $GAIN tokens",
    ],
  },
];

function HowItWork() {
  useEffect(() => {
    const swiperEl = document.querySelector(".how-it-work swiper-container");

    const swiperParams = {
      spaceBetween: 30,
      breakpoints: {
        // when window width is >= 320px

        // when window width is >= 640px

        992: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
        993: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
      },

      injectStyles: [
        `
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
    .swiper-button-next {
      right: 0;
      &::after {
        content:'\\e900';
  
        font-family: "icomoon" !important;
font-weight: bold;
font-size: 24px;
color: #b480ee;
      }
    }
    .swiper-button-prev {
      left: 0;
      &::after {
        content: "\\e901";
        font-family: "icomoon" !important;
        font-weight: bold;
        font-size: 24px;
        color: #b480ee;
      }
    }
   
    `,
      ],
    };

    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
  });
  return (
   
      <div className="how-it-work postion-relative" id="how-it-work">
        <h2 className="heading-sections">
          <span>How it works ?</span>
        </h2>

        <div className="card-how-it-work ">
          <swiper-container init="false" navigation="true" class="my-thumbs">
            {data.map((item, index) => {
              return (
                <swiper-slide key={index} class="swiper-slide">
                  <Card
                    step={item.step}
                    title={item.title}
                    prize={item.prize}
                    AirdropAmount={item.AirdropAmount}
                    list={item.list}
                  />
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
        <p className="how-it-work__mainTxt thrdViolet nuntio-med-italic size-18 mtop-25">
          When you buy an NFT scratch card, you get a chance to win up to
          $1,000,000 or participate in the MR.Gain airdrop. There's no limit to
          the number of scratch cards you can buy, and you can also resell them
          to generate profits.
        </p>
      </div>
   
  );
}

export default HowItWork;
