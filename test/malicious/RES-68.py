from flask import request, render_template_string

@app.route('/hello')
def hello():
    username = request.args.get('username')
    template = "<p>Hello {{ name }}</p>"
    return render_template_string(template, name=username) 