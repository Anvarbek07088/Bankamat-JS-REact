import { useContext } from "react";
import { MyContext } from "../App";
import { NavLink } from "react-router-dom";
function ChangeCode() {
  const value = useContext(MyContext);
  return (
    <div className="home">
      <p>Yangi parolingizni keriting!</p>
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          value.setCode(e.target.value);
        }}
      />
      <br />
      <br />
      <button className="homeBtn">
        <NavLink to="/" className={"link1"}>
          Paroli qo'yish
        </NavLink>
      </button>
    </div>
  );
}

export default ChangeCode;
