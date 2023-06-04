from flask import Flask, redirect,request

app = Flask("example")

@app.route("/redirect")
def redirect():
    url = request.args["url"]
    return redirect(url) 