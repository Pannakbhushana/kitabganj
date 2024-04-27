import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import AboutMe from '../Pages/AboutMe';
import PageNotFound from '../Pages/PageNotFound';
import Poems from '../Pages/Poems';
import Blog from '../Pages/Blog';
import ChotiDukan from '../Pages/ChotiDukan';
import SingleProductPage from '../Pages/SingleProductPage';
import AdminPage from '../Pages/AdminPage';
// import BlogArticle from '../PageComponent/BlogArticle';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/chotidukan" element={<ChotiDukan/>} />
        <Route path="/poems" element={<Poems/>} />
        <Route path="/kitabganjadmin" element={<AdminPage/>} />
        <Route path="/details/:id" element={<SingleProductPage/>} />
        {/* <Route path="/blog/:id" element={<BlogArticle/>} /> */}
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default AllRoutes;
