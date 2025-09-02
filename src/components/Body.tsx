import { useState } from 'react'
import { useEffect } from 'react'

export function Body() {
    const [articles, setArticles] = useState([])
    
      useEffect(() => {
        async function getData() {
    
        const url = "https://api.spaceflightnewsapi.net/v4/articles";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
    
          const data = await response.json();
          setArticles(data.results);
    
        } catch (error) {
          console.error('Error');
        }
      }

      getData();
      
    }, []);

    console.log(articles);
    return (
      <div>
        {articles.map(article => (
          <div key={article.id}>
            <p>Title: {article.title}</p>
            <p>Summary: {article.summary}</p>
            <a href={article.url}>
              <img src={article.image_url} alt={article.title} width="300" />
            </a>
          </div>
            ))}
      </div>
    )
}