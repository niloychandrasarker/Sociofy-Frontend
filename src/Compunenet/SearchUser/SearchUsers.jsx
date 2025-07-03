import React from 'react';

const SearchUsers = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
      />
    </div>
  );
};

export default SearchUsers;