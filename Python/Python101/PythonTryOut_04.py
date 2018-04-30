class Employee:
    employees = []

    def __init__(self, name, employee_id, email_id=None, add_to_local_dictionary= True):
        """
            Employee Constructor
            :param name: string Name Of The Employee
            :param employee_id: Employee IdOf  A Employee
        """
        self.name = name
        self.employee_id = employee_id
        self.email_id = email_id
        if add_to_local_dictionary:
            self.employees.append(self)

    def __str__(self):
        return f"Employee{self.name}:{self.employee_id}"

    def get_name_init_cap(self):
        return self.name.title()


class PartTimeEmployee(Employee):
    def get_name_init_cap(self):
        return f"{super().get_name_init_cap()}:PartTime Employee"


