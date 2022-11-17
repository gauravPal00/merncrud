import axios from 'axios'
import { addData, getdata } from './actionCreatore'

const URL = "http://localhost:8000";

// post data api 
export const postData = (data)=>{
    return  dispatch =>{
        axios.post(`${URL}/add`,data).then((res)=>{
           
            dispatch(addData(res.data))
        }).catch((err)=>{
            console.log(err);
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
        })
    }
}


// delete api

export const deleteUser = (id)=>{
    console.log(id);
    return dispatch =>{
        axios.delete(`${URL}/delete/${id}`).then((res)=>{
            dispatch(getdata(res.data))
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
}

// edit api 

export const updateData = (id,data)=>{
    return dispatch =>{
        axios.put(`${URL}/update/${id}`,data).then((res)=>{
            dispatch(getdata(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}