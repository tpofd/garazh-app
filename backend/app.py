from flask import Flask,jsonify,request
#from flask_restful import Api, Resource, reqparse
import random
import json
import fuckdb
app = Flask(__name__)
#api = Api(app)

#get all exps
@app.route('/api/get/exps', methods=['GET'])
def get_exps():
    expsObj = fuckdb.get_all_exps()
    print(expsObj)
    toRet = []
    #json_object = ""
    for o in expsObj:
        print(o)
        #a = ["data"]
        toRet.append({"id":o.id, "name":o.name})
    a = {"data":toRet}
    return jsonify(a)
    #return json_object
#get human moves
@app.route('/api/get/movings/<dude>', methods=['GET'])
def get_movings_by_id(dude):
    print(dude)
    dudeObj = fuckdb.get_dude_movings(dude)
    #print(dudeObj)
    toRet = []
    print("dudeObj",dudeObj)
    for o in dudeObj:
        print(o)
        #a = ["data"]
        toRet.append({"user_id":o.user_id, "action_date":o.action_date, "picture_id":o.picture_id})
    a = {"data":toRet}
    print("To ret:",toRet)
    return jsonify(a)

@app.route('/api/set_move/<uid>/<pid>', methods=['GET'])
def move_user(uid,pid):
    print(uid,pid)
    fuckdb.move_user(uid,pid)
    return jsonify({"success":"true"})


@app.route('/api/add/user', methods=['POST']) #-
def add_user():
    rjson = request.get_json()
    login = rjson["username"]
    role = rjson["role"]
    print(login,role)
    fuckdb.add_user(login,role)
    return jsonify({"success":"true"})

@app.route('/api/add/dude', methods=['POST'])
def add_dude():
    rjson = request.get_json()
    description = rjson["description"]
    print(description)
    fuckdb.add_user(login,role)
    return jsonify({"success":"true"})

#get user by id
@app.route('/api/get/user/<uid>', methods=['GET'])
def get_user(uid):
    print(uid)
    userObj = fuckdb.get_user(uid)
    print(userObj)
    dickt = {"id":userObj.uid, "username":userObj.username, "role":userObj.role}
    json_object = json.dumps(dickt)
    print(json_object)
    return json_object

if __name__ == '__main__':
    app.run(debug=True)
