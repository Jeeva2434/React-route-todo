import './App.css';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import Post from './Post';
import PageLayout from './PageLayout';
import { Routes,Route,Link,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

function App() {
  const navigate = useNavigate();
  const [posts,setposts] = useState([
    {
      id:1,
      title:'My First Post',
      datetime:'July 01,201 11:17:36 AM',
      body:'Made a video about the tesla Q1 results'
    },
    {
      id:2,
      title:'My 2nd post',
      datetime:'July 01,201 11:17:36 AM',
      body:'Made a video about the tesla Q1 results'
    },
    {
      id:3,
      title:'My 3rd post',
      datetime:'July 04,2012 11:17:36 AM',
      body:'Made a video about the tesla Q1 results'
    },
    {
      id:4,
      title:'My fourth post',
      datetime:'July 01,201 11:17:36 AM',
      body:'ETA perform BTC'
    }
  ]);
  const [search,setSearch] = useState('');
  const [searchResults,setSearchresults] = useState([]);
  const [postTitle,setPostTitle] = useState('');
  const [postBody,setPostBody] = useState('');

  useEffect(()=>{
    const filteredResults = posts.filter(post => 
       ((post.body).toLowerCase().includes(search.toLowerCase())) ||
       ((post.title).toLowerCase().includes(search.toLowerCase()))
      );
    setSearchresults(filteredResults.reverse());
  },[posts,search])

  const handleSubmit = (e)=>{
    console.log('sub');
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1].id+1 : 1;
    const datetime = format(new Date(),'MMMM dd,yyyy pp');
    const newPost = { id,
                      title:postTitle,
                      datetime,
                      body:postBody
                    };
    const allposts = [...posts,newPost];
    setposts(allposts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }

  return (
    <div className="App">
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/postpage">Post Page</Link></li>
      </ul> */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/postpage' element={<PageLayout/>}>
          <Route index element={<PostPage/>}/> 
          <Route path=':id/:user?' element={<Post/>} />
          <Route path='newpost' element={<NewPost/>}/>
        </Route>
        <Route path='*' element={<Missing/>}/>
      </Routes> */}
      <Header title="Social Media App"/>
      <Nav
        search={search} 
        setSearch={setSearch}
      />
      <Routes>
        <Route path='/' element={<Home posts={searchResults}/>}/>
        <Route path='/post'>
          <Route index element={<NewPost 
                handleSubmit={handleSubmit} 
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}/>}/>
          <Route path=':id' element={<PostPage post={posts}/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Missing/>}/>
      </Routes>
      {/* <Home posts={searchResults}/>
      <NewPost handleSubmit={handleSubmit} 
               postTitle={postTitle}
               setPostTitle={setPostTitle}
               postBody={postBody}
               setPostBody={setPostBody}         
      />
      <PostPage/>
      <Missing/>
      <About/> */}
      <Footer/>
    </div>
  );
}

export default App;
