import React from "react";
import "./Loader.css";
import ClipLoader from "react-spinners/ClipLoader";

function Loader(props) {
  return (
    <div className="loader">
      <div className="loaderCircle">
        <ClipLoader color={"#000"} loading={loading} size={300} />
      </div>
    </div>
  );
}

export default Loader;
