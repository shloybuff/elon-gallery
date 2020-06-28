import React from 'react';
import { ImageGallery } from './component/ImageGallery'
import { Upload } from './component/Upload'
import { Nav } from './component/Nav'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Nav />
        <Route exact path='/'>
            <ImageGallery />
        </Route>
        <Route path='/upload'>
            <Upload />
        </Route>
      </div>
  );
}

export default App;
