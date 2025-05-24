import React from 'react';
import { activityData } from '../../data/mockData';

const ActivityFeed: React.FC = () => {
  // Get the maximum value to normalize heights
  const maxValue = Math.max(...activityData.data.flatMap(day => day.values));
  
  // Function to calculate height percentage based on value
  const getHeight = (value: number) => {
    return Math.max(15, (value / maxValue) * 100);
  };
  
  // Colors for chart bars matching the image exactly
  const barColors = ['#00E5E5', '#4F46E5', '#E2E8F0'];
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-semibold text-gray-800">{activityData.title}</h2>
          <p className="text-sm text-gray-400">{activityData.subtitle}</p>
        </div>
      </div>
      
      <div className="relative flex h-32 items-end justify-between">
        {/* Background grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-full border-t border-gray-100"
            />
          ))}
        </div>
        
        {/* Bars */}
        {activityData.data.map((day, dayIndex) => (
          <div key={dayIndex} className="relative flex space-x-0.5 items-end z-10">
            {day.values.map((value, valueIndex) => (
              <div
                key={valueIndex}
                className="w-1.5 rounded-full"
                style={{
                  height: `${getHeight(value)}%`,
                  backgroundColor: barColors[valueIndex % barColors.length],
                  opacity: valueIndex === 1 ? 0.7 : 1,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-4">
        {activityData.data.map((day, index) => (
          <div key={index} className="text-xs text-gray-400">
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;