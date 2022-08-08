import React, { useEffect, useState } from 'react';
import News from '../News/News';


const Heeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-03-25&sortBy=publishedAt&apiKey=29e7c18d81f54e7e8279fa8645e45f7d';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h2>articles: {articles.length}</h2>
            {
                articles.map(article => <News article={article}></News>)
            }
            
        </div>
    );
};

export default Heeadline;