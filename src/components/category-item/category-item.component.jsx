import "./category-item.styles.scss";

const Categoryitem = ({ category }) => {
  const { imageUrl, id, title, subtitle } = category;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Categoryitem;
