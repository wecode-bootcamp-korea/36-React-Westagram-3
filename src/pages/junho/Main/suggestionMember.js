function SuggestionMember({ name }) {
  return (
    <>
      <span className="suggestion">회원님을 위한 추천</span>
      <span className="allShow">모두보기</span>
      <div className="suggestionLs">
        {name.map(x => (
          <div key={x.id} className={'suggestion_style suggestionLs_' + x.id}>
            <span>{x.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default SuggestionMember;
