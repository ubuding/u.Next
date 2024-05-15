import "./style.scss";
import Hot from "./Hot";
export default function Navbar() {
  return (
    <div className="navbar-component">
      <div className="navbar">
        <div className="logo"></div>
        <div className="tools">
          <div className="user"></div>
          <div className="git"></div>
          <div className="theme"></div>
        </div>
      </div>
      <div className="carousel-wrap">
        <Hot />
      </div>
    </div>
  );
}
