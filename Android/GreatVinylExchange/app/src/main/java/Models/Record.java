package Models;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by DanielLey on 11/27/16.
 */
public class Record {
    // MARK: Properties
    User sender;
    User reciever;
    String month;
    String year;
    String dateRecieved;
    // Need Image

    // MARK: Constructor
    public Record(User xSend, User xRec, String xMonth, String xYear) {
        sender = xSend;
        reciever = xRec;
        month = xMonth;
        year = xYear;

        DateFormat df = new SimpleDateFormat("dd/MM/yy");
        Date dateobj = new Date();
        dateRecieved = df.format(dateobj);
    }

    // MARK: Object Description Method
    private Map toAnyObject() {
        Map<String, String> record = new HashMap<String, String>();
        record.put("Sender",sender.name);
        record.put("Reciever",reciever.name);
        record.put("Month",month);
        record.put("Year",year);
        record.put("DateRecieved",dateRecieved);
        return record;
    }
}
