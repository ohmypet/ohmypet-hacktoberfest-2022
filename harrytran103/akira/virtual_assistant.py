import speech_recognition
import pyttsx3

robot_ear = speech_recognition.Recognizer()
robot_mouth = pyttsx3.init()

while True:
    with speech_recognition.Microphone() as mic:
        print("Robot 👰🏻: I'm listening")
        audio = robot_ear.listen(mic)

    print("Robot 👰🏻: ...")

    try:
        you = robot_ear.recognize_google(audio)
    except:
        you = ""

    print("You 👨🏼‍💻: " + you)

    if you == "":
        robot_brain = "I can't hear you, try again"
    elif "hello" in you:
        robot_brain = "Hi CT, how are you?"
    elif "bye" in you:
        robot_brain = "Good bye, see you again!"
        print("Robot 👰🏻: " + robot_brain)
        robot_mouth.say(robot_brain)
        robot_mouth.runAndWait()
        break
    else:
        robot_brain = "I'm Akira, a virtual assistant. Hi, You!"

    print("Robot 👰🏻: " + robot_brain)

    robot_mouth.say(robot_brain)
    robot_mouth.runAndWait()
