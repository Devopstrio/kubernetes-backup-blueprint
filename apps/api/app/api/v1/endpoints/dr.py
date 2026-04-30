from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_dr():
    return {'status': 'ok'}
