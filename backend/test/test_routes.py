import unittest
import json
from application.user_model import User
from mongoengine import connect, disconnect
from application import user_model, routes
import app
from flask import jsonify
from application import app, api, bcrypt

app.testing = True


class ApiResponseMock(object):
       def __init__(self, status_code, response):
        self.status_code = status_code
        self.response = response
        self.text = str(json.dumps(response))


class TestApi(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        disconnect()
        # Creating mock db and establishing connectivity
        connect("mongoenginetest", host="mongomock://localhost")

    @classmethod
    def tearDownClass(cls):
        disconnect()

    def setUp(self):
        """
        Creating mock data for mock db
        """
        self.user_1 = user_model.User(**{'_id': '6065b71f2b7edc50cdf2211b',
                                         'email': 'dan@email.com', 'password': 'qwerty'})
        self.user_2 = user_model.User(**{'_id': '6065b71f2b7edc50cdf531b',
                                         'email': 'mick@email.com', 'password': 'qwerty123'})

        self.userAll = routes.UserAll()
        self.userByEmail = routes.UserByEmail()

    def test_get_all(self):
        with app.app_context():

            expected = jsonify(User.objects.all()).data.decode()
            response = routes.UserAll.get(self.userAll).data.decode()

            self.assertEqual(expected, response)

