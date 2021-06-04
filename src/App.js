import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

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
      onCommand: ({ command, articles, number }) => {
        if(command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(0);
        }
        else if (command === 'highlight'){
          setActiveArticle((prev) => prev + 1);
        }
        else if (command === 'open'){
          console.log(number);
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber];

          if (parsedNumber > 20){
            alanBtn().playText('Please try that again')
          }
          else if (article) {
            console.log(article)
            window.open(article.url, '_blank');
            alanBtn().playText('Opening..')
          }
          
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
