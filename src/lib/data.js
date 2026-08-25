import { Zap, Dumbbell, Activity, Users } from 'lucide-react';

export const BRAND_COLOR = "#03c04a"; 
export const DARK_BG = "bg-zinc-950/40 backdrop-blur-md";

export const MOCK_PROGRAMS = [
  { id: 1, title: 'HIIT Blast', desc: 'High-intensity intervals designed for maximum calorie burn.', icon: Zap },
  { id: 2, title: 'Power Lifting', desc: 'Heavy compound movements to build raw strength.', icon: Dumbbell },
  { id: 3, title: 'Yoga Flow', desc: 'Restore balance, mobility, and mental focus.', icon: Activity },
  { id: 4, title: 'CrossFit', desc: 'Functional high-intensity training for total conditioning.', icon: Users },
];

export const MOCK_TRAINERS = [
  { id: 1, name: 'Aryan Patil', role: 'Head Coach', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Meera Joshi', role: 'Yoga Specialist', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Vikram Shinde', role: 'Strength Coach', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400' },
];

export const INITIAL_CLASSES = [
  { id: 101, name: 'Morning HIIT', time: '06:00 AM', trainer: 'Aryan Patil', slots: 15, booked: 12, day: 'Mon' },
  { id: 102, name: 'Power Yoga', time: '08:00 AM', trainer: 'Meera Joshi', slots: 20, booked: 8, day: 'Mon' },
  { id: 103, name: 'Heavy Lifting', time: '05:00 PM', trainer: 'Vikram Shinde', slots: 10, booked: 10, day: 'Mon' },
  { id: 104, name: 'Cardio Burn', time: '07:00 AM', trainer: 'Aryan Patil', slots: 20, booked: 15, day: 'Tue' },
  { id: 105, name: 'CrossFit WOD', time: '06:00 PM', trainer: 'Vikram Shinde', slots: 12, booked: 5, day: 'Tue' },
];

export const MOCK_COMMUNITY_POSTS = [
  { id: 1, user: "Rohan D.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", content: "Finally hit my 100kg deadlift PR! Thanks to coach Vikram for the form correction.", likes: 24, likedByUser: false, time: "2h ago" },
  { id: 2, user: "Priya S.", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d", content: "Morning yoga at Vijaynagar branch was peaceful today. Perfect start to the week.", likes: 12, likedByUser: false, time: "4h ago" },
  { id: 3, user: "Amit K.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", content: "30 day streak! Who's joining me for the summer shred challenge?", likes: 45, likedByUser: true, time: "1d ago" },
  { id: 4, user: "Sneha P.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e", content: "Just finished the 5AM HIIT class. Dying but smiling! 😅", likes: 8, likedByUser: false, time: "5h ago" },
];

export const MOCK_LEADERBOARD = [
  { id: 1, name: "Amit K.", streak: 30, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", status: "On Fire!" },
  { id: 2, name: "Sarah J.", streak: 24, avatar: "https://i.pravatar.cc/150?u=sarah", status: "Consistent" },
  { id: 3, name: "Rohan D.", streak: 18, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", status: "Rising" },
  { id: 4, name: "Priya S.", streak: 12, avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d", status: "Steady" },
  { id: 5, name: "Vikram S.", streak: 5, avatar: "https://i.pravatar.cc/150?u=vikram", status: "Warming Up" },
];

export const api = {
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@respire.com' && password === 'admin') {
          resolve({ id: 'admin1', name: 'Admin User', email, role: 'admin' });
        } else if (email && password) {
          resolve({ 
            id: 'user1', 
            name: 'Rahul Kumar', 
            email, 
            role: 'member', 
            age: 28,
            goal: 'Muscle Gain',
            bookings: [],
            joinDate: '2021-03-15', 
            loyaltyPoints: 1250,
            avatar: "https://i.pravatar.cc/150?u=user1",
            streak: 15
          });
        } else {
          reject('Invalid credentials');
        }
      }, 800);
    });
  },

  register: async (name, email, password, age, goal) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          id: Math.random().toString(36).substr(2, 9), 
          name, 
          email, 
          age,
          goal,
          role: 'member', 
          bookings: [],
          joinDate: new Date().toISOString().split('T')[0],
          loyaltyPoints: 50,
          avatar: `https://i.pravatar.cc/150?u=${email}`,
          streak: 1
        });
      }, 800);
    });
  },

  bookClass: async (classId, userId) => new Promise(res => setTimeout(() => res(true), 500)),
};
