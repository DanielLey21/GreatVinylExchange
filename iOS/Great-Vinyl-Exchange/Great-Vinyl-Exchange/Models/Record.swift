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
    var dateRecieved: NSDate?
    
    // MARK: Initialization
    init?(image: UIImage, sender: User, reciever: User) {
        self.image = image
    }
    
    
    func toAnyObject() -> AnyObject {
        let imageData: NSData = UIImagePNGRepresentation(image!)! as NSData
        let base64String = imageData.base64EncodedString(options: NSData.Base64EncodingOptions.Encoding64CharacterLineLength)
        var record = [String:String]()
        record = [
            "image": base64String,
            "sender": sender.name,
            "reciever": reciever.name,
            "dateRecieved": dateRecieved
        ]
        return record as AnyObject
    }
}
