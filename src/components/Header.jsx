
import { useEffect, useState } from "react";


function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = ()=>{
    setOpen((open)=>!open)
  }
  useEffect(()=>{
    if(open){
      document.body.classList.add('menuOpen')
    }else {
      document.body.classList.remove('menuOpen')
    }
  })
  
  return (
    <>
      <div className="header-adrop d-flex align-items-center pdl-50 pdr-50 justify-content-between pdtop-9 pdb-9">
        <a
          className="header-adrop__logo white d-flex align-items-center"
          href="#"
        >
          <img src="images/logo.png" />
          <p className="d-flex flex-column shrinkLineHeight">
            <span className="cairoBold size-36">MR.Gain</span>
            <span className=" size-12 lhf-font text-center">
              You can get profit!
            </span>
          </p>
        </a>
        <div className="d-flex flex-grow-one header-adrop__menumobile">
          
          <ul className="d-flex align-items-center justify-content-center">
            <li className="mrLeft-auto ">
              <a className="nuntio-med white anchorLink active " href="#" onClick={()=>{setOpen(false)}}>
                MR.Gain
              </a>
            </li>
            <li className=" " >
              <a className="nuntio-med white anchorLink" rel="norefer" href="#how-it-work" onClick={()=>{setOpen(false)}}>
                <span  >Airdrop</span>
                
              </a>
            </li>
            <li className=" ">
              <a className="nuntio-med white anchorLink" rel="norefer" href="#Token" onClick={()=>{setOpen(false)}}>
                <span >Token</span>
                
              </a>
            </li>
            <li className=" ">
              <a className="nuntio-med white anchorLink" rel="norefer" href="#social" onClick={()=>{setOpen(false)}}>
                <span >Social</span>
              </a>
            </li>
            <li className=" mrLeft-auto mrt-0">
              <a
                className="nuntio-med white anchorLink  join-get-btn size-22 nunito-bold join"
                href="#"
              >
                join
              </a>
            </li>
            <li className="social">
              <div className="footer-adrop__container--socialLinks d-flex align-items-center">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Tiktok_Glyph"
                    data-name="Tiktok Glyph"
                    width="29.312"
                    height="33.357"
                    viewBox="0 0 29.312 33.357"
                  >
                    <path
                      id="Path_2979"
                      data-name="Path 2979"
                      d="M253.321,80.358A8.445,8.445,0,0,1,244.88,72h-5.449V95.045a4.942,4.942,0,1,1-4.946-4.938,5.07,5.07,0,0,1,1.556.248V84.823a10.887,10.887,0,0,0-1.571-.113,10.449,10.449,0,0,0-7.847,3.51,10.24,10.24,0,0,0,.458,14.116,10.576,10.576,0,0,0,.985.857,10.435,10.435,0,0,0,6.4,2.165,10.886,10.886,0,0,0,1.571-.113,10.418,10.418,0,0,0,5.818-2.909,10.188,10.188,0,0,0,3.059-7.261l-.03-12.176a13.8,13.8,0,0,0,8.448,2.864V80.343a.015.015,0,0,1-.015.015Z"
                      transform="translate(-224.025 -72)"
                      fill="#335bdf"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="youtube-123"
                    width="31.457"
                    height="22.02"
                    viewBox="0 0 31.457 22.02"
                  >
                    <path
                      id="Path_2980"
                      data-name="Path 2980"
                      d="M30.8,41.374a3.94,3.94,0,0,0-2.781-2.781c-2.453-.657-12.29-.657-12.29-.657s-9.837,0-12.29.657A3.94,3.94,0,0,0,.657,41.374,40.926,40.926,0,0,0,0,48.945a40.926,40.926,0,0,0,.657,7.571A3.94,3.94,0,0,0,3.439,59.3c2.453.657,12.29.657,12.29.657s9.837,0,12.29-.657A3.94,3.94,0,0,0,30.8,56.516a40.926,40.926,0,0,0,.657-7.571A40.926,40.926,0,0,0,30.8,41.374ZM12.583,53.663V44.226l8.172,4.719Z"
                      transform="translate(0 -37.935)"
                      fill="#335bdf"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32.472"
                    height="32.472"
                    viewBox="0 0 32.472 32.472"
                  >
                    <path
                      id="Instagram_Black_Line"
                      data-name="Instagram Black Line"
                      d="M161.24,109.373a11.816,11.816,0,0,1-3.939-.755,7.983,7.983,0,0,1-2.877-1.871,7.842,7.842,0,0,1-1.871-2.877,12.1,12.1,0,0,1-.755-3.939c-.077-1.729-.1-2.287-.1-6.7s.022-4.967.1-6.7a11.818,11.818,0,0,1,.755-3.939,8.276,8.276,0,0,1,4.748-4.748,11.817,11.817,0,0,1,3.939-.755c1.729-.077,2.287-.1,6.7-.1s4.967.022,6.7.1a11.816,11.816,0,0,1,3.939.755,7.984,7.984,0,0,1,2.877,1.871,7.842,7.842,0,0,1,1.871,2.877,11.816,11.816,0,0,1,.755,3.939c.077,1.729.1,2.287.1,6.7s-.022,4.967-.1,6.7a12.1,12.1,0,0,1-.755,3.939,7.983,7.983,0,0,1-1.871,2.877,7.842,7.842,0,0,1-2.877,1.871,12.1,12.1,0,0,1-3.939.755c-1.729.077-2.287.1-6.7.1S162.969,109.45,161.24,109.373Zm.131-29.354a8.94,8.94,0,0,0-3.02.558,5.168,5.168,0,0,0-1.871,1.214,5.077,5.077,0,0,0-1.214,1.871,8.891,8.891,0,0,0-.558,3.02c-.077,1.718-.1,2.221-.1,6.564s.022,4.847.1,6.564a8.94,8.94,0,0,0,.558,3.02,5.168,5.168,0,0,0,1.214,1.871,5.076,5.076,0,0,0,1.871,1.214,8.891,8.891,0,0,0,3.02.558c1.718.077,2.221.1,6.564.1s4.847-.011,6.564-.1a8.94,8.94,0,0,0,3.02-.558,5.359,5.359,0,0,0,3.085-3.085,8.89,8.89,0,0,0,.558-3.02c.077-1.718.1-2.221.1-6.564s-.011-4.847-.1-6.564a8.939,8.939,0,0,0-.558-3.02,5.167,5.167,0,0,0-1.214-1.871,5.077,5.077,0,0,0-1.871-1.214,8.891,8.891,0,0,0-3.02-.558c-1.707-.077-2.221-.1-6.564-.1s-4.847.011-6.564.1Zm-1.488,13.216a8.052,8.052,0,1,1,16.1-.011h0a8.068,8.068,0,0,1-8.052,8.063h0a8.038,8.038,0,0,1-8.052-8.052Zm2.823,0a5.23,5.23,0,1,0,10.459,0h0a5.229,5.229,0,0,0-5.23-5.23h0a5.23,5.23,0,0,0-5.23,5.23Zm11.838-8.621a2.024,2.024,0,0,1,4.048,0h0a2.008,2.008,0,0,1-2.013,2.013h0a2.027,2.027,0,0,1-2.035-2.013Z"
                      transform="translate(-151.7 -77)"
                      fill="#335bdf"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34.694"
                    height="32.472"
                    viewBox="0 0 34.694 32.472"
                  >
                    <g id="layer1" transform="translate(0 0)">
                      <path
                        id="path1009"
                        d="M484.024,356.79l13.395,17.91L483.94,389.262h3.034l11.8-12.749,9.535,12.749h10.324l-14.149-18.917,12.547-13.554H514L503.13,368.531l-8.782-11.741Zm4.461,2.234h4.743l20.943,28h-4.743Z"
                        transform="translate(-483.94 -356.79)"
                        fill="#335bdf"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="Hamburgmenu" onClick={()=>handleOpen()}>
          
          <span> </span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Header;
