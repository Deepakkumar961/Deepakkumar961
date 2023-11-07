import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../Feature/userDetails';
import { useNavigate } from 'react-router-dom';
import useCustomValidation from './useCustomValidation';
function CreateForm() {
  const {values,setValues,handleChange,errorHander,errorName,setErorrName } = useCustomValidation()
  const [user,setUser]=useState({})

 

  const navigate = useNavigate()
  const dispatch = useDispatch()
const handleSubmit=(e)=>{
e.preventDefault()
  if(Object.values(errorName).length===0){
  errorHander()
  }
  else{
    dispatch(createUser(user))
    navigate('/userlist')
  }
 
}


  return (
    <div style={{display:'flex',justifyContent:'center'}} >
        <form  >
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={values.name} onChange={handleChange}/>
    <div id="validationServerUsernameFeedback" style={{color:'red',fontSize:'small'}}>

    {errorName?.name}
    </div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='email' value={values.email} onChange={handleChange}/>
    <div id="validationServerUsernameFeedback" style={{color:'red',fontSize:'small'}}>
      {errorName?.email}
      </div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Age</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='age'value={values.age} onChange={handleChange}/>
    <div id="validationServerUsernameFeedback" style={{color:'red',fontSize:'small'}}>

    {errorName?.age}
</div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" name='gender'  onChange={handleChange}value='male' />
    <label className="form-check-label" for="exampleCheck1">Male</label>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" name='gender' value='female'  onChange={handleChange}/>
    <label className="form-check-label" for="exampleCheck1">Female</label>
    <div id="validationServerUsernameFeedback" style={{color:'red',fontSize:'small'}}>

{errorName?.gender}
</div>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default CreateForm