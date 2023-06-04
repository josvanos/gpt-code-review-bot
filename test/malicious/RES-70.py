from flask import request
import sqlalchemy
import os

@app.route('/example')
def get_users():
    user = request.args["user"]
    connection_string =  os.getenv('DB_URL')
    engine = sqlalchemy.create_engine(connection_string)
    metadata = sqlalchemy.MetaData(bind=engine, reflect=True)
    users = metadata.tables['users']
    conn = engine.connect()

    sql = users.select().where(users.c.user == user)
    conn.execute(sql)