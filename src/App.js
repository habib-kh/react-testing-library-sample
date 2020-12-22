import React from 'react';
const App = () => {
  const [search, setSearch] = React.useState('');

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
};

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor='search'>{children}</label>
      <input
        data-testid='seach-component'
        id='search'
        type='text'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
