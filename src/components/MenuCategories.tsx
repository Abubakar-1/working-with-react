const menu = [
  { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
  { category: "Vegetables", items: ["Carrot", "Spinach"] },
];

function MenuCategories() {
  return (
    <div>
      {menu.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MenuCategories;
