import React from 'react';
import { ArticleList } from './components/ArticleList';
import { Header } from './components/Header';
import { Livestream } from './components/Livestream';
import { MilestoneList } from './components/MilestoneList';
import { TrendingPostList } from './components/TrendingPostList';

function App() {
  return (

    <>
      <Header />
      <main className={`
        py-8
        grid grid-cols-1 gap-4
        md:px-8 md:grid-cols-2
        lg:lg-layout-page  top-level-max-width
      `}>
        <div className="md:col-span-2 lg:lg-layout-articles">
          <ArticleList />
        </div>
        <div className="md:order-3 lg:lg-layout-trending"><TrendingPostList /></div>
        <div className="md:order-2 lg:lg-layout-milestones"><MilestoneList /></div>
        <div className="md:order-4 md:col-span-2 lg:lg-layout-livestream ">
          <Livestream />
        </div>
      </main>
    </>
  );
}

export default App;
