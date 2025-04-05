
import React from 'react';
import { Calendar } from "lucide-react";

type ScheduleItem = {
  id: number;
  day: string;
  time: string;
  title: string;
  type: 'lecture' | 'workshop' | 'assessment' | 'meeting';
  location?: string;
  instructor?: string;
};

const WeeklyTimetable = () => {
  const currentWeekSchedule: ScheduleItem[] = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 10:30 AM",
      title: "Introduction to Data Analysis",
      type: "lecture",
      instructor: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      day: "Monday",
      time: "2:00 PM - 3:30 PM",
      title: "Excel Advanced Functions Workshop",
      type: "workshop",
      location: "Training Lab 2"
    },
    {
      id: 3,
      day: "Tuesday",
      time: "11:00 AM - 12:30 PM",
      title: "Statistical Methods Overview",
      type: "lecture",
      instructor: "Prof. Michael Chen"
    },
    {
      id: 4,
      day: "Wednesday",
      time: "9:00 AM - 11:00 AM",
      title: "Data Visualization Techniques",
      type: "workshop",
      location: "Training Lab 3"
    },
    {
      id: 5,
      day: "Thursday",
      time: "1:00 PM - 2:00 PM",
      title: "Mid-Module Assessment",
      type: "assessment",
      location: "Online"
    },
    {
      id: 6,
      day: "Friday",
      time: "10:00 AM - 11:00 AM",
      title: "Progress Review Meeting",
      type: "meeting",
      instructor: "Team Lead"
    }
  ];

  // Group schedule by day
  const scheduleByDay = currentWeekSchedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, ScheduleItem[]>);

  // Order days of the week
  const daysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const sortedDays = Object.keys(scheduleByDay).sort(
    (a, b) => daysOrder.indexOf(a) - daysOrder.indexOf(b)
  );

  const getTypeStyles = (type: ScheduleItem['type']) => {
    switch(type) {
      case 'lecture':
        return 'bg-blue-100 text-blue-800 border-l-blue-500';
      case 'workshop':
        return 'bg-green-100 text-green-800 border-l-green-500';
      case 'assessment':
        return 'bg-orange-100 text-orange-800 border-l-orange-500';
      case 'meeting':
        return 'bg-purple-100 text-purple-800 border-l-purple-500';
      default:
        return 'bg-gray-100 text-gray-800 border-l-gray-500';
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-5 w-5 text-odigos-blue" />
        <h2 className="text-xl font-semibold">Your Weekly Schedule</h2>
      </div>

      <div className="space-y-6">
        {sortedDays.map(day => (
          <div key={day} className="space-y-3">
            <h3 className="font-medium text-lg border-b pb-1">{day}</h3>
            <div className="space-y-2">
              {scheduleByDay[day].map(item => (
                <div 
                  key={item.id} 
                  className={`p-3 rounded-md border-l-4 ${getTypeStyles(item.type)}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium">{item.title}</h4>
                    <span className="text-xs font-medium uppercase px-2 py-0.5 rounded bg-white/50">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{item.time}</p>
                  {(item.location || item.instructor) && (
                    <div className="text-xs mt-1 text-gray-700">
                      {item.location && <p>Location: {item.location}</p>}
                      {item.instructor && <p>Instructor: {item.instructor}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyTimetable;
