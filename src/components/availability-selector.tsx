import React from 'react';
import { Checkbox, CheckboxGroup } from '@heroui/react';

interface AvailabilitySelectorProps {
  availability: Record<string, string[]>;
  onAvailabilityChange: (availability: Record<string, string[]>) => void;
}

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const times = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

const AvailabilitySelector: React.FC<AvailabilitySelectorProps> = ({ availability, onAvailabilityChange }) => {
  const handleDayChange = (day: string, selectedTimes: string[]) => {
    onAvailabilityChange({ ...availability, [day]: selectedTimes });
  };

  return (
    <div>
      {days.map((day) => (
        <div key={day} className="mb-4">
          <h4 className="font-semibold capitalize">{day}</h4>
          <CheckboxGroup
            value={availability[day] || []}
            onChange={(value) => handleDayChange(day, value as string[])}
            orientation="horizontal"
          >
            {times.map((time) => (
              <Checkbox key={time} value={time}>{time}</Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      ))}
    </div>
  );
};

export default AvailabilitySelector;
