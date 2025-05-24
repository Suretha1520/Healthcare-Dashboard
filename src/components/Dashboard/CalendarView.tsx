import React from 'react';
import { calendarData, featuredAppointments } from '../../data/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AppointmentCard from '../UI/AppointmentCard';

const CalendarView: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            This Week
          </span>
        </div>
        <div className="flex items-center">
          <h2 className="text-lg font-semibold mr-4">{calendarData.month}</h2>
          <div className="flex space-x-2">
            <button className="p-1 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {calendarData.days.map((day, index) => (
          <div key={index} className="text-center">
            <p className="text-xs font-medium text-gray-500 mb-1">{day.day}</p>
            <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
              day.date === 28 ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`}>
              {day.date}
            </div>
          </div>
        ))}
      </div>

      {/* Time slots grid */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {calendarData.days.map((day, dayIndex) => (
          <div key={dayIndex} className="space-y-2">
            {day.appointments.map((time, timeIndex) => (
              <div key={timeIndex} className="text-center">
                {time ? (
                  <span 
                    className={`block text-xs py-1 px-2 rounded ${
                      dayIndex === 3 && timeIndex === 0 ? 'bg-blue-100 text-blue-700' :
                      dayIndex === 5 && timeIndex === 0 ? 'bg-blue-100 text-blue-700' : 
                      'text-gray-500'
                    }`}
                  >
                    {time}
                  </span>
                ) : (
                  <span className="block text-xs py-1 px-2">—</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Featured appointments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            title={appointment.title}
            time={appointment.time}
            doctor={appointment.doctor}
            icon={appointment.icon}
            color={appointment.color}
            featured={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;