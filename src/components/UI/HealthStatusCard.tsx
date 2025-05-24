import React from 'react';
import lungsImg from '../../assets/lungs.jpg';
import teethImg from '../../assets/teeth.webp';
import boneImg from '../../assets/bone.jpg';


interface HealthStatusCardProps {
  title: string;
  date: string;
  status: string;
  progress: number;
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({
  title,
  date,
  status,
  progress,
}) => {
  // Determine progress bar color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500';
      case 'warning':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="flex flex-col p-3 rounded-lg">
      <div className="flex items-center mb-2">
        {title === 'Lungs' && (
          <div className="w-8 h-8 mr-3">
            <img
              src={lungsImg}
              alt="Lungs"
              className="w-full h-full object-contain"
            />
          </div>
        )}

{title === 'Teeth' && (
          <div className="w-8 h-8 mr-3">
            <img
              src={teethImg}
              alt="Teeth"
              className="w-full h-full object-contain"
            />
          </div>
        )}
        {title === 'Bone' && (
          <div className="w-8 h-8 mr-3">
            <img
              src={boneImg}
              alt="Bone"
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-xs text-gray-500">Date: {date}</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className={`h-2 rounded-full ${getStatusColor(status)}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;