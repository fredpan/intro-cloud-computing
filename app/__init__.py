from flask import Flask

webapp = Flask(__name__)

from app import main
from app import account_managment