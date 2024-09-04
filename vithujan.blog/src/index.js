import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Style/index.css';
import Home from './pages/Home/Home.jsx';
import Navbar from './Component/Navbar';
import Newsletter from './Component/Newsletter';
import Footer from './Component/Footer';
import LatestArticle from './pages/Articles/LatestArticle.jsx';
import ArticlePage from './pages/Article-Page-Template/ArticlePage.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import Contact from './pages/Contact-Unsub/Contact.jsx';
import CGV from './pages/CGV-Mention-Donnne/CGV.jsx';
import MentionLegales from './pages/CGV-Mention-Donnne/Mention.jsx';
import DataProcessRecord from './pages/CGV-Mention-Donnne/DataProcess.jsx';
import UnsubNewsletter from './pages/Contact-Unsub/UnsubNewsletter.jsx';
import UtilisationCookie from './Component/UtilisationCookie.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar pageName={window.location.pathname}/>
      <UtilisationCookie/>
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/Latest-Article" element ={<LatestArticle />}/>
        <Route path="/Blog_Post/:id" element ={ <ArticlePage />}/>
        <Route path='/About-Me' element = { <AboutMe />}/>
        <Route path='/Contact' element = { <Contact />}/>
        <Route path='/CGV' element = { <CGV />}/>
        <Route path='/Legal-Mention' element = { <MentionLegales />}/>
        <Route path='Data-Processing-Record' element={ <DataProcessRecord />}/>
        <Route path='Unsubscribe-Newsletter' element={ <UnsubNewsletter />}/>
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  </React.StrictMode>
);

