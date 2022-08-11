import './suggestionMember.scss';

function SuggestionMember({ name }) {
  return (
    <>
      <span className="suggestion">회원님을 위한 추천</span>
      <span className="allShow">모두보기</span>
      <div className="suggestionLs">
        {name.map(member => (
          <div
            key={member.id}
            className={'suggestion_style suggestionLs_' + member.id}
          >
            <span>{member.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default SuggestionMember;
