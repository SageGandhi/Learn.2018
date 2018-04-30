class Employee:
    employees = []

    def __init__(self, name, employee_id):
        self.name = name
        self.employee_id = employee_id
        self.employees.append(self)

    def __str__(self):
        return f"Employee{self.name}:{self.employee_id}"

    def get_name_init_cap(self):
        return self.name.title()


# employee_gandhi = Employee(name="Prajit Gandhi", employee_id=247119)
# print(employee_gandhi)  # Separate Memory Location


class PartTimeEmployee(Employee):
    def get_name_initcap(self):
        return f"{super().get_name_init_cap()}:PartTime Employee"


# part_time_hours_emp = PartTimeEmployee("Yogi", 247118)
# print(part_time_hours_emp, part_time_hours_emp.get_name_initcap())
