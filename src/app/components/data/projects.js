import villa1 from "../../../../public/villa1.png"
import villa2 from "../../../../public/villa2.png"
import villa3 from "../../../../public/villa3.png"
import villa4 from "../../../../public/villa4.png"
import review from "../../../../public/review.png"

const projects = [{
    id:1,
    src: villa1, 
    name: "Vintage Villa",
    location:"2715 Ash Dr. San Jose, Dubai"
},{
    id:2,
    src: villa2, 
    name: "Tonga Villa",
    location:"1901 Thornridge Cir. Shiloh 81063"
},{
    id:3,
    src: villa3, 
    name: "Penthouse",
    location:"2464 Royal Ln. Mesa, 45463"
},{
    id:4,
    src: villa4, 
    name: "Smart city project",
    location:"2715 Ash Dr. San Jose, Dubai"
}
]

const comments= [
    {
        id:1,
        src: review,
        header: "Dream house isn’t dream anymore",
        comment: "Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.",
        name: "Brooklyn Simmons",
        tag: "Artist"
    },
    {
        id:2,
        src: review,
        header: "Dream house isn’t dream anymore",
        comment: "Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.",
        name: "Brooklyn Simmons",
        tag: "Artist"
    },
    {
        id:3,
        src: review,
        header: "Dream house isn’t dream anymore",
        comment: "Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.",
        name: "Brooklyn Simmons",
        tag: "Artist"
    }
]



const data = {
    comments,
    projects
}


export default data