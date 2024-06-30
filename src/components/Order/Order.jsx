import { OrderItem } from "../OrderItem/OrderItem"

export const Order = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <OrderItem key={item.id} name={item.name} image={`http://localhost:4000${item.image}`} />
      ))}
    </div>
  )
}