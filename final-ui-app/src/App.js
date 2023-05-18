import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ParentLayout from './pages/ParentLayout'
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostBlogPage from './pages/PostBlogPage'
import ArticelDetailsPage from './pages/ArticleDetailsPage'
import { createContext,useState } from 'react'
import './App.css';



export const articleDetailContext=createContext()
export const likesContext=createContext()

function App() {

const [articleDetails,setArticleDetails]=useState()
const [likesArr,setLikesArr]=useState()

  return (
   <>
   <likesContext.Provider value={[likesArr,setLikesArr]}>
   <articleDetailContext.Provider value={[articleDetails,setArticleDetails]}>
    <BrowserRouter>
   <Routes>
   <Route path='/' element={<ParentLayout/>}>
    <Route path='/' element={<HomePage/>}/>
    <Route path="postblog" element={<PostBlogPage/>}/>
    <Route path='details' element={<ArticelDetailsPage/>}/>
   </Route>
    

  
   
   </Routes>
   </BrowserRouter>
   </articleDetailContext.Provider>
   </likesContext.Provider>
   </>
  );
}

export default App;
