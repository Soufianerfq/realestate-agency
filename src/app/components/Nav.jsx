export default function Nav({home, portfolio, reviews, contactus, aboutus }){
    return(
            <nav className=" w-[40%] text-[#1E3240] flex justify-around space-x-1 font-normal text-[14px] ">
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
    )
}