import React from 'react'
import './ContactList.css';
import { BsThreeDotsVertical } from "react-icons/bs"
import { BsPersonPlusFill } from 'react-icons/bs'
import { RxAvatar } from 'react-icons/rx'
import { MdMessage } from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'

function ContactInfo(){
  return(
    <div className='Contact_Item'>
      <img src='/profile/PHOTOVY.jpg' alt='pf' className='Profile'/>
      <div className='Contact_Info'>
        <span className='ContactName'>Vyass</span>
        <span className='MessageText'>Hi</span>
      </div>
      <span className='MessageText'>5.25 P.M</span>
    </div>
  )
}

function SearchComponent(){
  return(
    <div className='Search_Box'>
        <div className='Search_Container'>
          <AiOutlineSearch  className='Search_Icon'/>
          <input placeholder=' Search or start new chat' className='Search_chats'/>
        </div>
      </div>
  )
}


function ContactList() {
  return (
    <div className='contacts'>

      <div className='top-Icons'>
        <img src='/profile/PHOTOVY.jpg' alt='Profile' className='ProfileIo'/>
        <RxAvatar className='flex1' />
        <MdMessage className='flex1' />
        <BsPersonPlusFill className='flex1' />
        <BsThreeDotsVertical className='flex1' />
      </div>

      <SearchComponent/>

      <ContactInfo/>
      <ContactInfo/>
      <ContactInfo/>
      <ContactInfo/>
      <ContactInfo/>
      <ContactInfo/>
    
    </div>

  )
}

export default ContactList;