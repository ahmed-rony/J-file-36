import './App.css';
import News from './components/News/News';
import {Button} from '@mui/material';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Chart from './components/Chart/Chart';


function App() {
  const [articles, setArticles] = useState([]);
  useEffect( () => {
      const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-03-25&sortBy=publishedAt&apiKey=29e7c18d81f54e7e8279fa8645e45f7d';
      fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])
  // ==================================================;
  // useEffect( () => {
  //   const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-03-25&sortBy=publishedAt&apiKey=29e7c18d81f54e7e8279fa8645e45f7d';
  //   axios(url)
  //   .then(data => console.log(data))
  // }, [])
  return (
    <div className="App">
      <header className="App-header">
      <Button style={{color:'#fff', border:'1px solid #fff', marginBottom:'20px'}} color="secondary">Secondary</Button>
        {/* <Chart></Chart> */}
        {
          articles.map(article => <News article={article}></News>)
        }
        <Button variant="contained" color="success">
          Success
        </Button>
      </header>
    </div>
  );
}

export default App;
