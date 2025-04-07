'use client'
import Nav from "./Nav"
import HambugerComp from "./Hamburger"
import { useEffect, useState } from "react"

export default function Header({home, portfolio, reviews, contactus, aboutus }){
  const [small, setSmall] = useState(window.innerWidth)

  const handleResize = () => {
    setSmall(window.innerWidth)
  }
  useEffect(()=>{

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

    return(
        <>
            <div id="logo" className="text-[18px] font-semibold" >
                <h2>LUGAR</h2>
            </div>
        {small > 928 ? (
                <Nav
                home = {home}
                reviews={reviews}
                portfolio={portfolio}
                contactus={contactus}
                aboutus={aboutus}
                />
                ) : (
                    <HambugerComp
                home = {home}
                reviews={reviews}
                portfolio={portfolio}
                contactus={contactus}
                aboutus={aboutus}
                    />
                    )}
        </>
    )
}