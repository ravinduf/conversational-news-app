import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards'

import useStyles from './styles.js'
const alanKey = process.env.REACT_APP_ALAN_AI_SDK

function App() {
  const classes = useStyles()
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(0);
        }
        else if (command === 'highlight'){
          setActiveArticle((prev) => prev + 1);
        }
      }
    })
  }, [])
  return (
    <div>
      <div className={classes.logoContainer}>
        <img alt="alanLogo" src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo}/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
     
    </div>
  );
}

export default App;
