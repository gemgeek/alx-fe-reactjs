import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
};

export default App;
