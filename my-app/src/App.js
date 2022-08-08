import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heeadline from './components/Headline/Heeadline';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Heeadline></Heeadline> */}
        <Post></Post>
      </header>
    </div>
  );
}

export default App;
