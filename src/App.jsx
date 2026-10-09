import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import Programs from './pages/Programs';
import Schedule from './pages/Schedule';
import Trainers from './pages/Trainers';
import Community from './pages/Community';
import About from './pages/About';
import Dashboard, { AdminDashboard } from './pages/Dashboard';
import { api, INITIAL_CLASSES, MOCK_COMMUNITY_POSTS } from './lib/data';
import { Dumbbell, X } from 'lucide-react';
import { Button } from './components/ui';

const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center">
    <div className="relative">
      <Dumbbell size={80} className="text-[#10b981] animate-pulse" />
    </div>
    <div className="mt-8 font-sans text-sm text-[#10b981] font-semibold tracking-[0.2em] uppercase">Forging Elite Fitness</div>
  </div>
);

const AuthModal = ({ isOpen, onClose, onLogin, onRegister }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '', password: '', name: '', age: '', goal: 'General Fitness'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await onLogin(formData.email, formData.password);
      } else {
        await onRegister(formData.name, formData.email, formData.password, formData.age, formData.goal);
      }
      onClose();
    } catch (err) {
      setError('Try: admin@respire.com / admin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="clean-panel w-full max-w-md p-10 rounded-2xl relative overflow-hidden">
        <button onClick={onClose} className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-all z-10 p-2">
          <X size={20} />
        </button>

        <h2 className="text-3xl font-bold text-white mb-2 relative z-10">
          {isLogin ? 'Member Login' : 'Personalize Profile'}
        </h2>
        <p className="text-[#10b981] text-xs font-semibold mb-8 tracking-wider relative z-10 uppercase">SANGLI'S ELITE FITNESS NETWORK</p>

        {error && <div className="bg-red-900/40 text-red-400 p-4 rounded-xl mb-6 text-sm relative z-10 border border-red-900/50">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {!isLogin && (
            <>
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg text-white p-4 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Age</label>
                  <input
                    type="number"
                    className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg text-white p-4 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all"
                    value={formData.age}
                    onChange={e => setFormData({ ...formData, age: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Primary Goal</label>
                  <select
                    className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg text-white p-4 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all appearance-none"
                    value={formData.goal}
                    onChange={e => setFormData({ ...formData, goal: e.target.value })}
                  >
                    <option>General Fitness</option>
                    <option>Muscle Gain</option>
                    <option>Weight Loss</option>
                    <option>Endurance</option>
                    <option>Flexibility</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg text-white p-4 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg text-white p-4 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <Button type="submit" variant="primary" className="w-full mt-6 py-4" disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Enter The Network' : 'Join The Movement')}
          </Button>
        </form>

        <p className="mt-8 text-center text-neutral-400 text-sm font-medium relative z-10">
          {isLogin ? "New here?" : "Member already?"}
          <button onClick={() => setIsLogin(!isLogin)} className="text-[#10b981] ml-2 hover:text-white transition-colors">
            {isLogin ? 'Create Profile' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [classes, setClasses] = useState(INITIAL_CLASSES);
  const [bookings, setBookings] = useState([]);
  const [showAuth, setShowAuth] = useState(false);
  const [communityPosts, setCommunityPosts] = useState(MOCK_COMMUNITY_POSTS);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (email, password) => {
    const userData = await api.login(email, password);
    setUser(userData);
  };

  const handleRegister = async (name, email, password, age, goal) => {
    const userData = await api.register(name, email, password, age, goal);
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setBookings([]);
  };

  const handleBookClass = async (classId) => {
    if (!user) {
      setShowAuth(true);
      return;
    }
    await api.bookClass(classId, user.id);
    setBookings([...bookings, classId]);
    setClasses(classes.map(c => c.id === classId ? { ...c, booked: c.booked + 1 } : c));
  };

  const handleCancelClass = async (classId) => {
    setBookings(bookings.filter(id => id !== classId));
    setClasses(classes.map(c => c.id === classId ? { ...c, booked: Math.max(0, c.booked - 1) } : c));
  };

  const handleLikePost = (postId) => {
    if (!user) {
      setShowAuth(true);
      return;
    }
    setCommunityPosts(currentPosts => currentPosts.map(post => {
      if (post.id === postId) {
        const isLiked = post.likedByUser;
        return { ...post, likes: isLiked ? post.likes - 1 : post.likes + 1, likedByUser: !isLiked };
      }
      return post;
    }));
  };

  const handleNewPost = (content) => {
    const newPostData = {
      id: Date.now(), user: user.name, avatar: user.avatar || "https://i.pravatar.cc/150?u=default",
      content: content, likes: 0, likedByUser: false, time: "Just now"
    };
    setCommunityPosts([newPostData, ...communityPosts]);
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <Router>
      <div className="font-sans selection:bg-[#10b981] selection:text-black">
        <Navbar onAuthClick={() => setShowAuth(true)} user={user} />

        <main>
          <Routes>
            <Route path="/" element={<Home onJoinClick={() => setShowAuth(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationDetail />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/schedule" element={
              <Schedule user={user} classes={classes} bookings={bookings} onBook={handleBookClass} />
            } />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/community" element={
              <Community posts={communityPosts} onLike={handleLikePost} onPost={handleNewPost} user={user} onAuthReq={() => setShowAuth(true)} />
            } />

            <Route path="/dashboard" element={
              user ? (
                user.role === 'admin'
                  ? <AdminDashboard classes={classes} setClasses={setClasses} onLogout={handleLogout} />
                  : <Dashboard user={user} bookings={bookings} classes={classes} onLogout={handleLogout} onCancel={handleCancelClass} />
              ) : <Navigate to="/" replace />
            } />
          </Routes>
        </main>

        <Footer />

        <AuthModal
          isOpen={showAuth}
          onClose={() => setShowAuth(false)}
          onLogin={handleLogin}
          onRegister={handleRegister}
        />
      </div>
    </Router>
  );
}