import React from 'react';
import { ArticleList } from './components/ArticleList';
import { Header } from './components/Header';
import { Livestream } from './components/Livestream';
import { MilestoneList } from './components/MilestoneList';
import { TrendingPostList } from './components/TrendingPostList';

function App() {
  return (

    <div className="pb-8">
      <Header />
      <div className="grid grid-cols-1 gap-4 md:px-8">
        <ArticleList />
        <TrendingPostList />
        <MilestoneList />
        <Livestream />
      </div>
    </div>
  );
}

export default App;
