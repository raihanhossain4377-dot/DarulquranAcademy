
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ShieldCheck, GraduationCap, ArrowRight, BookOpen, Mail, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: (role: 'student' | 'teacher' | 'admin') => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'admin' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; role?: string }>({});

  const roles = [
    { id: 'student', label: 'Student', icon: <User className="w-6 h-6" />, desc: 'Access your lessons and progress' },
    { id: 'teacher', label: 'Teacher', icon: <GraduationCap className="w-6 h-6" />, desc: 'Manage your classes and students' },
    { id: 'admin', label: 'Admin', icon: <ShieldCheck className="w-6 h-6" />, desc: 'System statistics and management' },
  ] as const;

  const validate = () => {
    const newErrors: { email?: string; password?: string; role?: string } = {};
    
    if (!selectedRole) {
      newErrors.role = 'Please select a role to continue.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && selectedRole) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full space-y-8 animate-fade-in-up">
        <div className="text-center">
          <div className="bg-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-emerald-200 mb-6">
            <BookOpen className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-emerald-950">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Choose your role and enter credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => {
                  setSelectedRole(role.id);
                  setErrors(prev => ({ ...prev, role: undefined }));
                }}
                className={`w-full p-4 rounded-2xl border-2 flex items-center gap-4 text-left transition-all ${
                  selectedRole === role.id 
                    ? 'bg-emerald-50 border-emerald-600 shadow-lg shadow-emerald-100' 
                    : 'bg-white border-slate-100 hover:border-emerald-200'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${selectedRole === role.id ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {role.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-emerald-950 text-sm">{role.label}</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{role.desc}</p>
                </div>
              </button>
            ))}
            {errors.role && (
              <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" /> {errors.role}
              </p>
            )}
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="space-y-1">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  placeholder="name@example.com"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 bg-white transition-all outline-none text-sm ${
                    errors.email ? 'border-red-200 focus:border-red-400' : 'border-slate-100 focus:border-emerald-500'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1 ml-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                <Link to="/forgot-password" className="text-xs text-emerald-600 font-bold hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
                  }}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-12 py-3.5 rounded-xl border-2 bg-white transition-all outline-none text-sm ${
                    errors.password ? 'border-red-200 focus:border-red-400' : 'border-slate-100 focus:border-emerald-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-emerald-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1 ml-1">
                  <AlertCircle className="w-3 h-3" /> {errors.password}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group transform active:scale-95"
          >
            Enter Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="text-center pt-4">
          <p className="text-xs text-slate-500">
            Don't have an account?{' '}
            <Link 
              to="/apply" 
              className="text-emerald-600 font-bold hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Register here
            </Link>
          </p>
          <div className="mt-3 inline-block px-3 py-1 bg-slate-100 rounded-full">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Registration only for teachers and Students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
