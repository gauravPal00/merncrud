import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getusers } from '../../redux/action'
import { TableData } from './TableData'
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';

export const AllUser = () => {

  const dispatch = useDispatch()
  const {list} = useSelector((state)=>state.MainReducer)
  useEffect(()=>{
    dispatch(getusers())
  },[dispatch])
  return (
      <Container>

{
      list.length > 0 ?
     <Table className='mt-2' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>State</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
   { list.map((item,index)=>{
        return(
          <TableData key={index} item={item}/>
        )
      }) }
     </tbody>
      </Table>
       :  
       <p>No User</p>
     }
      </Container>
    
  )
}
