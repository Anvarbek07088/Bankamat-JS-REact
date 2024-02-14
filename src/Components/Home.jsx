import { useContext, useState } from "react"
import { MyContext } from "../App"
import { NavLink } from "react-router-dom";


function Home(){
  const value =useContext(MyContext)
  const [code1,setcode1]=useState(0)
  let p = "Assalomu alaykum hurmatli mijoz, kodni keriting"
  let p2="Xurmatli mijoz parol hato, qaytadan kiriting!"
  const [p1,setp1]=useState(p)
    return(
        <>
          <div className="home">
            <p>{p1}</p>
            <br /><br />
            <input type="text" onChange={(e)=>{setcode1(e.target.value);
               } }/>
               <br /><br />
            <button className="homeBtn">{value.code==code1?<NavLink to="/home1" className={"link1"}>Kirish</NavLink>:<NavLink to="/" className={"link1"} onClick={()=>{setp1(p2)}}>Kirish</NavLink>}</button>
          </div>
        </>
    )
}

export default Home