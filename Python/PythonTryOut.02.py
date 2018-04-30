user_names = []


def print_user_name():
    username = input("Provide Me A UserName:")
    # Named Argument  To A Function
    add_to_user_array(name=username, user=247120)
    print(f"Your User Name:{username}")


# Default Value With Method Parameter
def add_to_user_array(name, user=247119):
    write_to_file(name);
    user_names.append({"name": name, "userId": user})


# Variable Length Arguments
def var_args_function(*varargs):
    print(varargs)


# KeyWord Arguments
def keyword_args_function(**key_word_args):
    print(key_word_args["Id"], key_word_args["Description"].title())  # For Title Case[Init Capitalize]


var_args_function("Ek", "Do", "Tin")
keyword_args_function(Id=247119, Description="Adam Eve")


def write_to_file(name):
    try:
        file_to_open = open('Employee.txt','a')
        file_to_open.write(name+'\n')
        file_to_open.close()
    except FileNotFoundError as error:
        print(f"Could Not Save File:{error}")


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


load_from_file()
