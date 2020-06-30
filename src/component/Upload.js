import React,{useState} from 'react'
import { storage } from '../firebase'
import './css/Upload.css'
import firebase from "firebase";

export const Upload = () => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [legende, setLegende] = useState("");
    const [progress, setProgress] = useState(0);

  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };

    const handleLegende = e => {
          setLegende(e.target.value);
        
      };

    const addPic = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection('elon').add({
          image: url,
          legende: legende,
          date : new Date()
        });  
        setUrl('')
        setLegende('')
      };  
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      );
    };
  
    console.log("image: ", image);
  
    return (
      <div className='container'>
        <div className='containerInput' style={{margin:50,padding:50}}>  
        <h3 style={{fontFamily:'Balsamiq Sans, cursive', fontSize:30}}>Upload Elon's images</h3><br />
        <div className='fileTitle'>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        </div>
        
        <input type='text' id='legende' placeholder="Enter a legend's images" value={legende} onChange={handleLegende}/>
        <button id='legendeSubmit' onClick={addPic}>Valider</button>
        </div>
        <div className='containerPlacholder'>
        <progress value={progress} max="100" />
        <br />
        <br />
        <br />
        <img alt='' id='img' src={url || "https://ngaitahu.iwi.nz/wp-content/uploads/2013/06/portrait-placeholder-female.jpg"}/>
        </div>
      </div>
     )
}