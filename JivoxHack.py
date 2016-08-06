from flask import Flask, jsonify

app = Flask(__name__)

author = 'Sumit'
#!flask/bin/python
from flask import request
import json
import string
import random
import datetime
import MySQLdb
from CONSTANTS_LIST import *
from MySQLdb import escape_string as thwart


def name_generator(size=6, chars=string.ascii_uppercase ):
    return ''.join(random.choice(chars) for _ in range(size))

def num_generator(min, max):
    return random.randint(min,max)

def connection():
    conn = MySQLdb.connect(host="localhost",
                           user = "root",
                           passwd = "",
                           db = "jivoxDb")
    c = conn.cursor()

    return c, conn

@app.route('/populateData', methods=["POST"])
def populateData():
    data = request.json
    if "count" not in data.keys() or not isinstance(data["count"], int):
        return json.dump("Count of data not provided")
    else:
        c, conn = connection()
        count = data["count"]
        for i in range(0,count):
            name = name_generator()
            age = num_generator(0,89)
            stateCode = num_generator(1,35)
            studies1 = studies[num_generator(0, len(studies) - 1)]

            if (studies1 == "Yes"):
                currClass = currentClass[num_generator(0,len(currentClass)-1)]
                lastClass1 = lastClass[num_generator(0,len(lastClass)-1)]
            elif (studies1 == "Done"):
                currClass = currentClass[num_generator(0,len(currentClass)-1)]
                lastClass1 = currClass
            elif(studies1 == "No"):
                currClass = "ILLITERATE"
                lastClass1 = currClass
            else:
                currClass = "UNCLASSIFIED"
                lastClass1 = currClass
            gend = gender[num_generator(0, len(gender) - 1)]

            c.execute("INSERT INTO "+eduDB+" (name, age, gender, stateCode, studies, currentClass, lastClass) VALUES (%s, %s, %s, %s, %s, %s, %s)",
                          (thwart(name), thwart(str(age)), thwart(gend), thwart(str(stateCode)), thwart(studies1), thwart(currClass), thwart(lastClass1)))
            conn.commit()
        c.close()
        conn.close()
        return "Data Population Successful"

@app.route('/getStateEducationData', methods=["POST"])
def getEduData():
    data = request.json
    if "stateCode" not in data.keys():
        return json.dump("State Code is not passed !!")
    else:
        c,conn = connection()
        state = data["stateCode"]
        c.execute("SELECT COUNT(*) FROM " + eduDB + " WHERE gender = 'Female';")
        x = c.fetchone()
        for row in x:
            print row

        c.close()
        conn.close()
        return "Did Something"

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
