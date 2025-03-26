export default function Nav({home, portfolio, reviews, contactus, aboutus }){
    return(
            <nav className=" w-[40%] text-[#1E3240] flex justify-around space-x-1 font-normal text-[14px] 3xl:text-[30px] 3xl:space-x-3 3xl:w-[50%] ">
            <button
              onClick={() =>{
                home.current?.scrollIntoView({
                  behavior: "smooth",
                  block: 'start'
                })
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
              }
              }
            >
              CONTACT US
            </button>
            </nav>
    )
}