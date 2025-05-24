// Navigation Links
export const navigationLinks = [
  { id: 'dashboard', name: 'Dashboard', icon: 'LayoutDashboard', active: true },
  { id: 'history', name: 'History', icon: 'Clock' },
  { id: 'calendar', name: 'Calendar', icon: 'Calendar' },
  { id: 'appointments', name: 'Appointments', icon: 'CalendarClock' },
  { id: 'statistics', name: 'Statistics', icon: 'BarChart' },
];

// Health Status Indicators
export const healthStatus = [
  { 
    id: 'heart', 
    name: 'Healthy Heart', 
    status: 'healthy', 
    position: { top: '30%', left: '50%' },
    color: '#ef4444',
  },
  { 
    id: 'leg', 
    name: 'Healthy Leg', 
    status: 'healthy', 
    position: { bottom: '30%', left: '45%' },
    color: '#14b8a6',
  },
  { 
    id: 'lungs', 
    name: 'Lungs', 
    date: '20 Oct 2021',
    status: 'warning', 
    description: 'Mild inflammation detected',
    progress: 70,
  },
  { 
    id: 'teeth', 
    name: 'Teeth', 
    date: '26 Oct 2021',
    status: 'good', 
    description: 'Regular checkup recommended',
    progress: 85,
  },
  { 
    id: 'bone', 
    name: 'Bone', 
    date: '26 Oct 2021',
    status: 'warning', 
    description: 'Slight calcium deficiency',
    progress: 60,
  },
];

// Calendar Data
export const calendarData = {
  month: 'October 2021',
  days: [
    { day: 'Mon', date: 25, appointments: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, appointments: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, appointments: ['12:00', null, '13:00'] },
    { day: 'Thurs', date: 28, appointments: ['10:00', '11:00', null] },
    { day: 'Fri', date: 29, appointments: [null, '14:00', '16:00'] },
    { day: 'Sat', date: 30, appointments: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, appointments: ['09:00', '10:00', '11:00'] },
  ],
  timeSlots: ['10:00', '11:00', '12:00'],
};

// Featured Appointments
export const featuredAppointments = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: 'Tooth',
    color: '#3b82f6',
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Dones',
    icon: 'Arms',
    color: '#8b5cf6',
  },
];

// Upcoming Schedule
export const upcomingSchedule = {
  thursday: [
    {
      id: 1,
      title: 'Health checkup complete',
      time: '11:00 AM',
      icon: 'Clipboard',
    },
    {
      id: 2,
      title: 'Ophthalmologist',
      time: '14:00 PM',
      icon: 'Eye',
    },
  ],
  saturday: [
    {
      id: 3,
      title: 'Cardiologist',
      time: '12:00 AM',
      icon: 'Heart',
    },
    {
      id: 4,
      title: 'Neurologist',
      time: '16:00 PM',
      icon: 'Brain',
    },
  ],
};

// Activity Data
export const activityData = {
  title: 'Activity',
  subtitle: '3 appointment on this week',
  data: [
    { day: 'Mon', values: [20, 30, 40] },
    { day: 'Tues', values: [35, 25, 15] },
    { day: 'Wed', values: [10, 40, 20] },
    { day: 'Thurs', values: [30, 20, 40] },
    { day: 'Fri', values: [20, 35, 25] },
    { day: 'Sat', values: [40, 15, 30] },
    { day: 'Sun', values: [25, 30, 20] },
  ],
};