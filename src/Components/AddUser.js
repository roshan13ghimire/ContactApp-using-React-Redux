import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';





const AddUser = () => {
  const contacts = useSelector((state) => state);
  const dispatch  = useDispatch();


  const [user, setUser] = useState({
    name: "",
    number: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);

    setUser({ ...user, [name]: value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.length !== 0){
      for (let i = 0; i< contacts.length;i++)
     {
      const  objnum = contacts[i].number;
      const usernum = user.number;
      if  (parseInt(objnum) === parseInt(usernum)){

        return toast.error("This Number already Exists");
      } 
     }

    
    if (!user.name || !user.number) {
      return toast.warning("please fill all fields");
    }
    const  name = user.name;
    const number = user.number;


    const data = {
      id:contacts[contacts.length -1].id+1,
      name,
      number,
    
    };
    dispatch({type:"ADD_CONTACT" ,payload:data});
    toast.success("Successfully Added");
    }
    else{


     for (let i = 0; i< contacts.length;i++)
     {
      const  objnum = contacts[i].number;
      const usernum = user.number;
      if  (parseInt(objnum) === parseInt(usernum)){

        return toast.error("This Number already Exists");
      } 
     }

    
    if (!user.name || !user.number) {
      return toast.warning("please fill all fields");
    }
    const  name = user.name;
    const number = user.number;


    const data = {
      id:0,
      name,
      number,
    
    };
    dispatch({type:"ADD_CONTACT" ,payload:data});
    toast.success("Successfully Added");
    
  }
  user.name = "";
  user.number = "";


  }




  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className="flex formSpace">
          <label className="label">Name</label>
          <input className="input" type="text" name="name" value={user.name} onChange={handleInput} />
        </div>
        <div className="flex formSpace">
          <label className="label">Phone No</label>
          <input className="input" type="number" name="number" value={user.number} onChange={handleInput} />
        </div>
        <div className="flexButton">
          <button className="button" >Add</button>
        </div>

      </form>
    </>
  )
}

export default AddUser