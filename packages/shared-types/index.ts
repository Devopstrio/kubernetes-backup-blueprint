export enum BackupScope {
  CLUSTER = "CLUSTER",
  NAMESPACE = "NAMESPACE",
  RESOURCE = "RESOURCE"
}

export enum BackupStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  PARTIALLY_FAILED = "PARTIALLY_FAILED",
  FAILED = "FAILED",
  DELETING = "DELETING"
}

export interface K8sBackup {
  id: string;
  name: string;
  scope: BackupScope;
  namespaces?: string[];
  includePVCs: boolean;
  status: BackupStatus;
  createdAt: string;
  expiresAt: string;
  sizeBytes?: number;
  metadata: Record<string, any>;
}

export interface RestoreRequest {
  id: string;
  backupId: string;
  targetClusterId: string;
  namespaceMapping: Record<string, string>;
  status: "PENDING" | "RESTORING" | "COMPLETED" | "FAILED";
  startedAt: string;
  completedAt?: string;
}

export interface DRMetric {
  clusterId: string;
  lastBackupAgeSeconds: number;
  rpoStatus: "HEALTHY" | "DEGRADED" | "CRITICAL";
  rtoSimulationSeconds?: number;
}
