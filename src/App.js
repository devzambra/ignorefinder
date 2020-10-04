import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';

const App = React.memo(() => {

  const [templates, setTemplates] = useState([])

  useEffect(() => {
    if (templates.length === 0) {
      fetch('https://api.github.com/gitignore/templates', {
          headers: {
              Accept: 'application/vnd.github.v3+json',
          }
      })
      .then(res => res.json())
      .then(data => setTemplates(data))
  }
  }, [templates.length])

  return (
    <div className="App bg-gray-700">
      <main className="container mx-auto flex flex-col h-screen flex-1 justify-center items-center">
        <Searchbar templates={templates} />
      </main>
    </div>
  );
})

export default App;
