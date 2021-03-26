import flask
from mongoengine import ObjectIdField
from application import db
from bson.objectid import ObjectId


class User(db.Document):
    _id = ObjectIdField()
    email = db.StringField(unique=True)
    password = db.StringField()
