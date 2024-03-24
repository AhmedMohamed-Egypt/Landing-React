import CountDown from "./CountDown"

function HeroContent() {
    return (
        <>
        <div className="container-adrop">
      <div className="content-herArea d-flex flex-column justify-content-center">
        <div className="content-herArea__headings">
          <h1 className="white  size-52 nunito-bold-ex ">Join the Airdrop</h1>
          <p className="white nuntio-med size-24">Scratch your way to an airdrop or the biggest prize!</p><a className="join-get-btn nunito-semi-bold size-25 get mtop-40 " href="#">Get Started</a>
        </div>
      </div>
      <CountDown/>
    </div>
      </>
    )
}

export default HeroContent
