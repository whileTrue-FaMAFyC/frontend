import {height} from "@mui/system";
import {cloneElement} from "react";

const ProgressBar = (props) => {
  const {bgcolor, completed} = props;

  const containerStyles = {
    height: 10,
    width: 200,
    backgroundColor: "#e0e0d0",
    borderRadius: 50,
    margin: 50,
    display: "table",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "right",
    color: "white",
    display: "table-cell",
    verticalAlign: "middle",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
