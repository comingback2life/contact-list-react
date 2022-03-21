import React from 'react'
import { Card } from './card/Card';
import { Spinner } from './Spinner';

export const ContactList = ({contact}) => {
  return (
    <div className="row">
     
        {!contact.length ? (
         'No User Found'
        ): contact.map((usr,i)=><Card key={i} user={usr}/>)}
      
       
      </div>
  )
}
