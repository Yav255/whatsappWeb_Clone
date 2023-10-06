import React from 'react'
import {VscSmiley} from 'react-icons/vsc'
import './Conversation.css'
import {IoMdMic} from'react-icons/io'

function MesageComponent(){
  return(
 
      <div className='Chatdiv' isYours={false}>
          <div className='Message'> Hello from Vyass</div>
      </div>
    )
}


function Conversation() {
  return (
    <div className='convers'>

    <div className='ProfileHeader'>
      <img src='/profile/PHOTOVY.JPG' className='ProfileImg'/>
      <div className='ProfileDetails'>
         <span className="ProfileName">Vyass </span>
         <span className="Info">Online</span>
      </div>
    </div>
    
    <div className='ChatPage'>
      <MesageComponent isYours={false}/>
      <MesageComponent isYours={true}/>

    </div>
   

    <div className='SeachBox'>
    <div className='Search_Container'>
          <VscSmiley className='SearchIcon'/>
          <input type="text" placeholder="Type a Message"className='SearchChats'/>
          <IoMdMic className='SearchIcons'/>
        </div>
    </div>
</div>
  )
}

export default Conversation;