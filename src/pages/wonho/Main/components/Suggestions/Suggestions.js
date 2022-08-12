import '../Suggestions/Suggestions.scss';

function Suggestions({ suggestions }) {
  return (
    <div className="suggestions-wrapper">
      <div className="suggestions-header">
        <p className="grayfont">회원님을 위한 추천</p>
        <p className="bold">모두 보기</p>
      </div>
      <div>
        {suggestions.map(suggestion => (
          <div key={suggestion.id} className="suggestions">
            <div className="profile-status">
              <img src={suggestion.img} alt={suggestion.alt} />
            </div>
            <div className="profile-names">
              <p className="username">{suggestion.name}</p>
              <p className="grayfont">{suggestion.follow}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
