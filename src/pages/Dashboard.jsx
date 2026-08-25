import React, { useState } from 'react';
import { Settings, Target, LogOut, Shield, X } from 'lucide-react';
import { Button } from '../components/ui';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ user, bookings, classes, onLogout, onCancel }) {
  const navigate = useNavigate();
  const userBookings = classes.filter(c => bookings.includes(c.id));
  
  const joinYear = new Date(user.joinDate).getFullYear();
  const currentYear = new Date().getFullYear();
  const years = currentYear - joinYear;

  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({ 
    age: user.age || '', 
    goal: user.goal || 'General Fitness' 
  });

  const handleSaveProfile = () => {
    user.age = profileData.age;
    user.goal = profileData.goal;
    setEditMode(false);
  };

  const handleLogout = () => {
      onLogout();
      navigate('/');
  }

  return (
    <div className="min-h-screen pt-32 pb-12 relative z-10 mx-6">
      <div className="container mx-auto">
        <div className="glass-panel p-10 rounded-3xl mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-8">
            <div className="relative">
                <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full border-4 border-[#03c04a] shadow-[0_0_20px_rgba(3,192,74,0.4)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#03c04a] rounded-full border-2 border-black"></div>
            </div>
            <div>
              <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                Namaste, <span className="text-[#03c04a]">{user.name}</span>
              </h1>
              <p className="text-zinc-400 font-mono text-sm mt-2 font-bold bg-black/30 inline-block px-3 py-1 rounded">MEMBER ID: <span className="text-white">{user.id.toUpperCase()}</span></p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="w-full md:w-auto">
             <LogOut size={18} /> Logout Session
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
           <div className="glass-panel p-8 rounded-3xl border border-white/5 lg:col-span-1 shadow-xl">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                 <h3 className="text-2xl font-black text-white uppercase italic flex items-center gap-3">
                   <Settings size={24} className="text-[#03c04a]" /> Profile
                 </h3>
                 <button 
                   onClick={() => editMode ? handleSaveProfile() : setEditMode(true)}
                   className="text-xs font-black text-black bg-[#03c04a] px-4 py-2 rounded uppercase tracking-widest hover:bg-white transition-colors"
                 >
                   {editMode ? 'Save Data' : 'Edit Info'}
                 </button>
              </div>
              
              <div className="space-y-8">
                <div>
                   <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-3">Primary Goal</label>
                   {editMode ? (
                     <select 
                       className="w-full bg-black/60 border border-white/10 rounded-xl text-white p-4 focus:border-[#03c04a] outline-none transition-colors"
                       value={profileData.goal}
                       onChange={(e) => setProfileData({...profileData, goal: e.target.value})}
                     >
                       <option>General Fitness</option>
                       <option>Muscle Gain</option>
                       <option>Weight Loss</option>
                       <option>Endurance</option>
                       <option>Flexibility</option>
                     </select>
                   ) : (
                     <div className="flex items-center gap-3 text-white font-bold bg-black/30 p-4 rounded-xl border border-white/5">
                       <Target size={20} className="text-[#03c04a]" /> {user.goal || 'General Fitness'}
                     </div>
                   )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-3">Age</label>
                    {editMode ? (
                        <input 
                        type="number"
                        className="w-full bg-black/60 border border-white/10 rounded-xl text-white p-4 focus:border-[#03c04a] outline-none transition-colors"
                        value={profileData.age}
                        onChange={(e) => setProfileData({...profileData, age: e.target.value})}
                        />
                    ) : (
                        <div className="text-white font-bold text-xl bg-black/30 p-4 rounded-xl border border-white/5">{user.age || '--'} <span className="text-zinc-500 text-sm">YRS</span></div>
                    )}
                    </div>
                    <div>
                        <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-3">Joined</label>
                        <div className="text-white font-bold text-xl bg-black/30 p-4 rounded-xl border border-white/5">{joinYear}</div>
                    </div>
                </div>
                 <div>
                   <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-3">Communication</label>
                   <div className="text-zinc-300 bg-black/30 p-4 rounded-xl border border-white/5 text-sm font-mono">{user.email}</div>
                </div>
              </div>
           </div>

           <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-black/60 to-[#03c04a]/10 hover:border-[#03c04a]/30 transition-all">
                  <div className="text-[#03c04a] text-xs font-black uppercase tracking-widest mb-3">Loyalty Points</div>
                  <div className="text-5xl font-black text-white">{user.loyaltyPoints}</div>
                </div>
                <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-black/60 to-black hover:border-white/20 transition-all">
                  <div className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-3">Years Active</div>
                  <div className="text-5xl font-black text-white">{years < 1 ? '< 1' : years}</div>
                </div>
                <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-black/60 to-black hover:border-white/20 transition-all">
                  <div className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-3">Classes Booked</div>
                  <div className="text-5xl font-black text-white">{bookings.length}</div>
                </div>
              </div>

              <div className="glass-panel p-10 rounded-3xl border border-white/5 shadow-xl">
                <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3 uppercase italic">
                   Upcoming <span className="text-[#03c04a]">Sessions</span>
                </h3>
                {userBookings.length > 0 ? (
                  <div className="grid gap-4">
                    {userBookings.map(cls => (
                      <div key={cls.id} className="flex items-center justify-between bg-black/40 p-6 rounded-2xl border-l-4 border-l-[#03c04a] border-y border-r border-white/5 hover:bg-black/60 transition-colors">
                        <div>
                          <h4 className="font-black text-white text-xl uppercase italic mb-1">{cls.name}</h4>
                          <p className="text-sm text-zinc-400 font-mono font-bold bg-white/5 px-3 py-1 rounded inline-block">
                              <span className="text-[#03c04a]">{cls.day}</span> • {cls.time} • Coach {cls.trainer}
                          </p>
                        </div>
                        <button 
                          onClick={() => onCancel(cls.id)}
                          className="text-zinc-500 hover:text-red-500 hover:bg-red-500/10 px-4 py-2 rounded-lg transition-colors text-sm uppercase tracking-widest font-black"
                        >
                          Cancel
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-black/30 rounded-2xl border border-white/5">
                    <p className="text-zinc-400 mb-6 font-mono uppercase tracking-widest">No classes scheduled.</p>
                    <Button variant="outline" className="mx-auto" onClick={() => navigate('/schedule')}>View Schedule</Button>
                  </div>
                )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export const AdminDashboard = ({ classes, onLogout, setClasses }) => {
    const navigate = useNavigate();
    const [newClass, setNewClass] = useState({ name: '', trainer: '', time: '', day: 'Mon', slots: 20 });
    
    const handleAddClass = (e) => { 
        e.preventDefault(); 
        setClasses([...classes, { ...newClass, id: Date.now(), booked: 0 }]); 
        setNewClass({ name: '', trainer: '', time: '', day: 'Mon', slots: 20 }); 
    };
    const handleDelete = (id) => { setClasses(classes.filter(c => c.id !== id)); };

    return (
      <div className="min-h-screen pt-32 pb-12 relative z-10 mx-6">
        <div className="container mx-auto">
          <div className="glass-panel p-10 rounded-3xl mb-12 flex justify-between items-center border border-[#03c04a]/30 shadow-[0_0_30px_rgba(3,192,74,0.1)]">
            <h1 className="text-4xl font-black text-white uppercase italic flex items-center gap-4">
                <Shield size={40} className="text-[#03c04a]" /> Admin <span className="text-[#03c04a]">Portal</span>
            </h1>
            <Button variant="outline" onClick={() => { onLogout(); navigate('/'); }}>Logout</Button>
          </div>
          <div className="glass-panel p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest">Class Schedule Management</h3>
             <div className="space-y-4">
                {classes.map(cls => (
                    <div key={cls.id} className="flex justify-between items-center bg-black/40 p-5 rounded-xl border border-white/5">
                        <span className="text-white font-bold">{cls.name} <span className="text-[#03c04a] mx-2">|</span> {cls.day} {cls.time} <span className="text-[#03c04a] mx-2">|</span> {cls.trainer}</span>
                        <button onClick={() => handleDelete(cls.id)} className="text-zinc-500 hover:text-red-500 bg-red-500/10 hover:bg-red-500/20 p-2 rounded-lg transition-all"><X size={20}/></button>
                    </div>
                ))}
             </div>
             <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Add Class Form (To be implemented)</p>
             </div>
          </div>
        </div>
      </div>
    );
};
