from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient('mongodb+srv://sarvagyajain00:q261To7OiG6VOxrs@cluster0.9mhda6m.mongodb.net/?retryWrites=true&w=majority')
print(client)
db = client['todo_db']
todos_collection = db['todos']


@app.route('/api/todos', methods=['GET'])
def get_todos():
        # todos = list(todos_collection.find({},{'_id':0,'title':1}))
        # return jsonify(todos)
        todos = todos_collection.find()
        todoJson =[]
        for data in todos:
            id=data['_id']
            title = data['title']

            dataDic = {
                "id" : str(id),
                "title" : title
            }
            todoJson.append(dataDic)
        return jsonify(todoJson)

@app.route('/api/todos', methods=['POST'])
def create_todo():
        body = request.json
        title=body['title']
        todo = {
            'title': title
        }
        todos_collection.insert_one(todo)
        return jsonify({'message': 'Todo created successfully'}), 201



@app.route('//api/todos/<todo_id>' , methods=['PUT'])
def update_todo(todo_id):
    # body=request.json
    title=request.json.get('title')
    todos_collection.update_one(
          {'_id':ObjectId(todo_id)},
          {
                "$set":{
                      "title":title
                }
          }
    ) 
    return jsonify({
        'status': 'update complete'
    })

@app.route('/api/todos/<todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
        todos_collection.delete_one({'_id': ObjectId(todo_id)})
        return jsonify({'message': 'Todo deleted successfully'}), 200


if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)
