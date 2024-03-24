import TokenSwiper from "./TokenSwiper"
import TrafficSwiper from "./TrafficSwiper";


function TheToken() {
    return (
      
        <div className="theToken pdtop-60" id="Token">
<h2 className="heading-sections"> <span>The Token</span></h2>
<p className="nunito-bold size-36 white shrinkLheight theToken__text">
            The Gain Token is a utility token that 
            allows you to create and manage your
            own custom lotteries. With the Gain
            Token, you can:  
          </p>
          <div className=" postion-relative">
            <div className="flex-grow-one">
                <div className="theToken__list mtop-50 ">
                <TokenSwiper/>
                </div>
                <h3 className="nunito-bold size-36 white mtop-35 mrb-25 headingH3">Monetize Your Traffic:</h3>
               <div className="theToken__traffic swiper">
                <TrafficSwiper/>
               </div>
            </div>
            <div className="theToken__bkground"></div>
          </div>
        </div>
        
    )
}

export default TheToken
