import './sectionTop.scss';

const SectionTop = ({ members }) => {
  return (
    <section className="top basic">
      <div className="topPropil">
        {members.map(x => (
          <img key={x.id} src={x.src} alt={x.alt} />
        ))}
      </div>
    </section>
  );
};
export default SectionTop;
