from flask import Flask, jsonify, request
from flask_restplus import Api, Resource, fields
from flask_mongoengine import MongoEngine
from flask_cors import CORS
from config import Config
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, jwt_required, create_access_token


app = Flask(__name__)
app.config.from_object(Config)
api = Api(app=app, doc="/", title="Api_CRUD-APP")
CORS(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
db = MongoEngine(app=app)

from application import routes

if __name__ == '__main__':
    app.run()
