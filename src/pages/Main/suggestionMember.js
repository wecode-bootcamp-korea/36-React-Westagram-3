function SuggestionMember(props) {
    const suggestionLs = []
    for(let i=0;i<props.name.length; i++) {
        let single = props.name[i];
        suggestionLs.push(
        <div key={single.id} className={'suggestion_style suggestionLs_'+ single.id} >
            <span>{single.name}</span>
        </div>
        )
    }
    return ( <>
        <span className="suggestion">회원님을 위한 추천</span>
        <span className="allShow">모두보기</span>
        <div className="suggestionLs">
            {suggestionLs}
        </div>
    </>)
}

export default SuggestionMember;