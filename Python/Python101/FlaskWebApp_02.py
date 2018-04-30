from flask import Flask, render_template, redirect, url_for, request
from PythonTryOut_04 import Employee

app = Flask(__name__)
employees = []


@app.route("/", methods={"GET", "POST"})
def employee_page():
    if request.method == "POST":
        employee = Employee(employee_id=request.form.get("employee_id"),
                            name=request.form.get("name"),
                            email_id=request.form.get("email_id"),
                            add_to_local_dictionary=False)
        employees.append(employee)
        return redirect(url_for("employee_page"))
    return render_template("index.html", employees=employees)


if __name__ == "__main__":
    app.run(debug=True)
