import axios from 'axios'
import {  toast } from 'react-toastify';
import { addData, getdata } from './actionCreatore'

const URL = "http://localhost:8000";

// post data api 
export const postData = (data)=>{
    return  dispatch =>{
        axios.post(`${URL}/add`,data).then((res)=>{
            dispatch(addData(res.data.newUser))
            toast.success(res.data.message)
        }).catch((err)=>{
            console.log(err);
            toast.error(err)
        })
    }
}


// get data api
export const getusers = ()=>{
    return dispatch =>{
        axios.get(`${URL}/get`).then((res)=>{   
            dispatch(getdata(res.data))
        }).catch((err)=>{
            console.log(err);
            toast.error(err)
        })
    }
}


// delete api

export const deleteUser = (id)=>{
    return dispatch =>{
        axios.delete(`${URL}/delete/${id}`).then((res)=>{
            toast.success(res.data.message)
            dispatch(getdata(res.data.users))
        }).catch((err)=>{
            console.log(err);
            toast.error(err)
        })
    }
}

// edit api 

export const updateData = (id,data)=>{
    return dispatch =>{
        axios.put(`${URL}/update/${id}`,data).then((res)=>{
            dispatch(getdata(res.data.editUser))
            toast.success(res.data.message)
        }).catch((err)=>{
            console.log(err);
            toast.error(err)
        })
    }
}