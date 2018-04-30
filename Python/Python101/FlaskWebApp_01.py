from flask import Flask
app = Flask(__name__)


@app.route("/")
def welcome():
    return "WelCome To My Application."


if __name__ == "__main__":
    app.run(debug=True)
