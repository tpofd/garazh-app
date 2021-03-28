from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
import random
import json
import db
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
#get all exps
cors = CORS(app)
@app.route('/api/get/exps', methods=['GET'])
@cross_origin()
def get_exps():
    expsObj = db.get_all_exps()
    print(expsObj)
    toRet = []
    #json_object = ""
    for o in expsObj:
        print(o)
        #a = ["data"]
        toRet.append({"id":o.id, "name":o.name})
    a = {"data":toRet}
    return jsonify(a)


@app.route('/api/get/pictures', methods=['GET']) # TODO:
@cross_origin()
def get_pictures():
    expsObj = db.get_all_pictures()
    print(expsObj)
    toRet = []
    #json_object = ""
    for o in expsObj:
        print(o)
        #a = ["data"]
        toRet.append({"picture_id":o.picture_id, "event_id":o.event_id, "x":o.x, "y":o.y, "event_name":o.event_name})
    a = {"data":toRet}
    return jsonify(a)

@app.route('/api/get/plan/<sid>', methods=['GET']) #
@cross_origin()
def get_plan(sid):
    planObj = db.get_plan(sid)
    toRet = []
    #json_object = ""
    for o in planObj:
        print(o)
        #a = ["data"]
        toRet.append({"picture_id":o.picture_id, "event_id":o.event_id, "x":o.x, "y":o.y, "event_name":o.event_name})
    a = {"data":toRet}
    return jsonify(a)

#get human moves
@app.route('/api/get/movings/<dude>', methods=['GET'])
@cross_origin()
def get_movings_by_id(dude):
    print(dude)
    dudeObj = db.get_dude_movings(dude)
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

@app.route('/api/set_move/<uid>/<pid>', methods=['GET'])#+
@cross_origin()
def move_user(uid,pid):
    print(uid,pid)
    db.move_user(uid,pid)
    return jsonify({"success":"true"})


@app.route('/api/add/user', methods=['POST']) #TODo+
@cross_origin()
def add_user():
    rjson = request.get_json()
    login = rjson["username"]
    role = rjson["role"]
    print(login,role)
    db.add_user(login,role)
    return jsonify({"success":"true"})

@app.route('/api/add/exposition', methods=['POST']) #TODO+
@cross_origin()
def add_exposition():
    rjson = request.get_json()
    name = rjson["name"]
    print(name)
    db.add_exposition(name)
    return jsonify({"success":"true"})

@app.route('/api/add/picture', methods=['POST']) #TODO+
@cross_origin()
def add_picture():
    rjson = request.get_json()
    event_id = rjson["event_id"]
    x = rjson["x"]
    y = rjson["y"]
    name = rjson["name"]
    print(event_id,x,y,name)
    db.add_picture(event_id,x,y,name)
    return jsonify({"success":"true"})

@app.route('/api/add/dude', methods=['POST']) #-+
@cross_origin()
def add_dude():
    rjson = request.get_json()
    description = rjson["description"]
    print(description)
    db.add_dude(description)
    return jsonify({"success":"true"})

@app.route('/api/set/completeStatus/<dudeID>/<status>', methods=['GET']) #TODO: fff
@cross_origin()
def setDudeStatus(dudeID,status):
    db.set_dude_status(status,dudeID)
    return jsonify({"success":"true"})

#get user by id
@app.route('/api/get/user/<uid>', methods=['GET']) #++
@cross_origin()
def get_user(uid):
    print(uid)
    userObj = db.get_user(uid)
    print(userObj)
    dickt = {"id":userObj.uid, "username":userObj.username, "role":userObj.role}
    json_object = json.dumps(dickt)
    print(json_object)
    return json_object

if __name__ == '__main__':
    app.run(debug=True)
