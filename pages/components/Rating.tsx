import React from 'react'


interface Ra {
    rating:number
}
const Rating: React.FC<Ra> = ({rating}) => {
    const val = []
    if(rating===5){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
    }
    else if(rating>4){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star-half-stroke text-yellow-400"></i>)
    }
    else if(rating===4){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
    else if(rating>3){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star-half-stroke text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
    else if(rating===3){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
    else if(rating>2){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star-half-stroke text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
    else if( rating===2){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
    else if(rating>1){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star-half-stroke text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
    else if(rating === 1){
        val.push(<i className="fa-solid fa-star text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
    else if(rating > 0){
        val.push(<i className="fa-regular fa-star-half-stroke text-yellow-400"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
    else{
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
        val.push(<i className="fa-regular fa-star text-gray-200"></i>)
    }
  return (
    <div>
        {val.map(data=> data)}
    </div>
  )
}

export default Rating