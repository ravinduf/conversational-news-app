import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards'

const alanKey = process.env.REACT_APP_ALAN_AI_SDK

function App() {

  const [newsArticles, setNewsArticles] = useState([]);


  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          setNewsArticles(articles)
        }
      }
    })
  }, [])
  return (
    <div>
      <h1>Alan AI News Applications</h1>
      <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default App;
