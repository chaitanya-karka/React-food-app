import { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((song) => song.name.includes(query));
};

export default function Searchbar() {
    const foodList = useSelector((state) => state.mainslice.foodList)
  const [query, setQuery] = useState("");
  foodList.map((val) => {
    val.food.map((value) => {
        const foodName =value.name
    })
  })
  const { items } = foodName;
  // items looks like this: [{name: 'name1'}, {name: 'name2'}]

  const filteredItems = getFilteredItems(query, items);

  return (
    <div className="App">
      <label>Search</label>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((value) => (
          <h1 key={value.name}>{value.name}</h1>
        ))}
      </ul>
    </div>
  );
}
