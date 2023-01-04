import { useState } from "react";
import books from "./books.json";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Fuse from "fuse.js";

import './App.css';

function App() {
  const [data, setData] = useState(books)

  const searchData = (pattern) => {
    if(!pattern) {
      setData(books)
      return
    }

    const fuse = new Fuse(data, {
      keys: ['title', 'author']
    })

    const result = fuse.search(pattern)
    const matches = [];

    if(!result.length) {
      setData([])
    } else {
      result.forEach(({item}) => {
        matches.push(item)
      })
      setData(matches)
    }
  }

  return (
    <div className="Container">
      <h1 className="Title">My Favorite books</h1>
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
       />
      {
        data.map(item => <Card key={item.name} {...item}/>)
      }
    </div>
  );
}

export default App;
