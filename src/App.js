import { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

function App() {

  const alanKey = process.env.REACT_APP_ALAN_AI_SDK
  console.log(alanKey)
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if(command === 'testCommand') {
          alert('this code was executed')
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
