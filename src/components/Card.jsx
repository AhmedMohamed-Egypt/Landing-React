function Card({ step, title, AirdropAmount, prize, list }) {
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <div className="card-how">
      <h2 className="drkBlue size-20 nuntio-med text-center capitilize pdtop-10 pdb-10">
        {step}
      </h2>
      <div className="cardbkground">
        <p className="text-center white size-38 nunito-bold-ex cardbkground__title">
          {title}
        </p>
        <div className="subcontainer">
          <ul className="cardbkground__list mrb-35">
            {list.map((item, index) => (
              <li
                key={index}
                className="lightviolet nuntio-med size-18 d-flex align-items-center pdl-15"
              >
                <span className="icon"></span>
                <span className="d-inline-block mrl-10">{item}</span>
              </li>
            ))}
          </ul>
          <h4 className="fothrViolet weight-normal size-18 nuntio-med mrb-15">
            Airdrop Amount
          </h4>
          <p className="widget">
            <span className="nuntio-med size-18 fothrViolet">
              {AirdropAmount}
            </span>
            <span className="yellow size-18 nuntio-med text-uppercase mrl-10">
              GAIN
            </span>
          </p>
          <h4 className="fothrViolet weight-normal size-18 nuntio-med mtop-20 mrb-10">
            The prize
          </h4>
          <p className="widget">
            <span className="yellow size-18 nuntio-med ">
            
              <span className="d-inline-block mrt-5">$</span>
              <span className="formatNum">{formatNumber(prize)}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
