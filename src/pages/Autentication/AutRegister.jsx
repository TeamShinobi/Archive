import React, { useState } from "react";
import axios from "axios";

const AutLogin = () => {

    const [data,Setdata] = useState({
        'username' : '',
        'email' : '',
        'password' : '',

    });


    return(

        <div className="w-full h-[100vh]">
          

        <div className="h-full w-full grid md:grid-cols-3">
        <h1 className=" text-white hidden absolute md:flex font-bold font-mono text-[60px] lg:text-[40px] pl-4">ARC<span className="text-[#900ef1]">HIVE</span></h1>
            <div className= "w-full col-span-2 flex justify-center">
                
                <div className=" p-10   flex justify-center flex-col ">
                    <div className="hover:scale-105 duration-300">
                    <h1 className="text-white text-[50px] font-semibold ">Your best file compiler</h1>
                    <h1 className="text-white text-[50px] font-semibold ">at your service!</h1>
                    </div>
                </div>
            </div>
           <div className="bg-white w-full md:relative absolute mx-auto inset-y-0 right-0 flex flex-col justify-center">
            
                
                <h1 className= "block md:hidden font-bold mx-auto font-mono text-[60px] lg:text-[70px] mt-[140px] mb-[30px]">ARC<span className="text-[#900ef1]">HIVE</span></h1>
                
                   <div className="py-5 w-full mb-[40px]">
                     <h2 className= " font-semibold font-mono text-[25px] md:text-[27px] text-center">BECOME ARCHIVERS!</h2>
                     <h2 className= "font-semibold font-mono text-[25px] md:text-[27px] text-center">REGISTER HERE</h2>
                   </div>
                <input 
                className="h-9 p-4 mx-auto border border-2 rounded-md w-[70%]"
                type={"text"}
                onChange = {(event) =>{
                    let d = data
                    Setdata({...d,username:event.target.value})
                
                }}
                placeholder="Enter Username:" />
                <input 
                className="h-9 p-4 mx-auto border border-2 rounded-md w-[70%] mt-5"
                type={"text"}
                onChange = {(event) =>{
                    
                    let d = data
                    Setdata({...d,email:event.target.value})
                
                }}
                placeholder="Enter Email:" />
                <input 
                className="h-9 p-4 mx-auto border border-2 rounded-md w-[70%] mt-5"
                type={"password"}
                onChange = {(event) =>{
                    
                    let d = data
                    Setdata({...d,password:event.target.value})
                
                }}
                placeholder="Enter Password:" />

                <button className="mx-auto bg-black text-white w-[50%] mt-10 p-3 rounded-lg hover:scale-105 duration-300"
                onClick= {()=>{
                    axios.post('http://localhost:8000/api/v1/accounts/users/', data)
                    .then(response => {
                        console.log(response.data)
                    }).catch(error => {
                        console.log(error.response.data)
                    })
                    
                }}
                
                >REGISTER</button>

                <p className="mx-auto py-12 mt-10">Don't have an account yet? <span className="text-[#2489db]"><button>click here!</button></span></p>
           </div>
        </div>
        </div>
    )
}

export default AutLogin;