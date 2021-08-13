import React from 'react'
import './Content.css'
import {CardMedia,Typography} from '@material-ui/core'
import ConModal from './Modal'

const Content = ({items,isloading}) => {
  

  // }
    return (  
                
      <div className="main"> 
     
       { isloading ? <h1>Loading...</h1>:
         
           items.map(item=> (
            <ConModal item= {item}>
            {/* <Card  className="cards"> */}
               
              <CardMedia
                component="img"
                alt={item.name}
                // height="200"  
                height= "90%"
                // width= "70%"
                objectFit= "cover"             
                
                image= {item.img}
                title ={item.name}
              />
              <Typography gutterBottom variant="h5" component="h3">
              {item.name}
             </Typography>
             
            {/* </Card> */}
            </ConModal>
           ))
         

        }
       
       </div>
      
      
      // {/* {open && <Modal item={para} />} */}
      
        
    )
    
}

export default Content
