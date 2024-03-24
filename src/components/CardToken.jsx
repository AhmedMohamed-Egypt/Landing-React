function CardToken({ txt }) {
  return (
    <p className="thrdViolet nuntio-med size-21 d-flex align-items-center theToken__list--mainTxt  shrinkLineHeight mrb-25">
      <span className="icon mrt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.021"
          height="10.324"
          viewBox="0 0 14.021 10.324"
        >
          <g
            id="Check_icon"
            data-name="Check icon"
            transform="translate(-151.025 -177.225)"
          >
            <g
              id="Group_23"
              data-name="Group 23"
              transform="translate(151.025 177.225)"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M155.828,187.549a1.111,1.111,0,0,1-.787-.326l-3.692-3.685a1.107,1.107,0,1,1,1.566-1.566l2.906,2.906,7.335-7.328a1.107,1.107,0,1,1,1.566,1.566l-8.114,8.107A1.112,1.112,0,0,1,155.828,187.549Z"
                transform="translate(-151.025 -177.225)"
                fill="#C7A82F"
              />
            </g>
          </g>
        </svg>
      </span>
      <span>{txt}</span>
    </p>
  );
}

export default CardToken;
