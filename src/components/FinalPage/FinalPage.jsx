import React from "react";
import "./FinalPage.css";
import { IoIosArrowForward } from "react-icons/io";

export default function FinalPage(props) {
  return (
    <div className="finalPage">
      <div className="finalInner">
        <div className="finalDescription description">
          <p>
            With the object of starting to make money, you need to restock your
            trading deposit at the minimum
          </p>
        </div>
        <div className="finalTitle title">by 250$</div>
        <div className="finalDescription description">
          <p>
            that is completely your funds that you can siphon at any moment:
          </p>
        </div>
        <div className="finalLink">
          <a href="https://domfir.xyz/yfnLpB" target="_blank" rel="noreferrer">
            <p>Proceed to registration on trader account</p>
            <IoIosArrowForward className="arrowIconFinal" />
          </a>
        </div>
      </div>
    </div>
  );
}
