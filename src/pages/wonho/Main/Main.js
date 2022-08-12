import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Posts from './components/Posts/Posts';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Stories from './components/Stories/Stories';
import Suggestions from './components/Suggestions/Suggestions';
import '../../../styles/common.scss';
import './Main.scss';

function MainWonho() {
  const [posts, setPosts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('./data/suggestions.json')
      .then(res => res.json())
      .then(setSuggestions);
  }, []);

  useEffect(() => {
    fetch('./data/stories.json')
      .then(res => res.json())
      .then(setStories);
  }, []);

  useEffect(() => {
    fetch('./data/posts.json')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <section className="main">
        <div className="main-wrap">
          <div className="left-col">
            <Posts posts={posts} />
          </div>
          <div className="right-col">
            <ProfileCard />

            <Stories stories={stories} />

            <Suggestions suggestions={suggestions} />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainWonho;
