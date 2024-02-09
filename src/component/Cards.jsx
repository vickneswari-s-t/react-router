import React from 'react'

function Cards({data}) {
  return <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <img src={data.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3>{data.title}</h3>
    <p className="card-text">{data.description}</p>
    <a href={data.source} className="Read" target='_blank'>Read more...</a>
  </div>
</div>
  </div>
  
}

export default Cards