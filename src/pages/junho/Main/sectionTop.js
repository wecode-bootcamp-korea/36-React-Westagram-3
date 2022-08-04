function SectionTop(props) {
  const memberLis = [];
  console.log(memberLis);
  for (let i = 0; i < props.members.length; i++) {
    let member = props.members[i];
    memberLis.push(<img key={member.id} src={member.src} alt={member.alt} />);
  }
  return (
    <section className="top basic">
      <div className="topPropil">{memberLis}</div>
    </section>
  );
}
export default SectionTop;
