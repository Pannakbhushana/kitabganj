import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import AboutMe from '../Pages/AboutMe';
import PageNotFound from '../Pages/PageNotFound';
import Poems from '../Pages/Poems';
import Blog from '../Pages/Blog';
import ChotiDukan from '../Pages/ChotiDukan';
import AdminPage from '../Pages/AdminPage';
import Login from '../AdminComponent/Login';
import AdminAboutPage from '../AdminComponent/AdminAboutPage';
import AdminCarousel from '../AdminComponent/AdminCarousel';
import AdminPoem from '../AdminComponent/AdminPoem';
import AdminBlog from '../AdminComponent/AdminBlog';
import AdminCotiDukan from '../AdminComponent/AdminChotiDukan';
import SinglePoemPage from '../SinglePage/SinglePoemPage';
import SingleBlogPage from '../SinglePage/SingleBlogPage';
import SingleDukanPage from '../SinglePage/SingleDukanPage';
import PrivateRoute from './PrivateRoute';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/chotidukan" element={<ChotiDukan/>} />
        <Route path="/poems" element={<Poems/>} />
        <Route path="/kitabganjadmin" element={<PrivateRoute><AdminPage/></PrivateRoute>} />
        <Route path="/adminlogin" element={<Login/>} />
        <Route path="/adminaboutme" element={<PrivateRoute><AdminAboutPage/></PrivateRoute>} />
        <Route path="/admincarousel" element={<PrivateRoute><AdminCarousel/></PrivateRoute>} />
        <Route path="/adminpoem" element={<PrivateRoute><AdminPoem/></PrivateRoute>} />
        <Route path="/adminblog" element={<PrivateRoute><AdminBlog/></PrivateRoute>} />
        <Route path="/admindukan" element={<PrivateRoute><AdminCotiDukan/></PrivateRoute>} />
        <Route path="/poemdetails/:id" element={<SinglePoemPage/>} />
        <Route path="/blogdetails/:id" element={<SingleBlogPage/>} />
        <Route path="/dukandetails/:id" element={<SingleDukanPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default AllRoutes;
