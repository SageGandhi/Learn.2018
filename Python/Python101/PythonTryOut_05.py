# import PythonTryOut_04
from PythonTryOut_04 import PartTimeEmployee
from PythonTryOut_04 import Employee

employee_gandhi = Employee(name="Prajit Gandhi", employee_id=247119)
print(employee_gandhi)  # Separate Memory Location

part_time_hours_emp = PartTimeEmployee("Yogi", 247118)
print(part_time_hours_emp, part_time_hours_emp.get_name_init_cap())
