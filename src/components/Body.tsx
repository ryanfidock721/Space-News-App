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
      console.log(Date);
      
    }, []);

    console.log(articles);
    return (
      <div className='flex justify-center flex-col items-center'>
        {articles.map(article => (
          <div key={article.id} className='flex-auto w-full h-full max-h-200 max-w-120 pt-10 pb-10 border-b border-slate-300 p-2'>
            <div className='bg-zinc-800/70 hover:bg-gray-800/70 p-5 rounded-md shadow-md cursor-pointer'>
              <a href={article.url}>
                <div className='flex justify-center'>
                    <img src={article.image_url} alt={article.title} className='rounded-md max-h-80 max-w-auto' />
                </div>
                <p className='font-bold text-2xl p-5'>{article.title}</p>
                <div className='flex direction-row text-sm justify-around font-bold'>
                  <p className='inline'>{article.news_site}</p>
                  <p>{new Date(article.published_at).toLocaleDateString()}</p>
                </div>
              </a>
            </div>
          </div>
            ))}
      </div>
    )
}