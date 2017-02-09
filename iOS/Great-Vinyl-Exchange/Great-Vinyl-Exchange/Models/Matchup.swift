//
//  Matchup.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 11/20/16.
//  Copyright © 2016 daniel. All rights reserved.
//

import Firebase

struct Matchup {
    
    // MARK: General Properties
    
    var sender: User
    var reciever: User
    var dateRecieved: String? = ""
    let dateAssigned: String = {
        let currentDate : NSDate = NSDate()
        let dateFromatter = DateFormatter()
        
        dateFromatter.dateFormat = "MMMM YYYY"
        return dateFromatter.string(from: currentDate as Date)
    }()

    func toAnyObject() -> [String: String] {
        return [
            "senderID": sender.id,
            "senderName": sender.name,
            "recieverID": reciever.id,
            "reciever": reciever.name,
            "dateRecieved": dateRecieved!,
            "dateAssigned": dateAssigned
        ]
    }
}
