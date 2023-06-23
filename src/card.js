import React from 'react'
const Card=(props)=>{
    // console.log(props)
    return(
    <div className="App">
       <div className='cards'>
      <div className='card'>
        <img src={props.img_src} alt="myPic" className='card_img'/>
        <div className='card_info'>
          <span className='card_category'>{props.s_name}</span>
            <h3 className='card_title'> {props.title}</h3>
            <a href={props.link} target='_blank'>
              <button>Watch now</button>
            </a>
        </div>
      </div>
    </div>
  
    {/* <input type='text' value={'abc'}/> */}
    </div>
    )
  }
export default Card