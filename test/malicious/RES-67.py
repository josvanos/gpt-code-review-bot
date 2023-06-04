from flask import request, render_template_string
from flask import redirect, url_for

@app.route('/hello')
def hello():
    username = request.args.get('username')
    template = f"<p>Hello {username}</p>" 
    return render_template_string(template) 



@app.route("/config")
def config():
    return redirect(url_for("/hello?username={{config}}"))
