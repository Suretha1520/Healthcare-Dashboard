import React from 'react';
import * as LucideIcons from 'lucide-react';
import toothImage from '../../assets/teeth.webp';
import armsImage from '../../assets/arms.webp';


interface AppointmentCardProps {
  title: string;
  time: string;
  doctor?: string;
  icon: string;
  color?: string;
  featured?: boolean;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  title,
  time,
  doctor,
  icon,
  color = '#3b82f6',
  featured = false,
}) => {
  // Dynamic icon component selection
  const IconComponent = () => {
    const iconLower = icon.toLowerCase();

    if (iconLower === 'tooth') {
      return (
        <img
          src={toothImage}
          alt="Tooth"
          className={featured ? 'w-6 h-6' : 'w-4 h-4'}
        />
      );
    }

    if (iconLower === 'arms') {
      return (
        <img
          src={armsImage}
          alt="Arms"
          className={featured ? 'w-6 h-6' : 'w-4 h-4'}
        />
      );
    }

    const LucideIcon = LucideIcons[icon as keyof typeof LucideIcons];

    // Only render LucideIcon if it exists
    return LucideIcon ? <LucideIcon size={featured ? 24 : 16} /> : null;
  };




  if (featured) {
    return (
      <div 
        className="rounded-xl p-4 flex items-start space-x-3"
        style={{ backgroundColor: color, color: 'white' }}
      >
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{time}</p>
          <p className="text-sm opacity-90 mt-1">{doctor}</p>
        </div>
        <div className="mt-1">
          <IconComponent />
        </div>
      </div>
    );
  }
  


  return (
    <div className="bg-blue-50 rounded-xl p-4 flex items-center space-x-3">
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div className="text-blue-600">
        <IconComponent />
      </div>
    </div>
  );
};

export default AppointmentCard;