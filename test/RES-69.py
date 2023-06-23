from flask import request
import sqlalchemy
import os

@app.route('/example')
def get_users():
    user = request.args["user"]
    connection_string =  os.getenv('DB_URL')
    engine = sqlalchemy.create_engine(connection_string)
    conn = engine.connect()

    conn.execute("SELECT user FROM users WHERE user = '" + user + "'")