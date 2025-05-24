import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <AnatomySection />
        <ActivityFeed />
      </div>
      <div className="lg:col-span-3">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default Dashboard;