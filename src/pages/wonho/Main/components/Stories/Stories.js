import '../Stories/Stories.scss';

function Stories({ stories }) {
  return (
    <div className="stories-wrapper">
      <div className="stories-header">
        <p className="grayfont">스토리</p>
        <p className="bold">모두 보기</p>
      </div>
      <div>
        {stories.map(story => (
          <div key={story.id} className="stories">
            <div className="profile-status">
              <img src={story.img} alt={story.alt} />
            </div>
            <div className="profile-names">
              <p className="username">{story.name}</p>
              <p className="grayfont">{story.name2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
