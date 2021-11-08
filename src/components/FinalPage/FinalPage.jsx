import React from "react";
import "./FinalPage.css";
import { IoIosArrowForward } from "react-icons/io";

export default function FinalPage(props) {
  return (
    <div className="finalPage">
      <div className="finalInner">
        <div className="finalDescription description">
          <p>
            Για να αρχίσετε να κερδίζεται , πρέπει να καταθέσετε το ποσό
            τουλάχιστον
          </p>
        </div>
        <div className="finalTitle title">200€</div>
        <div className="finalDescription description">
          <p>
            είναι εντελώς τα χρήματα σας , τα οποία ανα πάσα στιγμή μπορείτε να
            αποσύρεται
          </p>
        </div>
        <div className="finalLink">
          <a href="https://domfir.xyz/yfnLpB" target="_blank" rel="noreferrer">
            <p>Μεταβείτε στην εγγραφή λογαριασμού σας.</p>
            <IoIosArrowForward className="arrowIconFinal" />
          </a>
        </div>
      </div>
    </div>
  );
}
