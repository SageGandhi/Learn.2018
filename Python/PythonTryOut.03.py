user_names = []


def load_from_file():
    try:
        file_to_open = open('Employee.txt', 'r')
        id_index = 247119
        for line in file_to_open.readlines():
            id_index += 1
            print(f"Name Retrieved:{line}")
            user_names.append({"name": line, "userId": id_index})
        file_to_open.close()
        print(user_names)
    except FileNotFoundError as error:
        print(f"Could Not Save File:{error}")


def read_lines_using_yield(file_to_read):
    for line in file_to_read:
        yield line


load_from_file()

square_value = lambda input_x:  input_x * input_x
print(square_value(123456789))
