from flask import Flask, redirect,request

app = Flask("example")

@app.route("/redirect")
def redirect_to_url():
    url = request.args["url"]
    return redirect(url) 