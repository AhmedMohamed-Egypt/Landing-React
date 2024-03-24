function CardTraffic({ num, txtList }) {
  return (
    <div className="d-flex align-items-start theToken__traffic--content  mrb-35">
      <span className="nunito-Black thirdYellow size-42 d-block mrt-20 number">
        {num}
      </span>
      <p className="d-flex flex-column theToken__traffic--content--txt">
        {txtList.map((item,index) => (
          <span key={index} className="thrdViolet nuntio-med size-22">
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}

export default CardTraffic;
