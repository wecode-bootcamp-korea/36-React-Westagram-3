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
import PostOne from './components/Posts/PostOne';
import PostTwo from './components/Posts/PostTwo';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Stories from './components/Stories/Stories';
import Suggestions from './components/Suggestions/Suggestions';

function MainWonho() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="main">
        <div className="main-wrap">
          <div className="left-col">
            <PostOne />

            <PostTwo />
          </div>
          <div className="right-col">
            <ProfileCard />

            <Stories />

            <Suggestions />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainWonho;
