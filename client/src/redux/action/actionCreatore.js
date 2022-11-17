export const addData =()=>{
    return{
        type:"ADDDATA"
    }
}

export const getdata = (data)=>{
    return{
        type:"GETDATA",
        payload:data
    }
}