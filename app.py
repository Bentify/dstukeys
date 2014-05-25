import os.path
import hashlib

from flask import Flask, render_template, url_for

app = Flask(__name__)

def hash_for(path):
    full_path = os.path.join(app.static_folder, path)
    sha1 = hashlib.sha1(open(full_path).read())
    return sha1.hexdigest()[:4]

def static_url(path):
    if path.endswith('.js'):
        return url_for('static', filename=path, hv=hash_for(path))

    return url_for('static', filename=path)

@app.context_processor
def ctx_util():
    return {
        "static_url": static_url,
    }


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/certview")
def certview():
    return render_template("cert.html")


if __name__ == '__main__':
    app.run(debug=True)
