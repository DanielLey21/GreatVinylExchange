## Great Vinyl Exchange
## Random Match Up MVP Procedure
## Author: Daniel Ley
## Version 1: 4/5/16

from random import randint

# All member of the groups
members = ["Jake H","Nate L", "Matt B","Adam H","Adam M","DJ L"]
# Members who can send a vinyl
sendList = ["Jake H","Nate L", "Matt B","Adam H","Adam M","DJ L"]
# All members that can recieve a vinyl
recList = ["Jake H","Nate L", "Matt B","Adam H","Adam M","DJ L"]
# History of past send/recieve matchups - covers the last month
history = [("Adam H","Nate L"),("Adam M","DJ L"),("DJ L","Adam M"),
            ("Matt B"," Jake H"),("Jake H","Adam H"),("Nate L","Matt B")]
'''
May
("Matt B","DJ L"),("Adam M","Nate L"),("Nate L","Adam M"),
            ("Adam H","Jake H"),("Jake H","Matt B"),("DJ L","Adam H")
June
("Adam H","Nate L"),("Adam M","DJ L"),("DJ L","Adam M"),("Matt B"," Jake H"),("Jake H","Adam H")
,("Nate L","Matt B")
'''
matchUps = []

# While there are still people who need to send a vinyl, continue pairing them with someone
while(len(sendList) != 0):
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
            sendList = ["Jake H","Nate L", "Matt B","Adam H","Adam M","DJ L"]
            recList = ["Jake H","Nate L", "Matt B","Adam H","Adam M","DJ L"]
            matchUps = []
    # Check to see if the matchup of the sender and reciever were in the past history of matchUps
    # If they were not a past matchup, then add them as a matchup for this grouping
    if((sender,reciever) not in history):
        sendList.remove(sender)
        recList.remove(reciever)
        matchUps.append((sender,reciever))
    # If they were a prior matchup
    else:
        print sender + " sent " + reciever + " a record last month..."
        # Check if they are the last matchup of this grouping.
        if(len(sendList)==1):
            # Restart The entire process. If we didn't it would enter endless loop
            # Because not new matchups would be possible
            sendList = ["Jake H","Nate L", "Matt B","Adam H","Adam M","DJ L"]
            recList = ["Jake H","Nate L", "Matt B","Adam H","Adam M","DJ L"]
            matchUps = []

print "\nThis months match ups are: "
for matchup in matchUps:
    print matchup[0] + " ---> " + matchup[1]
