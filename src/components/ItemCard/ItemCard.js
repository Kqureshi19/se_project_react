import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <ul className="card">
      <div className="card_name">{item.name}</div>
      <img
        src={item.link}
        alt={item.name}
        className="card_image"
        onClick={() => onSelectCard(item)}
      />
    </ul>
  );
};

export default ItemCard;
