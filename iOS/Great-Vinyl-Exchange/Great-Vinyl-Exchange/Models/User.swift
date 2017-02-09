//
//  User.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 11/20/16.
//  Copyright © 2016 daniel. All rights reserved.
//

import Foundation
import UIKit

struct User {
    
    // MARK: General Properties
    
    var id: String
    var name: String
    var email: String
    var password: String
    var dateOfBirth: String
    var currentAddress: String
    
    // MARK: Computed Properties
    
    let dateOfCreation: String = {
        let currentDate : NSDate = NSDate()
        let dateFromatter = DateFormatter()
            
        dateFromatter.dateStyle = DateFormatter.Style.short
        return dateFromatter.string(from: currentDate as Date)
    }()
    
    // TODO: Add User Profile Picture
    //var profpic: String?
    //let imageData: NSData = UIImagePNGRepresentation(profpic.image!)! as NSData
    //let base64String = imageData.base64EncodedString(options: NSData.Base64EncodingOptions.Encoding64CharacterLineLength)
    
    // TODO: Implement Discogs API
    //Incorporate Discogs Info
    //var discogsName: String?
    
    func toAnyObject() -> [String: Any] {
        return [
            "name": name,
            "email": email,
            "password": password,
            "dateOfCreation": dateOfCreation,
            "dateOfBirth": dateOfBirth,
            "currentAddress": currentAddress]
    }
    
}
