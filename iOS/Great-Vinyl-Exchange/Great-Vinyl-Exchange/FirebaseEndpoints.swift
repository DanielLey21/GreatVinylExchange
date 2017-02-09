//
//  FirebaseEndpoints.swift
//  Great-Vinyl-Exchange
//
//  Created by Daniel Ley on 2/5/17.
//  Copyright © 2017 daniel. All rights reserved.
//
import Firebase
import FirebaseDatabase

public enum Endpoints {
    
    case base
    case users
    case matchups
    
    public var path: String {
        
        switch self {
        case .base:
            return "https://great-vinyl-exchange.firebaseio.com/"
        case .users:
            return Endpoints.base.path + "/users"
        case .matchups:
            return Endpoints.base.path + "/matchups"
        }
    }
    
    public var reference: FIRDatabaseReference {
        switch self {
        case .base:
            return FIRDatabase.database().reference(fromURL: Endpoints.base.path)
        case .users:
            return FIRDatabase.database().reference(fromURL: Endpoints.users.path)
        case .matchups:
            return FIRDatabase.database().reference(fromURL: Endpoints.matchups.path)
        }
    }
    public var jsonParameters: [String : Any] {
        switch self {
        case .base:
            break
        case .users:
            break
        case .matchups:
            break
        }
        return [:]
    }
    
    public var urlParameters: [String : Any] {
        switch self {
        case .base:
            break
        case .users:
            break
        case .matchups:
            break
        }
        return [:]
    }
}
