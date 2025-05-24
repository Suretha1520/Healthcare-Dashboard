import React from 'react';
import { healthStatus } from '../../data/mockData';
import HealthStatusCard from '../UI/HealthStatusCard';
import anatomyImage from '../../assets/anatomy.png';


const AnatomySection: React.FC = () => {
  // Filter indicators that should appear on the anatomy image
  const bodyIndicators = healthStatus.filter(
    (item) => item.position && (item.id === 'heart' || item.id === 'leg')
  );

  // Filter status cards that appear on the side
  const statusCards = healthStatus.filter(
    (item) => !item.position && (item.id === 'lungs' || item.id === 'teeth' || item.id === 'bone')
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative flex justify-center items-center">
          {/* Anatomy Image */}
          <div className="relative w-full max-w-[250px]">
            <img
               src={anatomyImage} 
              alt="Human Anatomy"
              className="w-full h-auto"
            />
            
            {/* Indicators on the body */}
            {bodyIndicators.map((indicator) => (
              <div
                key={indicator.id}
                className="absolute z-10"
                style={{
                  ...indicator.position,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div 
                  className="rounded-lg px-3 py-1.5 text-white text-xs font-medium shadow-lg"
                  style={{ backgroundColor: indicator.color }}
                >
                  {indicator.name}
                </div>
              </div>
            ))}
            
            {/* Circle at the bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-6 flex justify-center">
              {/* <div className="w-24 h-24 rounded-full border-2 border-gray-200 -mb-20"></div> */}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Health Status Cards */}
          {statusCards.map((status) => (
            <HealthStatusCard
              key={status.id}
              title={status.name}
              date={status.date || ''}
              status={status.status}
              progress={status.progress || 0}
            />
          ))}
          
          <div className="flex justify-end mt-4">
            <button className="text-blue-600 text-sm font-medium flex items-center">
              Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;