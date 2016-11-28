package Models;

import java.util.Dictionary;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by DanielLey on 11/27/16.
 */
public class User {
    // MARK: Properties
    String name;
    String email;
    String password;
    String dateOfCreation;
    //String dateOfBirth;

    // MARK: Constructor
    public User(String xName, String xEmail, String xPassword) {
        name = xName;
        email = xEmail;
        password = xPassword;

        DateFormat df = new SimpleDateFormat("dd/MM/yy");
        Date dateobj = new Date();
        dateOfCreation = df.format(dateobj);
    }

    // MARK: Object Description Method
    private Map toAnyObject() {
        Map<String, String> user = new HashMap<String, String>();
        user.put("Name",name);
        user.put("Email",email);
        user.put("Password",password);
        user.put("Date of Creation",dateOfCreation);
        return user;
    }
}