resource "aws_s3_bucket" "k8s_backups" {
  bucket = "devopstrio-kubernetes-backups-${var.env}"
  
  tags = {
    Environment = var.env
    Purpose     = "Kubernetes-Backup-Storage"
  }
}

resource "aws_s3_bucket_versioning" "k8s_backups_versioning" {
  bucket = aws_s3_bucket.k8s_backups.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_public_access_block" "k8s_backups_privacy" {
  bucket = aws_s3_bucket.k8s_backups.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "k8s_backups_encryption" {
  bucket = aws_s3_bucket.k8s_backups.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
