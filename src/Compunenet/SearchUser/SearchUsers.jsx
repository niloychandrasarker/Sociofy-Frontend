import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, Avatar, Card } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Mock user data for search functionality
const mockUsers = [
  { id: 1, name: 'John Doe', username: '@johndoe', avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', verified: true },
  { id: 2, name: 'Jane Smith', username: '@janesmith', avatar: 'https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_640.jpg', verified: false },
  { id: 3, name: 'Mike Johnson', username: '@mikej', avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', verified: true },
  { id: 4, name: 'Sarah Wilson', username: '@sarahw', avatar: 'https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_640.jpg', verified: false },
  { id: 5, name: 'David Brown', username: '@davidb', avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', verified: true },
  { id: 6, name: 'Emily Davis', username: '@emilyd', avatar: 'https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_640.jpg', verified: false },
  { id: 7, name: 'Alex Thompson', username: '@alext', avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', verified: true },
  { id: 8, name: 'Lisa Anderson', username: '@lisaa', avatar: 'https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_640.jpg', verified: false },
];

const SearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchTerm.trim()) {
      setIsSearching(true);
      
      // Simulate API delay
      const searchTimeout = setTimeout(() => {
        const filtered = mockUsers.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filtered);
        setIsSearching(false);
        setShowResults(true);
      }, 300);

      return () => clearTimeout(searchTimeout);
    } else {
      setSearchResults([]);
      setIsSearching(false);
      setShowResults(false);
    }
  }, [searchTerm]);

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target) &&
        resultsRef.current &&
        !resultsRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserClick = (user) => {
    // Add to recent searches
    const updatedRecent = [user, ...recentSearches.filter(u => u.id !== user.id)].slice(0, 5);
    setRecentSearches(updatedRecent);
    localStorage.setItem('recentSearches', JSON.stringify(updatedRecent));
    
    // Clear search and close results
    setSearchTerm('');
    setShowResults(false);
    
    // Navigate to user profile (you can implement this)
    console.log('Navigate to user:', user);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowResults(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const removeRecentSearch = (userId) => {
    const updated = recentSearches.filter(u => u.id !== userId);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  return (
    <div className="relative mb-4" ref={searchRef}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowResults(true)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="text-gray-400" />
            </InputAdornment>
          ),
          endAdornment: searchTerm && (
            <InputAdornment position="end">
              <button
                onClick={clearSearch}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <CloseIcon className="text-gray-400 w-5 h-5" />
              </button>
            </InputAdornment>
          ),
          sx: {
            borderRadius: 3,
            backgroundColor: 'rgba(249, 250, 251, 0.8)',
            backdropFilter: 'blur(10px)',
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid rgba(229, 231, 235, 0.8)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: '1px solid rgba(59, 130, 246, 0.5)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: '2px solid #3b82f6',
            },
            transition: 'all 0.2s ease',
          }
        }}
        size="medium"
        className="hover:shadow-md transition-shadow duration-200"
      />

      {/* Search Results Dropdown */}
      {showResults && (
        <Card 
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto shadow-2xl border-0 bg-white/95 backdrop-blur-lg"
          sx={{ borderRadius: 3 }}
        >
          {isSearching ? (
            <div className="p-4 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-2 text-sm">Searching...</p>
            </div>
          ) : searchTerm ? (
            searchResults.length > 0 ? (
              <div>
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-700">Search Results</h3>
                </div>
                {searchResults.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => handleUserClick(user)}
                    className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    <Avatar
                      src={user.avatar}
                      sx={{ width: 40, height: 40 }}
                      className="ring-2 ring-gray-100 mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-1">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">
                          {user.name}
                        </h4>
                        {user.verified && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate">{user.username}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-gray-500 text-sm">No users found for "{searchTerm}"</p>
              </div>
            )
          ) : (
            recentSearches.length > 0 && (
              <div>
                <div className="flex items-center justify-between p-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-700">Recent Searches</h3>
                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear all
                  </button>
                </div>
                {recentSearches.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-b-0 group"
                  >
                    <Avatar
                      src={user.avatar}
                      sx={{ width: 40, height: 40 }}
                      className="ring-2 ring-gray-100 mr-3"
                    />
                    <div 
                      className="flex-1 min-w-0"
                      onClick={() => handleUserClick(user)}
                    >
                      <div className="flex items-center space-x-1">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">
                          {user.name}
                        </h4>
                        {user.verified && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate">{user.username}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeRecentSearch(user.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded-full hover:bg-gray-200 transition-all duration-200"
                    >
                      <CloseIcon className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            )
          )}
        </Card>
      )}
    </div>
  );
};

export default SearchUsers;