//
//  DataManager.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 11/26/16.
//  Copyright © 2016 daniel. All rights reserved.
//

import Foundation

class DataManager : NSObject {
    
    let firebaseManager = FirebaseManager()
    
    class var sharedInstance : DataManager {
        
        struct Singleton {
            static let instance = DataManager()
        }
        return Singleton.instance
    }
    
    private let dataPersistencyManager: DataPersistencyManager
    
    override init() {
        dataPersistencyManager = DataPersistencyManager()
    }
    
    func getUserList() -> [User] {
        return dataPersistencyManager.getUserList()
    }
    
    func addUser(newUser: User) {
        dataPersistencyManager.addGem(newUser: newUser)
        
        // Send Gem object up to Firebase
        firebaseManager.addUserToDatabase(user: newUser)
    }
    
    func removeUserAtIndex(index: Int) {
        dataPersistencyManager.removeUserAtIndex(index: index)
        // TODO: remove user from Firebase
    }
    
    func getRecordList() -> [Record] {
        return dataPersistencyManager.getRecordList()
    }
    
    func addRecord(newRecord: Record) {
        dataPersistencyManager.addRecord(newRecord: newRecord)
        
        // Send Gem object up to Firebase
        firebaseManager.addRecordToDatabase(record: newRecord)
    }
    
    func removeRecordAtIndex(index: Int) {
        dataPersistencyManager.removeRecordAtIndex(index: index)
        // TODO: remove record from Firebase
    }

}
