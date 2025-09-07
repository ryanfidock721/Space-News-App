import { useState } from 'react'
import { useEffect } from 'react'


export function Body({ userText }: { userText: string }) {
    type Article ={
      id: number;
      title: string;
      url: string;
      image_url: string;
      news_site: string;
      published_at: string;
    };

    const [articles, setArticles] = useState<Article[]>([]);
    
      useEffect(() => {
        async function getData() {
    
        const url = `https://api.spaceflightnewsapi.net/v4/articles?title_contains=${userText}`;
        console.log(url)
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
      
    }, [userText]);

    return (
      <div className='flex justify-center flex-col items-center'>
        {articles.map(article => (
          <div key={article.id} className='flex-auto w-full h-full max-h-200 max-w-120 pt-10 p-2'>
            <div className='bg-white/5 backdrop-blur-md shadow-lg p-5 rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105'>
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
            <div className='border-b border-neutral-600 ml-2 mr-2 pt-10'></div>
          </div>
            ))}
      </div>
    )
}