"use client";
import { useState, useEffect } from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      className="border-2 border-gray-300 rounded-md p-2"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

function List({ list }) {
  return list.length > 0 ? (
    <ul className="flex flex-col gap-2">
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : (
    <p>No results found</p>
  );
}

export default function Search() {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [list, setList] = useState([
    "This is a list of items",
    "What is the weather in Tokyo?",
    "How to make a website",
    "Hi there",
  ]);

  // useEffect(() => {
  //   if (search && search !== "") {
  //     setFilteredList(
  //       list.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
  //     );
  //   } else {
  //     setFilteredList([]);
  //   }
  // }, [search, list]);

  return (
    <div>
      <SearchBar {...{ search, setSearch }} />
      <List
        list={
          search
            ? list.filter((item) =>
                item.toLowerCase().includes(search.toLowerCase())
              )
            : []
        }
      />
    </div>
  );
}
