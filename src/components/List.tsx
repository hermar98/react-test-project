type ListProps = {
  items: string[];
};

const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
