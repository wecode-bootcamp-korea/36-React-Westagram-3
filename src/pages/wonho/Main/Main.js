import { useState, useEffect } from 'react';
import './Main.scss';
import '../../../styles/common.scss';
import './components/Nav/Nav.scss';
import './components/PostTop/PostTop.scss';
import './components/PostNav/PostNav.scss';
import './components/PostContent/PostContent.scss';
import './components/ProfileCard/ProfileCard.scss';
import './components/Stories/Stories.scss';
import './components/Suggestions/Suggestions.scss';
import Nav from './components/Nav/Nav';
import Posts from './components/Posts/Posts';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Stories from './components/Stories/Stories';
import Suggestions from './components/Suggestions/Suggestions';

function MainWonho() {
  const [suggestions, setSuggestions] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('./data/suggestions.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSuggestions(data);
      });
  }, []);

  useEffect(() => {
    fetch('./data/stories.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setStories(data);
      });
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="main">
        <div className="main-wrap">
          <div className="left-col">
            <Posts />
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
