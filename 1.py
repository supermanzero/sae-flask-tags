from datetime import datetime
from flask import Flask, request, flash, url_for, redirect, \
     render_template, abort

import os


app = Flask(__name__)




@app.route('/',methods=['GET', 'POST'])
def index():
    # if request.method == 'POST':
    #     return render_template("index.html")
    return "1234"


if __name__ == '__main__':
    app.run()
