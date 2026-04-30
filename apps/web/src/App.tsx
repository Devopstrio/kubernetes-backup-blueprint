import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import BackupDashboard from './pages/BackupDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Kubernetes resilience engine is currently synchronizing with the multi-cloud storage backends and Velero orchestration agents. Disaster recovery workflows and workload restoration controls will be fully operational once the backup metadata indexing is complete.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<BackupDashboard />} />
          <Route path="/backups" element={<Placeholder name="Backup Repository Hub" />} />
          <Route path="/restore" element={<Placeholder name="Restore & Recovery Workflows" />} />
          <Route path="/dr" element={<Placeholder name="Disaster Recovery Orchestration" />} />
          <Route path="/snapshots" element={<Placeholder name="Volume Snapshot Explorer" />} />
          <Route path="/validation" element={<Placeholder name="Integrity & Recovery Validation" />} />
          <Route path="/metrics" element={<Placeholder name="RPO / RTO & Resilience Metrics" />} />
          <Route path="/policies" element={<Placeholder name="Backup Retention & Compliance Policies" />} />
          <Route path="/audit" element={<Placeholder name="Immutable Integrity Ledger" />} />
          <Route path="/settings" element={<Placeholder name="System & RBAC Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
