export const OrderItem = ({ name, image }) => {
  return (
    <div className="order-item">
      <img className="order-item__image" src={image} />
      <div className="order-item__name">{name}</div>
    </div>
  )
}