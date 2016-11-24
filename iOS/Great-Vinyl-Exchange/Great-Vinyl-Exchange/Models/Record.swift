//
//  Record.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 11/20/16.
//  Copyright © 2016 daniel. All rights reserved.
//

import Foundation
import UIKit
import Firebase

class Record: NSObject {
    
    // MARK: Properties
    var image: UIImage?
    var sender: User
    var reciever: User
    var dateRecieved: String
    var monthAssigned: String
    var yearAssigned: String
    
    var artist: String?
    var album: String?
    var name: String?
    
    //Incorporate Discogs Info at somepoint
    
    // MARK: Initialization
    init?(image: UIImage, sender: User, reciever: User, month: String, year: String) {
        self.image = image
        self.sender = sender
        self.reciever = reciever
        self.monthAssigned = month
        self.yearAssigned = year
        
        let currentDate : NSDate = NSDate()
        let dateFromatter = DateFormatter()
        dateFromatter.dateStyle = DateFormatter.Style.short
        let convertedDate = dateFromatter.string(from: currentDate as Date)
        self.dateRecieved = convertedDate
    }
    
    
    func toAnyObject() -> AnyObject {
        let imageData: NSData = UIImagePNGRepresentation(image!)! as NSData
        
        // TODO: incorporate adding images to Firebase.
        // let base64String = imageData.base64EncodedString(options: NSData.Base64EncodingOptions.Encoding64CharacterLineLength)
        var record = [String:String]()
        record = [
            "image": "",
            "sender": sender.name,
            "reciever": reciever.name,
            "dateRecieved": dateRecieved,
            "monthAssigned": monthAssigned,
            "yearAssigned": yearAssigned
        ]
        return record as AnyObject
    }
}
