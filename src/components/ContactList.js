import React from 'react'
import { Card } from './card/Card';

export const ContactList = ({contact}) => {
  return (
    <div className="row">
     
        {!contact.length ? (
          <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>
        ): contact.map((usr,i)=><Card key={i} user={usr}/>)}
      
       
      </div>
  )
}
