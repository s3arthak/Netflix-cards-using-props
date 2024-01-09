import React from 'react'
 import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';
import Head from './Head';

ReactDOM.render(
  <>    

  <Head/>
  {
    

    Sdata.map((val)=>{
      return(
          <Card 
             key={val.id}
             imgsrc={val.imgsrc}
             category={val.category}
             sname={val.sname}
             link={val.link}
            
             
             />
          );
    })
  }
  </>,document.getElementById('root')
);




  
  








