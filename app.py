from flask import Flask, render_template
import os

# Current backend folder path
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# Templates path
templates_path = os.path.abspath(
    os.path.join(BASE_DIR, "../frontend/templates")
)

# Static path
static_path = os.path.abspath(
    os.path.join(BASE_DIR, "../frontend/static")
)

# Flask App
app = Flask(
    __name__,
    template_folder=templates_path,
    static_folder=static_path
)

# Home Page
@app.route("/")
def home():

    return render_template("index.html")

# Run App
if __name__ == "__main__":

    app.run(debug=True)