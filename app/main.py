from flask import render_template

from app import webapp


@webapp.route('/')
def hello_world():
    return render_template("welcome.html")

# @webapp.route('/styles/dark_souls.css')
# def get_style_sheet():
#     return render_template("/styles/dark_souls.css")
