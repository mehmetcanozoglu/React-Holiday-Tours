import React,{useState} from 'react'
import './tour.css'

export default function Tour({id, image, info, name, price, removeTour}) {
    
    let [readmore, setreadmore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>{price}</h4>
        </div>
        <p className='info'>{readmore ? `${info.substring(0, 200)}...` : ""}</p>
        <button onClick={() => setreadmore(!readmore)}>
        {readmore ? "shoe less" : "read more"}
        </button>
        <button className='delete-btn' onClick={() => removeTour(id)}>
            Not interested
        </button>
      </footer>
    </article>
  )
}
