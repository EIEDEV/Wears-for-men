import "./card.css";

const CollectCard = ({ onclick, classname, children }) => {
  return (
    <article className={`card ${classname}`} onclick={onclick}>
      {children}
    </article>
  );
};

export default CollectCard;
