import flask
from mongoengine import ObjectIdField
from application import db
from bson.objectid import ObjectId

"""Class for creating model"""


class User(db.Document):
    # Declaring model for user for database
    _id = ObjectIdField()
    email = db.StringField(unique=True)
    password = db.StringField()
