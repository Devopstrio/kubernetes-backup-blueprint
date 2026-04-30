from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_backups():
    return {'status': 'ok'}
