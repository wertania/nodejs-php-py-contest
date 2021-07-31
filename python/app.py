
from flask import Flask, request, jsonify
from flask_restful import Api
import psycopg2

import psycopg2.extras

app = Flask(__name__)
api = Api(app)

# Connect to your postgres DB


def connect():
    return psycopg2.connect(
        host="192.168.188.59",
        database="testdb",
        user="postgres",
        password="secret")


@app.route('/hello', methods=["GET"])
def hello():
    if request.method == 'GET':
        return "Hello from Python!"


@app.route('/users', methods=["GET"])
def users():
    conn = connect()
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute("SELECT * FROM users")
    records = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(records)


@app.route('/todos', methods=["GET"])
def todos():
    conn = connect()
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute("SELECT * FROM todos ORDER BY user_id ASC")
    records = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(records)


app.run(host="0.0.0.0", port=8002, debug=False)
