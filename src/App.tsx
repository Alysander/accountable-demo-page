import React from 'react';
import { ArticleList } from './components/ArticleList';
import { Header } from './components/Header';

function App() {
  return (

    <div className="pb-8">
      <Header />
      <ArticleList />
    </div>
  );
}

export default App;
