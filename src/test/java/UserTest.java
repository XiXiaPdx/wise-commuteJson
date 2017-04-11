import org.sql2o.*;
import org.junit.*;
import static org.junit.Assert.*;
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;
import java.sql.Timestamp;

public class UserTest {

  @Rule
  public DatabaseRule database = new DatabaseRule();

  @Test
  public void save_assignsIdToObjectAndSavesObjectToDatabase() {
    User testUser = new User("xyz@gmail.com", "xyz", "1234password", "www.imgur.com/harambe.jpg");
    testUser.save();
    User savedUser = User.find(testUser.getId());
    assertEquals(testUser.getId(), savedUser.getId());
  }

  @Test
  public void all_returnsAllInstancesOfUser_false() {
    User firstUser = new User("xyz@gmail.com", "xyz", "1234password", "www.imgur.com/harambe.jpg");
    firstUser.save();
    User secondUser = new User("xyz@gmail.com", "xyz", "1234password", "www.imgur.com/harambe.jpg");
    secondUser.save();
    assertEquals(firstUser.getId(), User.find(firstUser.getId()).getId());
    assertEquals(secondUser.getId(), User.find(secondUser.getId()).getId());
  }

  @Test
  public void getReportCount_returnsReportCountForUser_true() {
    User firstUser = new User("xyz@gmail.com", "xyz", "1234password", "www.imgur.com/harambe.jpg");
    firstUser.save();
    Report firstReport = new Report(firstUser.getId(), 1, "full", "train is packed, RIP!");
    firstReport.save();
    Report secondReport = new Report(firstUser.getId(), 1, "full", "train is packed, RIP!");
    secondReport.save();
    assertEquals(2, firstUser.getReportCount());
  }

}
