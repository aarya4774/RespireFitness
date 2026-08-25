import React, { useState } from 'react';
import { User, Activity, Heart, MessageSquare, Flame, Trophy, TrendingUp, Crown } from 'lucide-react';
import { MOCK_LEADERBOARD } from '../lib/data';

export default function Community({ posts, onLike, onPost, user, onAuthReq }) {
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      onAuthReq();
      return;
    }
    if (newPost.trim()) {
      onPost(newPost);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 relative z-10 mx-6">
      <div className="container mx-auto">
        <div className="mb-12 text-center glass-card p-12 rounded-3xl border border-white/5 shadow-2xl">
            <span className="inline-block py-2 px-6 rounded-full border border-[#03c04a] text-[#03c04a] text-xs font-black tracking-widest uppercase mb-4 bg-[#03c04a]/10 backdrop-blur-md">
                The Tribe
            </span>
            <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6">
                Community <span className="text-[#03c04a] drop-shadow-[0_0_15px_rgba(3,192,74,0.8)]">Hub</span>
            </h1>
            <p className="text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
                Connect with the fittest community in Sangli. Share your wins, track your streaks, and get inspired.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(3,192,74,0.1)]">
                    <form onSubmit={handlePostSubmit} className="relative group">
                        <div className="flex gap-4">
                            <div className="w-14 h-14 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0 border-2 border-[#03c04a]/50">
                                {user ? (
                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    <User className="w-full h-full p-3 text-zinc-500" />
                                )}
                            </div>
                            <div className="flex-grow">
                                <input 
                                    type="text" 
                                    placeholder={user ? `What's on your mind, ${user.name.split(' ')[0]}?` : "Login to share your progress..."}
                                    className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl text-white focus:border-[#03c04a] outline-none transition-all placeholder:text-zinc-500 mb-4 shadow-inner"
                                    value={newPost}
                                    onChange={(e) => setNewPost(e.target.value)}
                                    onClick={() => !user && onAuthReq()}
                                />
                                <div className="flex justify-end">
                                    <button 
                                        type="submit"
                                        className={`bg-[#03c04a] text-black px-8 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all ${!newPost.trim() && 'opacity-50 cursor-not-allowed'}`}
                                        disabled={!newPost.trim()}
                                    >
                                        Post Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <div key={post.id} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[#03c04a]/40 transition-all hover:shadow-[0_0_30px_rgba(3,192,74,0.15)] group relative">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <img src={post.avatar} alt={post.user} className="w-14 h-14 rounded-full border-2 border-zinc-700 group-hover:border-[#03c04a] transition-colors shadow-lg" />
                                    <div>
                                        <h4 className="text-white font-bold text-xl">{post.user}</h4>
                                        <span className="text-xs text-[#03c04a] font-mono flex items-center gap-1 mt-1 font-bold">
                                            {post.time} • <Activity size={12} className="text-[#03c04a]" /> Activity
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-zinc-200 text-lg leading-relaxed mb-6 pl-16 border-l-4 border-zinc-800 group-hover:border-[#03c04a]/50 transition-colors">
                                "{post.content}"
                            </p>
                            <div className="flex gap-8 text-zinc-400 text-sm font-bold uppercase tracking-widest pl-16">
                                <button 
                                    onClick={() => onLike(post.id)}
                                    className={`flex items-center gap-2 transition-all group/btn bg-black/30 px-4 py-2 rounded-lg hover:bg-black/50 ${post.likedByUser ? 'text-[#03c04a] border border-[#03c04a]/50' : 'hover:text-[#03c04a] border border-transparent'}`}
                                >
                                    <Heart 
                                        size={18} 
                                        className={`${post.likedByUser ? 'fill-[#03c04a] animate-pop' : ''}`} 
                                    /> 
                                    {post.likes}
                                </button>
                                <button 
                                    className="flex items-center gap-2 hover:text-white transition-colors bg-black/30 px-4 py-2 rounded-lg hover:bg-black/50 border border-transparent"
                                    onClick={() => !user && onAuthReq()}
                                >
                                    <MessageSquare size={18} /> Reply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                     {user && (
                        <div className="bg-gradient-to-br from-[#03c04a] to-emerald-700 p-8 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(3,192,74,0.4)] border border-white/20">
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <div className="text-black/80 text-xs font-black uppercase tracking-widest mb-1">Your Streak</div>
                                    <div className="text-5xl font-black text-white flex items-center gap-2 drop-shadow-md">
                                        {user.streak || 15} <Flame fill="white" size={36} className="animate-pulse" />
                                    </div>
                                    <div className="text-black font-bold mt-2 uppercase tracking-wide">Days Consistent</div>
                                </div>
                                <Trophy size={64} className="text-white/20" />
                            </div>
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        </div>
                     )}

                    <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-white/5 bg-black/40 backdrop-blur-md">
                            <h3 className="text-xl font-black text-white uppercase italic flex items-center gap-3">
                                <TrendingUp className="text-[#03c04a]" size={24} /> Leaderboard
                            </h3>
                        </div>
                        <div className="divide-y divide-white/5 bg-black/20">
                            {MOCK_LEADERBOARD.map((member, index) => (
                                <div key={member.id} className="p-5 flex items-center gap-4 hover:bg-white/5 transition-colors group">
                                    <div className="w-8 text-center font-black text-zinc-500 italic text-2xl group-hover:text-[#03c04a] transition-colors">
                                        {index + 1}
                                    </div>
                                    <div className="relative">
                                        <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full border-2 border-zinc-700 group-hover:border-[#03c04a] transition-all" />
                                        {index === 0 && <Crown size={16} className="absolute -top-3 -right-2 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]" />}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-white font-bold text-md">{member.name}</div>
                                        <div className="text-zinc-400 text-xs uppercase tracking-wider font-mono mt-1">{member.status}</div>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#03c04a] font-bold font-mono text-lg bg-[#03c04a]/10 px-3 py-1 rounded-lg">
                                        {member.streak} <Flame size={14} fill="#03c04a" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-black/40 text-center hover:bg-black/60 transition-colors cursor-pointer">
                            <button className="text-xs text-zinc-400 hover:text-[#03c04a] uppercase tracking-widest font-black transition-colors w-full h-full py-2">View Full Rankings</button>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden">
                         <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#03c04a]/20 rounded-full blur-3xl"></div>
                         <h4 className="text-white font-black text-xl mb-3 uppercase italic relative z-10">Challenge of the Week</h4>
                         <p className="text-zinc-300 text-sm mb-6 leading-relaxed relative z-10">Complete 5 HIIT sessions this week to earn double loyalty points.</p>
                         <div className="w-full bg-black/50 h-3 rounded-full mb-3 border border-white/5 relative z-10 overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-600 to-[#03c04a] h-full rounded-full w-[60%] shadow-[0_0_10px_rgba(3,192,74,0.8)]"></div>
                         </div>
                         <div className="flex justify-between text-xs text-[#03c04a] uppercase font-bold tracking-widest relative z-10">
                            <span>Progress</span>
                            <span>3 / 5 Done</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
