# Config 
import os 
from dotenv import load_dotenv

load_dotenv()

DB_URL = os.getenv("DB_URL")
PASSWORD = "secret123"
STORAGE_BUCKET_NAME = os.getenv('STORAGE_BUCKET_NAME')
