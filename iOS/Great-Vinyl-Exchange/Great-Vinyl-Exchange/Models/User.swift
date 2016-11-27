//
//  User.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 11/20/16.
//  Copyright © 2016 daniel. All rights reserved.
//

import Foundation
import UIKit

class User: NSObject {
    
    // MARK: Properties
    var name: String
    var email: String
    var password: String
    var dateOfBirth: String?
    var dateOfCreation: String
    //var profpic: String?
    
    //Incorporate Discogs Info
    //var discogsName: String?
    
    init?(name: String, email: String, password: String) {
        
        if(name.isEmpty || email.isEmpty || password.isEmpty) {
            return nil
        }
        
        //let imageData: NSData = UIImagePNGRepresentation(profpic.image!)! as NSData
        //let base64String = imageData.base64EncodedString(options: NSData.Base64EncodingOptions.Encoding64CharacterLineLength)
        
        self.name = name
        self.email = email
        self.password = password
        //self.profpic = base64String
        
        let currentDate : NSDate = NSDate()
        let dateFromatter = DateFormatter()
        
        dateFromatter.dateStyle = DateFormatter.Style.short
        let convertedDate = dateFromatter.string(from: currentDate as Date)
        
        self.dateOfCreation = convertedDate
        
    }
    
    func toAnyObject() -> AnyObject {
        var user = [String:String]()
        if let dateOfBirth = dateOfBirth {
            user = [
                "name": name,
                "email": email,
                "password": password,
                "dateOfCreation": dateOfCreation,
                "dateOfBirth": dateOfBirth
            ]
            return user as AnyObject
        } else {
            user = [
                "name": name,
                "email": email,
                "password": password,
                "dateOfCreation": dateOfCreation
            ]
            return user as AnyObject
        }
    }
}
