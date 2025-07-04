import React from 'react';
import SearchUsers from '../SearchUser/SearchUsers';
import PopularUserCard from './PopularUserCard';
import { Card } from '@mui/material';

const popularUser = [1, 1, 1, 1, 1];

const HomeRight = () => {
  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Search Section */}
      <SearchUsers />
      
      {/* Trending Topics */}
      <Card className="p-4 lg:p-6 rounded-2xl shadow-card border-0 bg-white/95 backdrop-blur-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Trending</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            See all
          </button>
        </div>
        <div className="space-y-3">
          {['#ReactJS', '#WebDevelopment', '#JavaScript', '#TechNews'].map((tag, index) => (
            <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <div>
                <p className="font-medium text-gray-900">{tag}</p>
                <p className="text-sm text-gray-500">{Math.floor(Math.random() * 50) + 10}K posts</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Suggested Users */}
      <Card className="p-4 lg:p-6 rounded-2xl shadow-card border-0 bg-white/95 backdrop-blur-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Suggested for you</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {popularUser.map((_, index) => (
            <PopularUserCard key={index} />
          ))}
        </div>
      </Card>

      {/* Quick Stats */}
      <Card className="p-4 lg:p-6 rounded-2xl shadow-card border-0 bg-white/95 backdrop-blur-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Activity</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Posts this week</span>
            <span className="font-semibold text-blue-600">12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Likes received</span>
            <span className="font-semibold text-green-600">248</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">New followers</span>
            <span className="font-semibold text-purple-600">15</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;