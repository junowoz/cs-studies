# Python Kata Training
# Codewars Challenges
# author: junowoz

#################################################################################################################################################################
#1
#Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
#If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
#Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

def lovefunc( flower1, flower2 ):

    if (flower1 % 2 == 0) and (flower2 % 2 != 0):
         return True
    elif (flower1 % 2 != 0) and (flower2 % 2 == 0):
        return True
    else :
        return False
    
    
lovefunc(5, 5);

#################################################################################################################################################################
#2        
#Your task is to write a function which returns the time since midnight in milliseconds.
#Example:
#h = 0
#m = 1
#s = 1
#result = 61000  

def past(h, m, s):
    # Good Luck!
    return h * 3600000 + m * 60000 + s * 1000

past(0,1,1)

#################################################################################################################################################################
#3
#Create a function which answers the question "Are you playing banjo?".
#If your name starts with the letter "R" or lower case "r", you are playing banjo!

def are_you_playing_banjo(name):
    if (name.startswith("R") or name.startswith("r")):
        return name + " plays banjo" 
    else:
        return name + " does not play banjo"

#################################################################################################################################################################
#4
#Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

def get_grade(s1, s2, s3):
    # Code here
    score = (s1+s2+s3)/3
    if (90 <= score <= 100):
        return 'A'
    elif (80 <= score < 90):
        return 'B'
    elif (70 <= score < 80):
        return 'C'
    elif (60 <= score < 70):
        return 'D'
    elif (0 <= score < 60):
        return 'F'

#################################################################################################################################################################
#5
#We need a function that can transform a string into a number. What ways of achieving this do you know?
#Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
def string_to_number(s):
    # your code here
    return int(s)

#################################################################################################################################################################
#6
#Write a function which calculates the average of the numbers in a given list.
#Note: Empty arrays should return 0.
def find_average(numbers):
    return sum(numbers) / len(numbers)
         
#################################################################################################################################################################
#7 Beginner Series #4 Cockroach
import math
def cockroach_speed(s):
    return math.floor(s * 100000 / 3600);

#################################################################################################################################################################
#8