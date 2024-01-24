// components/AchievementForm.tsx
import React, { useState } from 'react';

const AchievementForm = () => {
  const [city, setCity] = useState('');
  const [achievement, setAchievement] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // handle submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
      <input type="text" value={achievement} onChange={e => setAchievement(e.target.value)} placeholder="Achievement" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AchievementForm;
