import React from 'react'
import './Nav.css'
import {useEffect,useState} from 'react'


function Nav() {
    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200){
                setShow(200)
            }else{
                setShow(false)
            }
        })
    },[])
  return (
    <div className={`nav ${show && "black_nav"}`}>
        <img className='logo' 
        src='https://i.postimg.cc/CKVzvJn4/netflix-official-logo-icon-168085.png'
        alt='netflix logo'/>
        </div>
    
  )
}

export default Nav