import React from 'react'
import Cards from './Cards'
function All() {
    let data=[{
        title:"Scalable Vector Graphics (SVG) for Responsive UI Design",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Scalable-Vector-Graphics-SVG-for-Responsive-UI-Design.webp",
        description:"Scalable Vector Graphics (SVG) has revolutionized the world of graphics and web design.",
        source:"https://www.guvi.in/blog/guide-to-scalable-vector-graphics/"
        
      },
    {
        title:"Top 7 Ways To Use AI in UX Design",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Ways-To-Use-AI-in-UX-Design.webp",
        description:"Artificial Intelligence (AI) has revolutionized various industries, and the field of User Experience (UX) design is no exception.",
        source:"https://www.guvi.in/blog/ways-to-use-ai-in-ux-design/" 
    },
    {
        title:"Top 7 Websites to Learn UI/UX Design [2024]",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/top_7_websites_to_learn_ui_ux_design.webp",
        description:'With the rising expectations of modern users, businesses are competing to offer exceptional user experiences for their users. As the digital landscape continues to evolve,',
        source:"https://www.guvi.in/blog/best-websites-to-learn-ui-ux/"
    }]
  return <div className="container">
       <div className="row">
       {data.map((e,i)=>{
        return <Cards data={e} key={i}/>
       })} 
       </div>
       
  </div>
  
}

export default All