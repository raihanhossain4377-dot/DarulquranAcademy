
import React from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  User, 
  Settings, 
  LogOut, 
  Users, 
  Calendar, 
  PieChart, 
  ShieldCheck,
  Bell,
  Search,
  MessageSquare,
  CheckCircle,
  Clock,
  // Fix: Added GraduationCap to imports
  GraduationCap
} from 'lucide-react';

interface DashboardShellProps {
  user: { role: 'student' | 'teacher' | 'admin'; name: string };
}

const DashboardShell: React.FC<DashboardShellProps> = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('dqa_user');
    window.location.href = '/';
  };

  const menuItems = {
    student: [
      { name: 'Overview', icon: <LayoutDashboard className="w-5 h-5" />, path: '' },
      { name: 'My Courses', icon: <BookOpen className="w-5 h-5" />, path: 'courses' },
      { name: 'My Schedule', icon: <Calendar className="w-5 h-5" />, path: 'schedule' },
      { name: 'Profile', icon: <User className="w-5 h-5" />, path: 'profile' },
    ],
    teacher: [
      { name: 'Overview', icon: <LayoutDashboard className="w-5 h-5" />, path: '' },
      { name: 'My Students', icon: <Users className="w-5 h-5" />, path: 'students' },
      { name: 'Schedule', icon: <Calendar className="w-5 h-5" />, path: 'schedule' },
      { name: 'Performance', icon: <PieChart className="w-5 h-5" />, path: 'performance' },
    ],
    admin: [
      { name: 'Overview', icon: <LayoutDashboard className="w-5 h-5" />, path: '' },
      { name: 'User Control', icon: <Users className="w-5 h-5" />, path: 'users' },
      { name: 'System Stats', icon: <ShieldCheck className="w-5 h-5" />, path: 'stats' },
      { name: 'Settings', icon: <Settings className="w-5 h-5" />, path: 'settings' },
    ]
  }[user.role];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-emerald-950 border-r border-slate-200 flex flex-col hidden lg:flex fixed h-full z-30">
        <div className="p-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">Darul Quran</span>
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-1 mt-4">
          {menuItems.map((item) => {
            const fullPath = `/dashboard${item.path ? '/' + item.path : ''}`;
            const isActive = location.pathname === fullPath;
            return (
              <Link
                key={item.name}
                to={fullPath}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40' 
                    : 'text-emerald-100 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-bold truncate">{user.name}</p>
                <p className="text-emerald-400 text-xs uppercase font-semibold">{user.role}</p>
              </div>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3.5 text-emerald-200 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all font-semibold"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col lg:ml-72 min-h-screen">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl w-96 border border-slate-100">
            <Search className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm text-slate-600 w-full" />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-emerald-600">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>
            <button className="relative text-slate-400 hover:text-emerald-600">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer">
               <span className="text-sm font-bold text-slate-700 hidden sm:block">{user.name}</span>
               <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                 {user.name.split(' ')[0][0]}
               </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Overview user={user} />} />
            <Route path="/courses" element={<Placeholder title="My Courses" />} />
            <Route path="/schedule" element={<Placeholder title="Schedule" />} />
            <Route path="/profile" element={<Placeholder title="My Profile" />} />
            <Route path="/students" element={<Placeholder title="Student Management" />} />
            <Route path="/performance" element={<Placeholder title="Teacher Performance" />} />
            <Route path="/users" element={<Placeholder title="User Directory" />} />
            <Route path="/stats" element={<Placeholder title="Global Stats" />} />
            <Route path="/settings" element={<Placeholder title="System Settings" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const Overview: React.FC<{ user: { role: string; name: string } }> = ({ user }) => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Welcome, {user.name} 👋</h2>
          <p className="text-slate-500">Here's what's happening in your academy today.</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-white border border-slate-200 p-3 rounded-xl flex items-center gap-3 shadow-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-widest">Live Session in 45m</div>
           </div>
        </div>
      </div>

      {user.role === 'student' && <StudentOverview />}
      {user.role === 'teacher' && <TeacherOverview />}
      {user.role === 'admin' && <AdminOverview />}
    </div>
  );
};

const StudentOverview = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-emerald-900 rounded-[2rem] p-10 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700/20 blur-3xl rounded-full translate-x-32 -translate-y-32"></div>
        <h3 className="text-2xl font-bold mb-4">Current Progress</h3>
        <p className="text-emerald-100 mb-8 max-w-md">You've completed 12 lessons in Tajweed Mastery this month. Keep it up!</p>
        <div className="flex items-center gap-6">
           <div className="flex-grow h-3 bg-white/10 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 w-[75%] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
           </div>
           <span className="font-bold">75%</span>
        </div>
        <button className="mt-8 bg-white text-emerald-950 font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all">Continue Lesson 13</button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
           <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
           <h4 className="font-bold text-slate-900">12 Juz</h4>
           <p className="text-slate-500 text-sm">Memorized</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
           <Clock className="w-8 h-8 text-emerald-600 mb-4" />
           <h4 className="font-bold text-slate-900">42 Hours</h4>
           <p className="text-slate-500 text-sm">Learning Time</p>
        </div>
      </div>
    </div>

    <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
       <h4 className="font-bold text-slate-900 mb-6">Upcoming Classes</h4>
       <div className="space-y-4">
          {[
            { title: 'Tajweed Mastery', time: 'Today, 4:00 PM', instructor: 'Sheikh Ahmed' },
            { title: 'Quran Reading', time: 'Tomorrow, 10:00 AM', instructor: 'Ustadha Sarah' },
            { title: 'Islamic Studies', time: 'Wed, 2:30 PM', instructor: 'Imam Yusuf' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-slate-100">
               <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center font-bold text-emerald-700">
                 {i + 1}
               </div>
               <div>
                  <h5 className="font-bold text-slate-900 text-sm">{item.title}</h5>
                  <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase mt-1">{item.instructor}</p>
               </div>
            </div>
          ))}
       </div>
    </div>
  </div>
);

const TeacherOverview = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
         <h4 className="font-bold text-slate-900 mb-6">Class Schedule Today</h4>
         <div className="space-y-4">
            {[
              { student: 'Zaid Al-Harbi', level: 'Intermediate', time: '09:00 - 10:00', status: 'Completed' },
              { student: 'Layla Bakri', level: 'Beginner', time: '11:00 - 12:00', status: 'Upcoming' },
              { student: 'Omar Bakir', level: 'Hifz', time: '14:00 - 15:30', status: 'Upcoming' }
            ].map((cls, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                       {cls.student.charAt(0)}
                    </div>
                    <div>
                       <h5 className="font-bold text-slate-900 text-sm">{cls.student}</h5>
                       <p className="text-xs text-slate-500">{cls.level}</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{cls.time}</p>
                    <p className={`text-[10px] font-bold uppercase mt-1 ${cls.status === 'Completed' ? 'text-emerald-600' : 'text-blue-500'}`}>
                       {cls.status}
                    </p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
       <h4 className="font-bold text-slate-900 mb-6">Quick Stats</h4>
       <div className="space-y-6">
          <div className="flex items-center justify-between">
             <span className="text-slate-500 text-sm">Total Students</span>
             <span className="font-bold text-slate-900">18</span>
          </div>
          <div className="flex items-center justify-between">
             <span className="text-slate-500 text-sm">Hours Taught</span>
             <span className="font-bold text-slate-900">142</span>
          </div>
          <div className="flex items-center justify-between">
             <span className="text-slate-500 text-sm">Parent Rating</span>
             <div className="flex items-center gap-1">
                <span className="font-bold text-slate-900">4.9</span>
                <span className="text-emerald-500 text-xs">★</span>
             </div>
          </div>
       </div>
       <button className="w-full mt-10 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-100">Send Monthly Reports</button>
    </div>
  </div>
);

const AdminOverview = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {[
         { label: 'Total Students', value: '1,540', change: '+12%', icon: <Users className="w-5 h-5 text-emerald-600" /> },
         // Fix: GraduationCap icon is now correctly imported
         { label: 'Active Teachers', value: '54', change: '+2', icon: <GraduationCap className="w-5 h-5 text-emerald-600" /> },
         { label: 'Monthly Revenue', value: '$12,450', change: '+5%', icon: <PieChart className="w-5 h-5 text-emerald-600" /> },
         { label: 'System Health', value: '99.9%', change: 'Stable', icon: <ShieldCheck className="w-5 h-5 text-emerald-600" /> }
       ].map((stat, i) => (
         <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <div className="bg-emerald-50 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
               {stat.icon}
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase mb-1">{stat.label}</p>
            <h4 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h4>
            <p className="text-[10px] font-bold text-emerald-600">{stat.change} since last month</p>
         </div>
       ))}
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
       <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-6">Pending Enrollments</h4>
          <div className="space-y-4">
             {[
               { name: 'Sami Yusuf', country: 'United Kingdom', date: '2 hours ago' },
               { name: 'Amira Ahmed', country: 'United States', date: '5 hours ago' },
               { name: 'Zain Bakri', country: 'UAE', date: '1 day ago' }
             ].map((enroll, i) => (
               <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div>
                     <p className="font-bold text-slate-900 text-sm">{enroll.name}</p>
                     <p className="text-xs text-slate-500">{enroll.country}</p>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] text-slate-400 mb-2">{enroll.date}</p>
                     <button className="text-[10px] font-bold text-emerald-600 hover:underline uppercase">Approve</button>
                  </div>
               </div>
             ))}
          </div>
       </div>

       <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-6">Server Status</h4>
          <div className="space-y-6">
             <div>
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                   <span>Web Server</span>
                   <span className="text-emerald-600">Active</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 w-[95%]"></div>
                </div>
             </div>
             <div>
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                   <span>Database</span>
                   <span className="text-emerald-600">Optimized</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 w-[88%]"></div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
);

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="animate-fade-in-up">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">{title}</h2>
    <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2rem] p-24 text-center">
       <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Settings className="w-10 h-10 text-slate-300" />
       </div>
       <h3 className="text-lg font-bold text-slate-900">Section Under Development</h3>
       <p className="text-slate-500 max-w-sm mx-auto mt-2"> we are currently building this feature. Please check back later for updates.</p>
    </div>
  </div>
);

export default DashboardShell;
