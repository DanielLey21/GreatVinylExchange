## Great Vinyl Exchange
## Random Match Up MVP Procedure
## Author: Daniel Ley
## Version 1: 4/5/16
## Version 2: 6/20/16
## Version 3: 4/11/17 - Addition of Will Wagner, Perry Krum was added in March '17

from random import randint

# All member of the groups
members = ["Jake Heninger","Nate Ley", "Matt Bata","Adam Hernandez","Adam Malcore","DJ Ley","Perry Krum","Will Wagner"]
# Members who can send a vinyl
sendList = ["Jake Heninger","Adam Hernandez", "Matt Bata","Adam Hernandez","Adam Malcore","DJ Ley","Perry Krum","Will Wagner"]
# All members that can recieve a vinyl
recList = ["Jake Heninger","Nate Ley", "Matt Bata","Adam Hernandez","Adam Malcore","DJ Ley","Perry Krum","Will Wagner"]
# History of past send/recieve matchups - covers the last month
history = [[("Nate Ley", "Jake Heninger"),("DJ Ley", "Adam Hernandez"),("Jake Heninger", "Adam Malcore"),("Adam Malcore", "Matt Bata"),("Matt Bata", "Nate Ley"),("Adam Hernandez", "DJ Ley")],
           [("Perry Krum","DJ Ley"),("Nate Ley","Adam Hernandez"),("Matt Bata","Perry Krum"),("Jake Heninger","Matt Bata"),("Adam Hernandez","Adam Malcore"),("DJ Ley","Nate Ley"),("Adam Malcore","Jake Heninger")],
           [("Perry Krum", "Jake Heninger"),("Adam Hernandez", "Nate Ley"),("Adam Malcore", "Perry Krum"),("DJ Ley", "Adam Malcore"),("Nate Ley", "Matt Bata"),("Jake Heninger", "Adam Hernandez"),("Matt Bata", "DJ Ley")],
           [("Perry Krum", "Nate Ley"),("Adam Malcore", "Will Wagner"),("DJ Ley", "Adam Malcore"),("Nate Ley", "Matt Bata"),("Jake Heninger", "Adam Hernandez"),("Will Wagner", "DJ Ley"),("Adam Hernandez", "Perry Krum"),("Matt Bata","Jake Heninger")]]

'''
    May
    ("Matt Bata","DJ Ley"),("Adam Malcore","Nate Ley"),("Nate Ley","Adam Malcore"),("Adam Hernandez","Jake Heninger"),("Jake Heninger","Matt Bata"),("DJ Ley","Adam Hernandez")
    June
    ("Adam Hernandez","Nate Ley"),("Adam Malcore","DJ Ley"),("DJ Ley","Adam Malcore"),("Matt Bata","Jake Heninger"),("Jake Heninger","Adam Hernandez"),("Nate Ley","Matt Bata")
    July - Skip
    August
    ("Adam Hernandez","Matt Bata"),("Adam Malcore","Adam Hernandez"),("DJ Ley","Jake Heninger"),("Matt Bata","Adam Malcore"),("Jake Heninger","Nate Ley"),("Nate Ley","DJ Ley")
    September
    ("Matt Bata","Adam Hernandez"),("Nate Ley", "Adam Malcore"),("Jake Heninger","DJ Ley"),("Adam Malcore","Nate Ley"),("Adam Hernandez","Jake Heninger"),("DJ Ley","Matt Bata")
    October
    ("Nate Ley", "Jake Heninger"),("DJ Ley", "Adam Hernandez"),("Jake Heninger", "Adam Malcore"),("Adam Malcore", "Matt Bata"),("Matt Bata", "Nate Ley"),("Adam Hernandez", "DJ Ley")
    Perry Krum added in February
    Feb
    ("Perry Krum","DJ Ley"),("Nate Ley","Adam Hernandez"),("Matt Bata","Perry Krum"),("Jake Heninger","Matt Bata"),("Adam Hernandez","Adam Malcore"),("DJ Ley","Nate Ley"),("Adam Malcore","Jake Heninger")
    March
    ("Perry Krum","Jake Heninger"),("Adam Hernandez", "Nate Ley")("Adam Malcore", "Perry Krum"),("DJ Ley", "Adam Malcore"),("Nate Ley", "Matt Bata"),("Jake Heninger", "Adam Hernandez"),("Matt Bata", "DJ Ley")
    April
    ("Perry Krum","Nate Ley"),("Adam Malcore","Will Wagner"),("DJ Ley","Adam Malcore"),("Nate Ley","Matt Bata"),("Jake Heninger","Adam Hernandez"),("Will Wagner","DJ Ley"),("Adam Hernandez","Perry Krum"),("Matt Bata","Jake Heninger")
    June
    ("DJ Ley", "Perry Krum"),("Will Wagner", "Matt Bata"),("Adam Hernandez", "Jake Heninger"),("Nate Ley", "Adam Malcore"),("Perry Krum", "Will Wagner"),("Matt Bata", "Adam Hernandez),("Adam Malcore", "Nate Ley"),("Jake Heninger", "DJ Ley")
    '''
matchUps = []

# While there are still people who need to send a vinyl, continue pairing them with someone
while(len(sendList) != 0):

    print "\nThis months CURRENT ITERATION match ups are: "
    for matchup in matchUps:
        print matchup[0] + " ---> " + matchup[1]

    # Boolean variable to maintain if the only person left in the send and reciev list are not the same person
    notSamePerson = False
    while(not notSamePerson):
        # Choose a random person to be the sender
        sender = sendList[randint(0,len(sendList)-1)]
        # Choose a random member to be reciever for that sender
        reciever = recList[randint(0,len(recList)-1)]
        print "Chosen sender " +sender
        print "Chosen Reciever " + reciever
        if(sender != reciever):
            notSamePerson = True
        else:
            #Restart the process. The only person left in both lists are the same person
            sendList = ["Jake Heninger","Nate Ley", "Matt Bata","Adam Hernandez","Adam Malcore","DJ Ley","Perry Krum","Will Wagner"]
            recList = ["Jake Heninger","Nate Ley", "Matt Bata","Adam Hernandez","Adam Malcore","DJ Ley","Perry Krum","Will Wagner"]
            matchUps = []
    monthCount = 0
    # Check to see if the matchup of the sender and reciever were in the past history of matchUps
    # If they were not a past matchup, then add them as a matchup for this grouping
    for month in history:
        if((sender,reciever) not in month):
            monthCount += 1
        else:
            print sender + " sent " + reciever + " a record in one of the last months"
            if(len(sendList)==1):
                #Restart The entire process. If we didn't it would enter endless loop
                sendList = ["Jake Heninger","Nate Ley", "Matt Bata","Adam Hernandez","Adam Malcore","DJ Ley","Perry Krum","Will Wagner"]
                recList = ["Jake Heninger","Nate Ley", "Matt Bata","Adam Hernandez","Adam Malcore","DJ Ley","Perry Krum","Will Wagner"]
                matchUps = []
    # If the match was not found in any of the last months, then the monthCount should equal
    # how many months are in the history, and for this Version 2, that would be 2 months
    # If this is the case then add this matchup to the current grouping.
    if(monthCount == len(history)):
        sendList.remove(sender)
        recList.remove(reciever)
        matchUps.append((sender,reciever))


print "\nThis months match ups are: "
for matchup in matchUps:
    print matchup[0] + " ---> " + matchup[1]
