import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import "./Navbar.css";



function Navbar() {
 
   
 
 


  

   
  
  return (
    <>
     <div className='navbar'>
      <NavLink to={"/"} className="leftDivLink">
         <div className='leftDiv'>
            <div className='logo bg-[#0f172a]'>
           <img src="/logo4.png" alt="" /></div> 
            <h3 className='text-muted'>MK Hope Hospital <p>IPD Management System</p> </h3>
                         
        </div>
      </NavLink>
       
         <div className='rightDiv'>
          
          <div> <NavLink
             to="/"
           className={   ({isActive }) =>`navlink ${ isActive ? "selected" : ""}`}
            ><i className="fa-solid fa-user-plus mr-2"></i> <span className='text-gray-500'>Admit Patient</span> </NavLink></div>
           
                
                <div>
                   <NavLink
             to="/manage"
           className={   ({isActive }) =>`navlink ${ isActive ? "selected" : ""}`}
            > <i class="fa-solid fa-users mr-2"></i> <span className='text-gray-500'> Manage Patient</span> </NavLink>
                </div>
                
                

                 <div>
                   <NavLink
             to="/records"
           className={   ({isActive }) =>`navlink ${ isActive ? "selected" : ""}`}
            > <i class="fa-solid fa-book mr-2"></i> <span className='text-gray-500'>View Records</span></NavLink>
                 </div>
                
                
         </div>


        

     </div>
     
      

     </>
  )
}

export default Navbar