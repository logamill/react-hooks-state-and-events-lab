import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  function handleFilterChange(e) {
    seltectedCategory(e.target.value)
  }

  const [selectedItem, seltectedCategory] = useState('All')

  const itemsToDisplay = items.filter((item) => {
    if(selectedItem === 'All'){
      return true;
    }else {
      return item.category === selectedItem
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((newItems) => (
          <Item key={newItems.id} name={newItems.name} category={newItems.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
