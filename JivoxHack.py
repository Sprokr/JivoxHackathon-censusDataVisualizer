from flask import Flask

app = Flask(__name__)

import MySQLdb


def connection():
    conn = MySQLdb.connect(host="localhost",
                           user = "root",
                           passwd = "",
                           db = "jivoxDb")
    c = conn.cursor()

    return c, conn


@app.route('/')
def hello_world():
    return 'Hello World!'




@app.route('/checkConn', methods=["GET","POST"])
def register_page():
    try:
        c, conn = connection()
        return("okay")
    except Exception as e:
        return(str(e))






if __name__ == '__main__':
    app.run()
