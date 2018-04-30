# Start Printing In Python
print("Hello World!!!Learning Python.")
# Use String Format Function
print("Nice To Meet You {0}".format("Gandhi"))
# Use String Interpolation
name = "Prajit Gandhi"
print(f"Nice To Meet You {name}")
# Using Boolean Variable
isItPythonCourse = True
isItJavaCourse = False
# Using None Type Similar To Null In Java
thisIsNoneType = None
print("{0}.{1}:{2}".format(int(isItPythonCourse),  int(isItJavaCourse),thisIsNoneType))
# If Statement if <Condition>: <Statements> elif <Condition>: <Statements> else: <Statements>
if name != "Prajit Gandhi":
    print(f"This Is Python Course:{name}")
elif isItPythonCourse:
    print(f"This Is Python Course:{isItPythonCourse}")
else:
    print("If You Are Good At Something Never Do It For Free")
# Condition Is Truthy[Any Int Other Than 0,Any String Except Empty String] Value
# Falsy[0,Empty String,None Type] Value.and/or/not Usage.
if not name or isItJavaCourse:
    print(f"This Is Python Course:{name}")
elif isItPythonCourse and isItJavaCourse:
    print(f"This Is Python Course:{isItPythonCourse}")
else:
    print("If You Are Good At Something Never Do It For Free")
# Usage Of Ternary Operator
print("Python") if isItPythonCourse else print("Java")
# Usage Of List, 0 Based Index
gamesPlayed = ["Prince Of Persia", "Tomb Raider", "God Of War"]
# Traversing List From Forward Direction[0 First Element] & Backward Direction[-1 Last Element]
print(f"First {gamesPlayed[0]},Last {gamesPlayed[-1]}")
# Add More Items To List Using append
gamesPlayed.append("Shadow Of War")
print(f"First {gamesPlayed[0]},Last {gamesPlayed[-1]}")
# Check If Any Element Is Already Exist Prior To Add/Append
print(f"Tomb Raider Is Present:{'Tomb Raider' in gamesPlayed},List Size:{len(gamesPlayed)}")
# Use del To Delete Element In Array
del gamesPlayed[2]
print(f"All Games:{gamesPlayed}")
# Slicing List Using Index 1 Based
print(f"All Games But First & Last:{gamesPlayed[1:-1]}")
# For Loop
for game in gamesPlayed:
    print(f"Game Played:{game}")
# For Loop Range Function [0,1,..4] Range(Start==0,Stop==4,Increment=1)
for index in range(5):
    print(f"Index:{index}")
# [5,6,..9] Range(Start,Stop) Range(Start==5,Stop==9,Increment=1)
for index in range(5, 10):
    print(f"Index:{index}")
# [5,10,..95] Range(Start,Stop) Range(Start==5,Stop==95,Increment=5) With Continue & Break
for index in range(5, 100, 5):
    if index == 50:
        print(f"Found Continue Index:{index}")
        continue
    if index == 75:
        print(f"Found Break Index:{index}")
        break
    print(f"Index:{index}")
#  Dictionary[Just Like Json] & Exception Handling
gameShadowOfWar = {
    "Name": "Shadow Of War"
}
try:
    print(f'Game Description :{gameShadowOfWar["Description"]}')
except KeyError as error:
    print(f"Unable To Find Description{error}")
