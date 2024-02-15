{
  /* <NavLink to="/balanse">Balansni ko'rish</NavLink>
            <NavLink to="/money">Pul yechish</NavLink>
            <NavLink to="/changecode">Kodni o'zgartirish</NavLink> */
}
import { useContext } from "react";
import { MyContext } from "../App";
import { NavLink } from "react-router-dom";

function Home1() {
  const value = useContext(MyContext);

  return (
    <div className="home">
      <p>Xurmatli mijoz, kerakli bandni tanlang!</p>
      <br />
      <br />
      <button className="homeBtn">
        <NavLink to="/balanse" className={"link1"}>
          Balansni ko'rish
        </NavLink>
      </button>
      <br />
      <br />
      <button className="homeBtn">
        <NavLink to="/money" className={"link1"}>
          Pul yechish
        </NavLink>
      </button>
      <br />
      <br />
      <button className="homeBtn">
        <NavLink to="/changecode" className={"link1"}>
          Kodni o'zgartirish
        </NavLink>
      </button>
      <br /><br />
      <button className="homeBtn">
        <a href="https://t.me/IT_bmats" className="link1">Bizni telegram kanalga o'tish</a>
      </button>
    </div>
  );
}

export default Home1;
