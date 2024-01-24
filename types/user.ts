// types/user.ts
export type UserAchievement = {
  city: string;
  completedAchievements: string[];
};

export type UserProfile = {
  username: string;
  achievements: UserAchievement[];
};
