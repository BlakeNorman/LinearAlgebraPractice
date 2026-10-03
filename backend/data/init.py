import os
from pathlib import Path
from sqlite3 import connect, Connection

DB_PATH = Path(__file__).resolve().parent / "db" / "Linear_Algebra_Quiz.db"

def get_db() -> Connection:
    db_path = Path(os.environ.get("LINEAR_ALGEBRA_QUIZ_DB", DB_PATH))
    conn = connect(db_path)
    conn.execute("PRAGMA foreign_keys = ON")
    return conn 