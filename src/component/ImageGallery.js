import React,{ useEffect, useState } from 'react'
import './css/ImageGallery.css'
import firebase from 'firebase'
//import {storage}  from '../firebase'

export const ImageGallery = () => {


const [ data, setData ] = useState([])

 
   const db = firebase.firestore();
   db.collection('elon').get()
   .then(response => {
    setData(response.docs)
   })
   .catch(error => {
   console.log(error);
   });


const image = data.map(document => {
  return(
    //<img src={document.data().image} alt=''/>
    
    <div className='card'>
    <img src={document.data().image} alt=''/>
    <p>{document.data().legende}</p>
    </div>
  
)})
 
return(
  <div className='containerGallery'>
    {image}
    </div>  
    );
}


