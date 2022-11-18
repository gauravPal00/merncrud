import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { deleteUser } from '../../redux/action';


export const TableData = ({ item }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const editHandler = (data)=>{
        navigate('/',{state:data})
    }
    return (
        <>
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.number}</td>
            <td>{item.state}</td>
            <td>{item.city}</td>
            <td> <Button onClick={()=>{editHandler(item)}}><AiFillEdit /></Button> </td>
            <td> <Button onClick={() => {dispatch(deleteUser(item._id)) }}> <AiFillDelete /> </Button></td>
            </tr>
        </>

    )
}
