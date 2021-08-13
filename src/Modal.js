import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Card,CardMedia} from '@material-ui/core'
import './Modal.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width:"90%",
    height: "80%",
    backgroundColor:"#39445a",
    border:"1px solid #282c34",
    borderRadius:10,
    color:"white",    
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ConModal({children,item}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      <button type="button"  className="cards" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <div className="main1" >

            
              <div className="left">
             
              <Card className="card">
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
              
              </Card>
              </div>
              <div className="right">
              <h2 id="transition-modal-title">Name : {item.name}</h2>
               <h4>DOB  :  {item.birthday}</h4>
               <Card></Card>
               <h4>Occupation :                     
                   { item.occupation.map(it=> (
                       
                    //    <p className="para"> {it}</p>
                    it +" ,"
                    ))
                   }
                </h4>
               <h4>Status : {item.status}</h4>
               <h4>Nickname : {item.nickname}</h4>
               <h4>Actor : {item.portrayed}</h4>
               <h4> Seasons : 
                   {  item.appearance.map(it=> (
                       
                        it + " "
                    ))
                   } 
              </h4>
              </div>
           
            

            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}