import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
const style = {
  // top: '90%',
  // left: '90%',
  // // transform: 'translate(-50%, -50%)',
  // width: '800%',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

export default function TransitionsModal({openModal,setOpenModal,modalId}) {
  const userData = useSelector((state)=>state.app.user)
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [values,setValues]=useState({})
useEffect(()=>{
let newData = userData.find((item)=>{
  if(item.id===modalId){
    return item
  }
})
values.name = newData?.name
values.email = newData?.email
values.age = newData?.age
values.female = newData?.gender==='female'?true:false
values.male = newData?.gender==='male'?true:false
setValues({...values})
},[userData,modalId])
  return (
    <div>
      <Dialog open={openModal} onClose={setOpenModal}>

      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
          
        }}
      > */}
          <Box sx={style} >
          <div style={{display:'flex',justifyContent:'center'}} >
        <form  >
        <Button color='error' variant='contained' onClick={()=>setOpenModal(false)} style={{width:'8%',marginLeft:'80%'}}>x</Button>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name'value={values.name}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='email' value={values.email}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='age' value={values.age}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" name='gender'checked={values.male} />
    <label class="form-check-label" for="exampleCheck1">Male</label>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" name='gender' checked={values.female}/>
    <label class="form-check-label" for="exampleCheck1">Female</label>
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>

</form>
    </div>
          </Box>
      </Dialog>
    </div>
  );
}