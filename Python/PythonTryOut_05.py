import PythonTryOut_04

employee_gandhi = PythonTryOut_04.Employee(name="Prajit Gandhi", employee_id=247119)
print(employee_gandhi)  # Separate Memory Location

part_time_hours_emp = PythonTryOut_04.PartTimeEmployee("Yogi", 247118)
print(part_time_hours_emp, part_time_hours_emp.get_name_initcap())
