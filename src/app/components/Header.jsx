'use client'
import Nav from "./Nav"
import HambugerComp from "./Hamburger"
import { useEffect, useState } from "react"

export default function Header(){
    const [small, setSmall] = useState(null)

  useEffect(()=>{
    const handleResize = ()=>{
                if (window.innerWidth < 928) {
                  setSmall(true)
                } else {
                  setSmall(false);
                }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  },[])

    return(
        <>
            <div id="logo" >
                <h2>LUGAR</h2>
            </div>
            {!small ? (
                <Nav/>
                ) : (
                    <HambugerComp/>
                    )}
        </>
    )
}