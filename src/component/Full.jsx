import React from 'react'
import Cards from './Cards'

function Full() {
    let data=[{
        title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
        description:"When you’re hiring a full-stack developer, what are the most important things you look for?"
        ,source:"https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/"
      },
    {
        title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        description:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
        source:"https://www.guvi.in/blog/full-stack-developer-vs-software-engineer/"
    },
    {
        title:"Horizontal vs Vertical Scaling for Efficient System Design",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
        description:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
        source:"https://www.guvi.in/blog/horizontal-vs-vertical-scaling/"
    }]
  return <div className="container">
       <div className="row">
       {data.map((e,i)=>{
        return <Cards data={e} key={i}/>
       })} 
       </div>
  </div> 
}

export default Full