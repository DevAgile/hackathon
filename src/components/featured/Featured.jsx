import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Progress of Work</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total work done today</p>
        <p className="amount">120 </p>
        <h3 className="desc">
          Tasks completed today
        </h3>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              <div className="resultAmount">1267</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
              <div className="resultAmount">124</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
              <div className="resultAmount">876</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
