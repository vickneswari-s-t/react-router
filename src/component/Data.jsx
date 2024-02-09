import React from 'react'
import Cards from './Cards'

function Data() {
    let data=[{
        title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        description:'Are you someone who’s not interested in coding, but wants to get placed in tech',
        source:"https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/"
        
      },
    {
        title:"Impact of Certification Programs on Hiring Data Scientists",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
        description:'Data scientists are the creators behind transforming the raw data into edible data insights',
        source:"https://www.guvi.in/blog/certification-impact-on-hiring-data-scientists/" 
    },
    {
        title:"Top Product-Based Companies for Data Science Freshers",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
        description:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing"
        ,source:"https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/" 
    }]
  return <div className="container">
       <div className="row">
       {data.map((e,i)=>{
        return <Cards data={e} key={i}/>
       })} 
       </div>
  </div> 
}

export default Data