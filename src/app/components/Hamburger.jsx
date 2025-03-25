"use client"
import { useState, useEffect, useRef } from "react"
import Hamburger from "hamburger-react";

export default function HamburgerComp({home, portfolio, reviews, contactus, aboutus }) {
  const navRef = useRef();
  const linkRef = useRef()
  const [isOpen, setOpen] = useState(false);

  useEffect(()=>{
    if(!navRef.current) return;
    if(isOpen){
        navRef.current.style.height = "100vh";
        navRef.current.style.border = "6px solid white";
        linkRef.current.style.display = "flex";
    } else if(!isOpen){
        navRef.current.style.height = "0";
        navRef.current.style.border = "0";
        linkRef.current.style.display = "none";
    }
  },[isOpen]) 
  return (
    <nav>       
          {/* <div className="flex items-center justify-end">
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div> */}
        <div ref={navRef} className="fixed transition-all  top-0 left-0 w-screen  text-[#1E3240] bg-[#AFD4E2] font-normal p-[3px]">
            <div className="flex items-center justify-end ">
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div>
          <nav ref={linkRef} className="flex flex-col items-center space-y-[50px]">
            <button
              onClick={() =>{
                home.current?.scrollIntoView({
                  behavior: "smooth",
                  block: 'start'
                })
                setOpen(false)
              }
              }
            >
              HOME
            </button>
            <button
              onClick={() =>{
                aboutus.current?.scrollIntoView({
                  behavior: "smooth",
                })
                setOpen(false)
              }
              }
            >
              ABOUT US
            </button>
            <button
              onClick={() =>{
                portfolio.current?.scrollIntoView({
                  behavior: "smooth",
                })
                setOpen(false)
              }
              }
            >
              PROJECTS
            </button>
            <button
              onClick={() =>{
                reviews.current?.scrollIntoView({
                  behavior: "smooth",
                })
                setOpen(false);
              }
              }
            >
              REVIEWS
            </button>
            <button
              onClick={() =>{
                contactus.current?.scrollIntoView({
                  behavior: "smooth",
                })
                setOpen(false);
              }
              }
            >
              CONTACT US
            </button>
          </nav>
        </div>
    </nav>
  );
}