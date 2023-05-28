import "./Header.css";
import gdsclogo from "./images/gdsclogo.png";
import loginlogo from "./images/login.png";

function Header() {
  return (
    <>
      <div className="header">
        <a href="https://youtube.com/"  className="home">
          <img src={gdsclogo} width={70} height={50} alt="home " />
        </a>
        <div className="points">
          <a href="products">EXPLORE</a>
          <input className="search" placeholder="Search Anything 🔍"></input>
          <a href="trend">TRENDING</a>
        </div>
        <a href="login" className="loginnow">
          <img src={loginlogo} width={50} height={50} alt="login" />
        </a>
      </div>
    </>
  );
}

export default Header;
