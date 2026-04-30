import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  ShieldCheck, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Database,
  RefreshCw,
  Zap,
  Globe
} from 'lucide-react';

const backupVolumeTrends = [
  { day: 'Mon', success: 45, total: 45 },
  { day: 'Tue', success: 48, total: 48 },
  { day: 'Wed', success: 42, total: 45 },
  { day: 'Thu', success: 50, total: 50 },
  { day: 'Fri', success: 55, total: 55 },
  { day: 'Sat', success: 38, total: 38 },
  { day: 'Sun', success: 35, total: 35 },
];

const resourceBreakdown = [
  { name: 'Namespaces', value: 40, color: '#3b82f6' },
  { name: 'PVC Data', value: 30, color: '#2563eb' },
  { name: 'Cluster Specs', value: 20, color: '#60a5fa' },
  { name: 'Secrets/Config', value: 10, color: '#93c5fd' },
];

const KPI_CARDS = [
  { title: 'Global Backup Success', value: '99.2%', trend: '+0.5% MoM', color: 'blue', icon: ShieldCheck },
  { title: 'Active Protected PVs', value: '1.2k', trend: 'RPO: 1h', color: 'blue', icon: Database },
  { title: 'Recovery Confidence', value: 'High', trend: 'Drill Validated', color: 'blue', icon: Zap },
  { title: 'Avg Restore Time', value: '4.5m', trend: '-12% QoQ', color: 'blue', icon: Clock },
];

const BackupDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Resilience & Recovery Center</h1>
          <p className="text-slate-400">Institutional Kubernetes backup orchestration and disaster recovery blueprint.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Schedule Backup
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Initiate Recovery Workflow
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-blue-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-blue-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Backup Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Backup Execution Velocity</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={backupVolumeTrends}>
                <defs>
                  <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="success" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSuccess)" name="Successful Backups" />
                <Area type="monotone" dataKey="total" stroke="#64748b" strokeWidth={2} fillOpacity={0} name="Total Attempts" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Protection Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Resource Protection Coverage</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resourceBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {resourceBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {resourceBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Backup Activity Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Live Backup Operations</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View Policy Catalog</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Backup Object</th>
                <th className="px-6 py-4 font-semibold">Cluster / Target</th>
                <th className="px-6 py-4 font-semibold">Volume Snapshots</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Next Retention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'daily-namespace-payments', cluster: 'EKS-Prod-Main', snapshots: '12 / 12', status: 'Completed', retention: '28 Days' },
                { name: 'hourly-pvc-redis-state', cluster: 'AKS-Global-01', snapshots: '4 / 4', status: 'In Progress', retention: '7 Days' },
                { name: 'on-demand-full-cluster', cluster: 'GKE-Core-Service', snapshots: '85 / 85', status: 'Completed', retention: '1 Year' },
              ].map((op) => (
                <tr key={op.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{op.name}</span>
                      <span className="text-xs text-slate-500 font-mono">ID: bkp-72v...</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{op.cluster}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">{op.snapshots}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      op.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500 animate-pulse'
                    }`}>
                      {op.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 italic">{op.retention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BackupDashboard;
