//
//  DataPersistencyManager.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 11/26/16.
//  Copyright © 2016 daniel. All rights reserved.
//

import Foundation

class DataPersistencyManager : NSObject {
    
    private var userList = [User]()
    private var recordHistory = [Record]()
    
    override init() {
        super.init()
    }
    
    func getUserList() -> [User] {
        return userList
    }
    
    func addGem(newUser: User) {
        userList.append(newUser)
    }
    
    func removeUserAtIndex(index: Int) {
        userList.remove(at: index)
    }
    
    func getRecordList() -> [Record] {
        return recordHistory
    }
    
    func addRecord(newRecord: Record) {
        recordHistory.append(newRecord)
    }
    
    func removeRecordAtIndex(index: Int) {
        recordHistory.remove(at: index)
    }
}
