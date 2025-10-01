const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

function ShoppingList() {
  return (
    <ul>
      {shoppingList.map((item, index) => (
        <li
          key={index}
          style={{ textDecoration: item === "Eggs" ? "line-through" : "none" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
