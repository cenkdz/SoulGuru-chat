import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Message = ({message}) => {

    const {currentUser} = UserAuth()
  return (
    <div>
        <div className={`chat ${message.uid === currentUser.uid ? "chat-start" : "chat-start"}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={message.avatar} referrerPolicy="no-referrer"/>
    </div>
  </div>
  <div className="chat-header">
    {message.name}
  </div>
  <div className="chat-bubble">{message.text}</div>
</div>
    </div>
  )
}

export default Message