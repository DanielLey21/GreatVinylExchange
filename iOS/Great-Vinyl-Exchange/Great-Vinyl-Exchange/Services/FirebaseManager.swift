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
        let _ = self.userRef.childByAutoId().setValue(user.toAnyObject())
    }
    
    // TODO: Testing functionality
    func getRecordsFromDatabase() -> [Record] {
        var records = [Record]()
        recordRef.queryOrderedByKey().observe(.childAdded, with: {
            snapshot in
            
            //Get Records from Data...Lookup how.
            
        })
        
        return records
    }
    
    func getUsersFromDatabase() -> [User] {
        var users = [User]()
        userRef.queryOrderedByKey().observe(.childAdded, with: {
            snapshot in
            
            //Get Users from database...Look up how
        })
        
        return users
    }
}
