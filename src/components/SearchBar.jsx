 
import React, { useState, useEffect } from 'react';

const SearchBar = ({ users, onSelect }) => {

  const [query, setQuery] = useState('');

  const [suggestions, setSuggestions] = useState([]);

  useEffect(()=>{
    if(query.trim() !== ''){
      const filteredUsers = users.filter((user)=> user?.name?.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredUsers);
    }else{

      setSuggestions([]);
    }
  },[query,users]);


  return (
    <div className="relative w-full max-w-2xl mx-auto ">
      <input
        type="text"
        placeholder="Search For  Accountant"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border rounded-2xl shadow-md outline-sky-300"
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white bg-opacity-80 border rounded shadow-lg">
          {suggestions.map((accountant) => (
            <li
              key={accountant.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(accountant);
                setQuery('');
                setSuggestions([]);
              }}
            >
              {accountant.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default SearchBar;