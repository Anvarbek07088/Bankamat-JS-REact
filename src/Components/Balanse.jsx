import { useContext } from "react";
import { MyContext } from "../App";
function Balanse() {
  const value = useContext(MyContext);
  return (
    <div className="home">
      <p>
        Sizning balansingizda {value.Balans} so'm puli bor.
        {value.Balans == 0
          ? "Pulingiz tugabdiku, kartangizga pul tashlang"
          : ""}
      </p>
    </div>
  );
}

export default Balanse;
