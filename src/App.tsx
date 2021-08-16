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
      <div className={`grid grid-cols-1 gap-4
        md:px-8 md:grid-cols-2
        lg:grid-cols-large lg:grid-rows-large  top-level-max-width
      `}>
        <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 lg:order-2">
          <ArticleList />
        </div>
        <div className="lg:order-4"><TrendingPostList /></div>
        <div className="lg:order-1 lg:row-span-2"><MilestoneList /></div>
        <div className="md:col-span-2 lg:col-span-1 lg:order-3">
          <Livestream />
        </div>
      </div>
    </div>
  );
}

export default App;
