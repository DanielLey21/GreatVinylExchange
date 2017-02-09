//
//  FirebaseAPI.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 2/5/17.
//  Copyright © 2017 daniel. All rights reserved.
//

import Firebase
import FirebaseDatabase

class FirebaseAPI: NSObject {
    
    // MARK: General Properties
    
    private lazy var currentUser: FIRDatabaseReference = {
        let userID = UserDefaults.standard.value(forKey: "uid") as! String
        return Endpoints.base.reference.child(userID)
    }()
    
    // MARK: Initialization
    
    override init() {
        super.init()
    }
    
    // MARK: Authentication Service Calls
    
    fileprivate func createUser(email: String, password: String, dateOfBirth: String, currentAddress: String, name: String) {
        FIRAuth.auth()?.createUser(withEmail: email, password: password) { (user, error) in
            
            if error != nil {
                // There was a problem
            } else {
                // User successfully created
                if let userInfo = user {
                    let newUser = User(id: userInfo.uid, name: name, email: userInfo.email!, password: password, dateOfBirth: dateOfBirth, currentAddress: currentAddress)
                    Endpoints.users.reference.child((user?.uid)!).setValue(newUser.toAnyObject())
                }
            }
        }
    }
    
    fileprivate func loginUser(email: String, password: String) {
        FIRAuth.auth()?.signIn(withEmail: email, password: password) { (user, error) in
            if error != nil {
                // There was a problem
            } else {
                // User successfully logged in
            }
        }
    }
    
    // MARK: POST Service Calls
    
    fileprivate func addMatch(sender: User, reciever: User) {
        let newMatchup = Matchup(sender: sender, reciever: reciever, dateRecieved: "")
        Endpoints.matchups.reference.childByAutoId().setValue(newMatchup)
    }
    
    // MARK: GET Service Calls
    
}
