import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import NewPost from './pages/new-post/NewPost.jsx'
import BlogIndex from './pages/blog-index/BlogIndex.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import Navigation from "./components/navigation/Navigation.jsx"
import BlogPost from './pages/blog-post/BlogPost.jsx'

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/index" element={<BlogIndex/>} />
                <Route path="/new-post" element={<NewPost/>} />
                <Route path="/not-found" element={<NotFound/>} />
                <Route path="/posts/:id" element={<BlogPost/>} />
            </Routes>
        </>
    )
}



export default App
