import React from "react"
import { Route , Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import Project from "./Screens/Projects/Project"
import Work from "./Screens/Work/Work"
import NotFound from "./Screens/NotFound/NotFound"

const App = () => {
  return (
      <Routes>
       <Route path="/" index element={<Home />} />
       <Route path="/work" element={<Work />} />
       <Route path="/project" element={<Project />} />
       <Route path="*" element={<NotFound />} />

      </Routes>
  );
}

export default App;
