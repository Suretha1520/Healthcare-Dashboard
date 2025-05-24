import React from 'react';
import { upcomingSchedule } from '../../data/mockData';
import AppointmentCard from '../UI/AppointmentCard';

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">On Thursday</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingSchedule.thursday.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">On Saturday</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingSchedule.saturday.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;