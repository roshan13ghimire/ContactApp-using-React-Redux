import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import AddUser from './AddUser';

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Deleted Successfully");
  }
  return (
    <>
      <div className='flexDiv'>
        <div className='textDiv'>
          <AddUser />
          <div className="allContacts">
            <table className="table">
              <tbody>
                <tr>
                  <th>NAME</th>
                  <th>PHONE NUMBER</th>
                  <th>ACTION</th>
                </tr>
                {
                  contacts.map((contact, id) => (

                    <tr>
                      <td>{contact.name}</td>
                      <td>{contact.number}</td>
                      <td><Link to={`/edituser/${contact.id}`} ><i className="fa-solid fs-20 fa-pen-to-square"></i> </Link>
                        <button className="delButton fs-20" onClick={() => deleteContact(contact.id)}>
                        <i className="fas fa-trash-alt"></i>
                        </button></td>
                    </tr>


                  )
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home