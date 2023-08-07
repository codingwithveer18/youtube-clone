import "./Header.css";
import ytlogo from "./images/ytlogo.png";
import loginlogo from "./images/login.png";

function Header() {
  return (
    <>
      <div className="header">
        <a href="https://youtube.com/" rel="noreferrer" target="_blank"  className="home">
          <img src={ytlogo} width={70} height={50} alt="home " />
        </a>
        <div className="points">
          <a href="products">EXPLORE</a>
          <input type="search" className="search" placeholder=" Search Anything 🔍"></input>
          <a href="trend">TRENDING</a>
        </div>
        <a href="https://testing-mydatabase.000webhostapp.com/index.php" rel="noreferrer" target="_blank" className="loginnow">
          <img src={loginlogo} width={50} height={50} alt="login" />
        </a>
      </div>
    </>
  );
}

export default Header;
