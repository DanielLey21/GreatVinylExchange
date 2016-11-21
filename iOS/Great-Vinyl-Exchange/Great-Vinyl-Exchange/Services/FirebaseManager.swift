//
//  FirebaseManager.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 11/20/16.
//  Copyright © 2016 daniel. All rights reserved.
//

import Foundation
import Firebase

class FirebaseManager : NSObject{
    
    let ref = FIRDatabase.database().reference()
    let rootRef = FIRDatabase.database().reference(fromURL: "https://great-vinyl-exchange.firebaseio.com/")
    let userRef = FIRDatabase.database().reference(fromURL: "https://great-vinyl-exchange.firebaseio.com/Users")
    let recordRef = FIRDatabase.database().reference(fromURL: "https://great-vinyl-exchange.firebaseio.com/Records")
    let storage = FIRStorage.storage()
    
    override init() {
        super.init()
        //FIRApp.configure()
        
    }
    
    func addRecordToDatabase(record:Record) -> Void {
        let _ = self.recordRef.childByAutoId().setValue(record.toAnyObject())
    }
    
    // TODO: Test this, could be off. Must find flow of User regristration
    func addUserToDatabase(user: User) -> Void {
        let _ = self.usersRef.childByAutoId().setValue(user.toAnyObject())
    }
    
    // TODO: Testing functionality
    func getRecordsFromDataBase() -> [Record] {
        var records = [Record]()
        recordRef.queryOrderedByKey().observe(.childAdded, with: {
            snapshot in
            
            let dataDecoded:NSData = NSData(base64EncodedString: snapshot.value!["image"] as! String, options: NSData.Base64DecodingOptions(rawValue: 0))!
            let decodedimage:UIImage = UIImage(data: dataDecoded as Data)!
            
        })
        
        return gems
    }
}
