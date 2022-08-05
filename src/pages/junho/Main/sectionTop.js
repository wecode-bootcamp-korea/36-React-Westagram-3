function SectionTop({ members }) {
  const memberLis = [];
  for (let i = 0; i < members.length; i++) {
    let member = members[i];
    memberLis.push(<img key={member.id} src={member.src} alt={member.alt} />);
  }
  return (
    <section className="top basic">
      <div className="topPropil">{memberLis}</div>
    </section>
  );
}
export default SectionTop;
