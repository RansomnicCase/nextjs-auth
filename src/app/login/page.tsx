"use client";
import Link from 'next/link'
import React from "react";

import { useRouter } from "next/navigation";
import {Axios} from "axios";

export default function LoginPage(){
    const[user, setUser] = React.useState({
        email:"",
        password:"",
    })
    const onLogin = async () =>{
        
    }
    const handleLogin =  () => {
        alert('Logged in successfully');
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Login</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="email" 
            type="text" 
            value={user.email}
            onChange={(e)=>setUser({...user, email:e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="password" 
            type="password" 
            value={user.password}
            onChange={(e)=>setUser({...user, password:e.target.value})}
            placeholder="password"
            />
            <button onClick={handleLogin}
            className="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </button>
            <hr />
            <Link href="/signup">Signup page</Link>
            
            
        </div>
    )
}