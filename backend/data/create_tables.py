from backend.data.init import get_db

def create_tables():
    with get_db() as conn:
        curs = conn.cursor()

        # user table
        qry = """
            CREATE TABLE IF NOT EXISTS user(
                id INTEGER PRIMARY KEY,
                name TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
            )
        """
        curs.execute(qry)

        #topics table
        qry = """
            CREATE TABLE IF NOT EXISTS topics(
                id INTEGER PRIMARY KEY,
                topic TEXT UNIQUE NOT NULL
            )
        """
        curs.execute(qry)

        #questions table
        qry = """
            CREATE TABLE IF NOT EXISTS questions(
                id INTEGER PRIMARY KEY,
                topic_id INTEGER NOT NULL,

                FOREIGN KEY(topic_id) REFERENCES topics(id)
            )
        """
        curs.execute(qry)

        #attempts table
        qry = """
            CREATE TABLE IF NOT EXISTS attempts(
                id INTEGER PRIMARY KEY,
                user_id INTEGER NOT NULL,
                question_id INTEGER NOT NULL,
                correct INTEGER NOT NULL,
                answered_at TEXT NOT NULL,

                FOREIGN KEY(user_id) REFERENCES user(id),
                FOREIGN KEY(question_id) REFERENCES questions(id)
            )
        """
        curs.execute(qry)