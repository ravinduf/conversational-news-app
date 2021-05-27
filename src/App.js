import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = process.env.REACT_APP_ALAN_AI_SDK

function App() {

  const [newsArticles, setNewsArticles] = useState([]);


  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          console.log(articles)
        }
      }
    })
  }, [])
  return (
    <div>
      <h1>Alan AI News Applications</h1>
    </div>
  );
}

export default App;
