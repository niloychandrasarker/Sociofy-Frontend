import React from 'react'
import SearchUsers from '../SearchUser/SearchUsers'
import PopularUserCard from './PopularUserCard'
import { Card } from '@mui/material';

const popularUser = [1, 1, 1, 1, 1, ];

const HomeRight = () => {
  return (
    <div className="pr-5 mt-4">
      <SearchUsers  />
      
      

     <Card className='p-5'>
      <div className="flex justify-between py-5 items-center">
        <p className="font-semibold opacity-70">Suggested for you</p>
        <p className="text-xs font-semibold opacity-95 cursor-pointer">View All</p>
      </div>
       <div className="space-y-5">
        {popularUser.map((_, index) => (
          <PopularUserCard key={index} />
        ))}
      </div>
     </Card>
    </div>
  );
};

export default HomeRight;
