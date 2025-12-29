
import React, { useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
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
  GraduationCap,
  AlertCircle,
  X,
  Edit,
  Trash2,
  Filter,
  MoreVertical,
  Plus,
  Lock,
  ChevronRight,
  Shield
} from 'lucide-react';

interface UserPermissions {
  canManageUsers: boolean;
  canEditCourses: boolean;
  canViewRevenue: boolean;
  canManageSchedule: boolean;
  canAccessSettings: boolean;
  canMessageAll: boolean;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  joinedDate: string;
  status: 'active' | 'inactive';
  permissions: UserPermissions;
}

const DEFAULT_PERMISSIONS: Record<UserData['role'], UserPermissions> = {
  admin: {
    canManageUsers: true,
    canEditCourses: true,
    canViewRevenue: true,
    canManageSchedule: true,
    canAccessSettings: true,
    canMessageAll: true,
  },
  teacher: {
    canManageUsers: false,
    canEditCourses: false,
    canViewRevenue: false,
    canManageSchedule: true,
    canAccessSettings: false,
    canMessageAll: false,
  },
  student: {
    canManageUsers: false,
    canEditCourses: false,
    canViewRevenue: false,
    canManageSchedule: false,
    canAccessSettings: false,
    canMessageAll: false,
  },
};

const MOCK_USERS: UserData[] = [
  { id: '1', name: 'Sheikh Ahmed', email: 'ahmed@darulquran.com', role: 'teacher', joinedDate: '2023-01-15', status: 'active', permissions: { ...DEFAULT_PERMISSIONS.teacher, canEditCourses: true } },
  { id: '2', name: 'Zaid Al-Harbi', email: 'zaid@example.com', role: 'student', joinedDate: '2023-05-20', status: 'active', permissions: DEFAULT_PERMISSIONS.student },
  { id: '3', name: 'Sarah Fatima', email: 'sarah@example.com', role: 'student', joinedDate: '2023-06-02', status: 'active', permissions: DEFAULT_PERMISSIONS.student },
  { id: '4', name: 'Admin User', email: 'admin@darulquran.com', role: 'admin', joinedDate: '2022-12-01', status: 'active', permissions: DEFAULT_PERMISSIONS.admin },
  { id: '5', name: 'Ustadha Maria', email: 'maria@darulquran.com', role: 'teacher', joinedDate: '2023-02-10', status: 'active', permissions: DEFAULT_PERMISSIONS.teacher },
  { id: '6', name: 'Omar Bakir', email: 'omar@example.com', role: 'student', joinedDate: '2023-08-11', status: 'inactive', permissions: DEFAULT_PERMISSIONS.student },
  { id: '7', name: 'Layla Bakri', email: 'layla@example.com', role: 'student', joinedDate: '2023-09-01', status: 'active', permissions: DEFAULT_PERMISSIONS.student },
];

interface DashboardShellProps {
  user: { role: 'student' | 'teacher' | 'admin'; name: string };
}

const DashboardShell: React.FC<DashboardShellProps> = ({ user }) => {
  const location = useLocation();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

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
      { name: 'User Management', icon: <Users className="w-5 h-5" />, path: 'users' },
      { name: 'System Stats', icon: <ShieldCheck className="w-5 h-5" />, path: 'stats' },
      { name: 'Settings', icon: <Settings className="w-5 h-5" />, path: 'settings' },
    ]
  }[user.role];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-emerald-950/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <div className="bg-red-50 p-3 rounded-2xl">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <button onClick={() => setShowLogoutConfirm(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Confirm Logout</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Are you sure you want to log out of your session? You will need to enter your credentials again to access your dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 px-6 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={handleLogout}
                className="flex-1 py-3 px-6 rounded-xl font-bold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-100 transition-all flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}

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
            onClick={() => setShowLogoutConfirm(true)}
            className="w-full flex items-center gap-4 px-4 py-3.5 text-emerald-200 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all font-semibold"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      <div className="flex-grow flex flex-col lg:ml-72 min-h-screen">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl w-96 border border-slate-100">
            <Search className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Global search..." className="bg-transparent border-none outline-none text-sm text-slate-600 w-full" />
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

        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Overview user={user} />} />
            <Route path="/users" element={user.role === 'admin' ? <UserManagement /> : <Navigate to="/dashboard" />} />
            <Route path="/courses" element={<Placeholder title="My Courses" />} />
            <Route path="/schedule" element={<Placeholder title="Schedule" />} />
            <Route path="/profile" element={<Placeholder title="My Profile" />} />
            <Route path="/students" element={<Placeholder title="Student Management" />} />
            <Route path="/performance" element={<Placeholder title="Teacher Performance" />} />
            <Route path="/stats" element={<Placeholder title="Global Stats" />} />
            <Route path="/settings" element={<Placeholder title="System Settings" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const EditUserModal: React.FC<{ 
  user: UserData; 
  onClose: () => void; 
  onSave: (updatedUser: UserData) => void;
}> = ({ user, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState<UserData>(JSON.parse(JSON.stringify(user)));

  const togglePermission = (key: keyof UserPermissions) => {
    setEditedUser(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [key]: !prev.permissions[key]
      }
    }));
  };

  const permissionLabels: Record<keyof UserPermissions, { title: string, desc: string }> = {
    canManageUsers: { title: 'User Management', desc: 'Can add, edit, or delete users and permissions.' },
    canEditCourses: { title: 'Course Editing', desc: 'Can modify curriculum and course details.' },
    canViewRevenue: { title: 'Financial Access', desc: 'Can view revenue reports and financial data.' },
    canManageSchedule: { title: 'Schedule Control', desc: 'Can modify class timings and calendars.' },
    canAccessSettings: { title: 'System Settings', desc: 'Can modify global academy configuration.' },
    canMessageAll: { title: 'Broadcasting', desc: 'Can send messages to all students or teachers.' },
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2.5rem] w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in-up">
        <div className="flex justify-between items-center p-8 bg-slate-50 border-b border-slate-100">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">User Permissions</h3>
            <p className="text-slate-500 text-sm">Managing access for <span className="font-bold text-emerald-600">{user.name}</span></p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(Object.keys(editedUser.permissions) as Array<keyof UserPermissions>).map(key => (
              <div 
                key={key}
                onClick={() => togglePermission(key)}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer group ${
                  editedUser.permissions[key] 
                    ? 'bg-emerald-50 border-emerald-500 shadow-sm shadow-emerald-100' 
                    : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${editedUser.permissions[key] ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'}`}>
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className={`w-10 h-5 rounded-full transition-colors relative ${editedUser.permissions[key] ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${editedUser.permissions[key] ? 'left-6' : 'left-1'}`}></div>
                  </div>
                </div>
                <h4 className={`font-bold text-sm mb-1 ${editedUser.permissions[key] ? 'text-emerald-950' : 'text-slate-700'}`}>
                  {permissionLabels[key].title}
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-semibold">
                  {permissionLabels[key].desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 border-t border-slate-100 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={() => onSave(editedUser)}
            className="flex-1 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all"
          >
            Save Permissions
          </button>
        </div>
      </div>
    </div>
  );
};

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>(MOCK_USERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [editingUser, setEditingUser] = useState<UserData | null>(null);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = roleFilter === 'all' || user.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [users, searchTerm, roleFilter]);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleSaveUser = (updatedUser: UserData) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setEditingUser(null);
  };

  const getRoleBadge = (role: string) => {
    switch(role) {
      case 'admin': return <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700">Admin</span>;
      case 'teacher': return <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700">Teacher</span>;
      default: return <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">Student</span>;
    }
  };

  return (
    <div className="animate-fade-in-up space-y-6">
      {editingUser && (
        <EditUserModal 
          user={editingUser} 
          onClose={() => setEditingUser(null)} 
          onSave={handleSaveUser} 
        />
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">User Management</h2>
          <p className="text-slate-500 text-sm">Manage access rights and granular permissions for all users.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
          <Plus className="w-4 h-4" /> Add New User
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row gap-4 bg-slate-50/30">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-3 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-100 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select 
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-slate-100 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm cursor-pointer min-w-[140px]"
            >
              <option value="all">All Roles</option>
              <option value="student">Students</option>
              <option value="teacher">Teachers</option>
              <option value="admin">Admins</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">User Details</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Active Permissions</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredUsers.length > 0 ? filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-emerald-600 shadow-sm">
                        {u.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{u.name}</p>
                        <p className="text-xs text-slate-500">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {getRoleBadge(u.role)}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-1.5 flex-wrap max-w-[200px]">
                      {Object.entries(u.permissions).filter(([_, val]) => val).length > 0 ? (
                        Object.entries(u.permissions)
                          .filter(([_, val]) => val)
                          .slice(0, 2)
                          .map(([key]) => (
                            <span key={key} className="p-1.5 bg-slate-100 rounded-md text-slate-400" title={key}>
                              <Shield className="w-3 h-3" />
                            </span>
                          ))
                      ) : (
                        <span className="text-[10px] text-slate-400 italic">None assigned</span>
                      )}
                      {Object.entries(u.permissions).filter(([_, val]) => val).length > 2 && (
                        <span className="text-[10px] text-emerald-600 font-bold self-center">
                          +{Object.entries(u.permissions).filter(([_, val]) => val).length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${u.status === 'active' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                      <span className="text-xs font-medium text-slate-600 capitalize">{u.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => setEditingUser(u)}
                        className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all" 
                        title="Edit Permissions"
                      >
                        <Lock className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all" 
                        title="Edit Profile"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(u.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" 
                        title="Delete User"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center">
                    <div className="max-w-xs mx-auto space-y-3">
                      <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                        <Search className="w-6 h-6 text-slate-300" />
                      </div>
                      <p className="font-bold text-slate-900">No users found</p>
                      <p className="text-sm text-slate-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between text-xs text-slate-500 font-medium">
          <p>Displaying <span className="font-bold text-slate-700">{filteredUsers.length}</span> of <span className="font-bold text-slate-700">{users.length}</span> academy members</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 transition-all">Previous</button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 transition-all">Next</button>
          </div>
        </div>
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
