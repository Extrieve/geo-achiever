// types/achievement.ts
export type Achievement = {
  city: string;
  achievements: string[];
};

// sample data
export const achievementsData: Achievement[] = [
  {
    city: 'New York City',
    achievements: ['Took a silly photo at Times Square', 'Visited Central Park'],
  },
  // ...other cities
];
