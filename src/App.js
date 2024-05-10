import React from "react"
import { Route , Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import Project from "./Screens/Projects/Project"
import Work from "./Screens/Work/Work"
import NotFound from "./Screens/NotFound/NotFound"
import Article from "./Screens/Articles/Article"
import Contact from "./Screens/Contact/Contact"

const App = () => {
  return (
      <Routes>
       <Route path="/" index element={<Home />} />
       <Route path="/work" element={<Work />} />
       <Route path="/project" element={<Project />} />
       <Route path="/articles" element={<Article />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
