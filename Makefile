.PHONY: help build up down test lint migrate create-backup run-restore validate-backup simulate-dr

help:
	@echo "Kubernetes Backup Blueprint - Management Commands"
	@echo "-----------------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "create-backup   : Manually trigger a cluster/namespace backup"
	@echo "run-restore     : Execute a recovery workflow for a specific workload"
	@echo "validate-backup : Perform integrity and recovery validation on latest backups"
	@echo "simulate-dr     : Orchestrate a full Disaster Recovery drill"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

create-backup:
	docker-compose exec api python scripts/backup/trigger_velero.py

run-restore:
	docker-compose exec api python scripts/restore/execute_recovery.py

validate-backup:
	docker-compose exec api python scripts/validate/check_integrity.py

simulate-dr:
	docker-compose exec api python scripts/simulate-dr/orchestrate_drill.py
