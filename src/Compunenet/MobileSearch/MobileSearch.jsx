import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';

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

const MobileSearch = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

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
      }, 300);

      return () => clearTimeout(searchTimeout);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchTerm]);

  const handleUserClick = (user) => {
    // Add to recent searches
    const updatedRecent = [user, ...recentSearches.filter(u => u.id !== user.id)].slice(0, 5);
    setRecentSearches(updatedRecent);
    localStorage.setItem('recentSearches', JSON.stringify(updatedRecent));
    
    // Clear search and close modal
    setSearchTerm('');
    onClose();
    
    // Navigate to user profile (you can implement this)
    console.log('Navigate to user:', user);
  };

  const clearSearch = () => {
    setSearchTerm('');
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 lg:hidden">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-white">
        <button
          onClick={onClose}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors mr-2"
        >
          <ArrowBackIcon className="text-gray-600" />
        </button>
        
        <div className="flex-1 relative">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-full outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-base"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <CloseIcon className="text-gray-400 w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {isSearching ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-500">Searching...</p>
          </div>
        ) : searchTerm ? (
          searchResults.length > 0 ? (
            <div>
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-700">Search Results</h3>
              </div>
              {searchResults.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleUserClick(user)}
                  className="flex items-center p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50 last:border-b-0"
                >
                  <Avatar
                    src={user.avatar}
                    sx={{ width: 48, height: 48 }}
                    className="ring-2 ring-gray-100 mr-4"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900 truncate">
                        {user.name}
                      </h4>
                      {user.verified && (
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-gray-500 text-center px-4">
                No users found for "<span className="font-medium">{searchTerm}</span>"
              </p>
            </div>
          )
        ) : (
          <div>
            {recentSearches.length > 0 && (
              <div>
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-700">Recent Searches</h3>
                  <button
                    onClick={clearRecentSearches}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear all
                  </button>
                </div>
                {recentSearches.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50 last:border-b-0 group"
                  >
                    <Avatar
                      src={user.avatar}
                      sx={{ width: 48, height: 48 }}
                      className="ring-2 ring-gray-100 mr-4"
                    />
                    <div 
                      className="flex-1 min-w-0"
                      onClick={() => handleUserClick(user)}
                    >
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900 truncate">
                          {user.name}
                        </h4>
                        {user.verified && (
                          <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 truncate">{user.username}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeRecentSearch(user.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-2 rounded-full hover:bg-gray-200 transition-all duration-200"
                    >
                      <CloseIcon className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {recentSearches.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12">
                <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-gray-500 text-center px-4">
                  Start typing to search for users
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSearch;