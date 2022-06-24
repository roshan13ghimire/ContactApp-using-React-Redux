import React, { useState ,useEffect} from 'react'
import {useParams} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";



const EditUser = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state);

  const currentContact = contacts.find(contact => contact.id === parseInt(id));
    
    

    const [user, setUser] = useState({
        name: "",
        number: "",
    });
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    useEffect(() =>{
        setUser(currentContact);
    },[currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();
        const  name = user.name;
        const number = user.number;
    
        const data = {
          id:parseInt(id),
          name,
          number,
        
        };
        dispatch({type:"UPDATE_CONTACT" ,payload:data});
        toast.success("Updated Successfully");
        navigate("/")
      }
    return (
        <>
            <form className='form' onSubmit={handleSubmit} >
                <div className="flex formSpace">
                    <label className="label">Name</label>
                    <input className="input" type="text" name="name" value={user.name} onChange={handleInput} />
                </div>
                <div className="flex formSpace">
                    <label className="label">Phone No</label>
                    <input className="input" type="number" name="number" value={user.number} onChange={handleInput} />
                </div>
                <div className="flexButton">
                    <button className="button">Update</button>
                </div>

            </form>
            {id}
        </>
    )
}

export default EditUser