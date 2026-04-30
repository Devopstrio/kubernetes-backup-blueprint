from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, backups, restore, dr, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(backups.router, prefix="/backups", tags=["backups"])
api_router.include_router(restore.router, prefix="/restore", tags=["restore"])
api_router.include_router(dr.router, prefix="/dr", tags=["dr"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
