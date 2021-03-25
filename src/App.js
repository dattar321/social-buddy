import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import PostDetail from './components/PostDetail/PostDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Header></Header>
        <Post></Post>  
        </Route>
        <Route path="/postdetail/:id">
          <Header></Header>
          <PostDetail></PostDetail>
        </Route>
        <Route path="/">
        <Header></Header>
        <Post></Post>  
        </Route>
        <Route path="*">
          <p>Not found</p>  
        </Route>
      </Switch>
    </Router>
    

  );
}

export default App;
