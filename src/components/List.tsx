type ListProps = {
  items: string[];
  onDelete: (item: string) => void;
};

const List = ({ items, onDelete }: ListProps) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {item} <button onClick={() => onDelete(item)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
