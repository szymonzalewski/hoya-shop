export default function ItemCard({ className, name, desc }) {
  return (
    <div className={className}>
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}
