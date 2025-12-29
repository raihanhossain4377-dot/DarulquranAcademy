
import React, { useState } from 'react';
import { User, ShieldCheck, GraduationCap, ArrowRight, BookOpen } from 'lucide-react';

interface LoginProps {
  onLogin: (role: 'student' | 'teacher' | 'admin') => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'admin' | null>(null);

  const roles = [
    { id: 'student', label: 'Student', icon: <User className="w-6 h-6" />, desc: 'Access your lessons and progress' },
    { id: 'teacher', label: 'Teacher', icon: <GraduationCap className="w-6 h-6" />, desc: 'Manage your classes and students' },
    { id: 'admin', label: 'Admin', icon: <ShieldCheck className="w-6 h-6" />, desc: 'System statistics and management' },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full space-y-8 animate-fade-in-up">
        <div className="text-center">
          <div className="bg-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-emerald-200 mb-6">
            <BookOpen className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-emerald-950">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Choose your role to enter the academy portal</p>
        </div>

        <div className="grid gap-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`w-full p-5 rounded-2xl border-2 flex items-center gap-4 text-left transition-all ${
                selectedRole === role.id 
                  ? 'bg-emerald-50 border-emerald-600 shadow-lg shadow-emerald-100' 
                  : 'bg-white border-slate-100 hover:border-emerald-200'
              }`}
            >
              <div className={`p-3 rounded-xl ${selectedRole === role.id ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {role.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-emerald-950">{role.label}</h3>
                <p className="text-sm text-slate-500">{role.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => selectedRole && onLogin(selectedRole)}
          disabled={!selectedRole}
          className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 disabled:opacity-50 disabled:scale-100 transition-all flex items-center justify-center gap-2 group transform active:scale-95"
        >
          Enter Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Login;
