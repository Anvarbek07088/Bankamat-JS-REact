import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
function Money() {
  const value = useContext(MyContext);
  const [money1, setmonet1] = useState("");
  let p2 = `Sizning balansingizda ${value.Balans} ming so'm puli bor. Qancha pul yechmoqchi ekanligingizni kirgizing!`;
  let p3 = "Xurmatli mijoz, vaizfa bajarildi!";
  let p4 = "Xurmatli mijoz qayta urunib ko'ring, xatolik ro'y berdi";
  const [pp, setpp] = useState(p2);
  const [button, setbutton] = useState(0);

  function func() {
    if (money1 > 0 && money1 <= value.Balans) {
      setpp(p3);
      value.setBalans(value.Balans - money1);
      setbutton(2);
    } else {
      setpp(p2);
    }
  }
  useEffect(() => {
    func();
  }, [button == 1]);
  return (
    <div className="home">
      <p>{pp}</p>
      <br />
      <br />
      {button != 2 ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setmonet1(e.target.value);
            }}
          />
          <br />
          <br />
          <button
            className="homeBtn"
            onClick={() => {
              setbutton(1);
            }}
          >
            Pul yechish
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Money;
