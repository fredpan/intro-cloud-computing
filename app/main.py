from flask import render_template

from app import webapp


@webapp.route('/')
def hello_world():
    return render_template("welcome.html")
