import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import Books from '../Pages/Books';
import AboutMe from '../Pages/AboutMe';
import Media from '../Pages/Media';
import PageNotFound from '../Pages/PageNotFound';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default AllRoutes;
