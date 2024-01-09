
import React from 'react'

function Card(props){  
  return (
   <>
    <div className='cards'>
  <div className='card'>
    <img src={props.imgsrc} alt="mypic" className="card_img" />  
    <div className='card_info'>
      <span className='card_category'>{props.category}</span>
      <h3 className='card_title'>{props.sname}</h3>
      <a href={props.link} target='blnk'>
      <button className='btn'>Watch Now</button>
      </a>
    
      
    </div>
  </div>

</div>
   
   
   </>
  )
}

export default Card;


 



{/* <p id='showdata'></p>
const arr=[
{       id:1,
        name:'sarthak'  },
        {       id:2,
          name:'sarth'  },
          {       id:1,
            name:'sart'  },
            {       id:1,
              name:'sar'  }
]
   const newarr=arr.map((val)=>{
    return (
      val.id,
      val.name)
   });

console.log(newarr);

document.getElementById(showdata).innerHTML=newarr;


 */}
 
  // {(hello==='Hello')?'Hii':'heee'} ternary opeartor

  ///////////////////////////



   





