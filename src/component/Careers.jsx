import React from 'react'
import Cards from './Cards'
function Careers() {
    let data=[{
        title:"Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
        description:'In today’s tech-driven world, the demand for project managers is higher than before. The workload',
        source:"https://www.guvi.in/blog/machine-learning-engineer-resume-tips/"
        
      },
    {
        title:"Top 5 IT Jobs for Economics Students",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
        description:'The current technological era is full of competition and those who have profound skillset are',
        source:"https://www.guvi.in/blog/top-it-jobs-for-economics-students/"
    },
    {
        title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
        description:'With the rapid advancement of technology, the demand for IT professionals has soared in recent',
        source:"https://www.guvi.in/blog/top-it-jobs-for-commerce-students/"
    }]
  return <div className="container">
       <div className="row">
       {data.map((e,i)=>{
        return <Cards data={e} key={i}/>
       })} 
       </div>
  </div> 
}

export default Careers