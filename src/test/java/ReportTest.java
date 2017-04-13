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

public class ReportTest {

  @Rule
  public DatabaseRule database = new DatabaseRule();

  @Test
  public void save_assignsIdToObjectAndSavesObjectToDatabase() {
    Report testReport = new Report(1, 1, "full", "train is packed, RIP!", 8306);
    testReport.save();
    Report savedReport = Report.find(testReport.getId());
    assertEquals(testReport.getId(), savedReport.getId());
  }

  @Test
  public void save_assignsTimestampToObjectAndSavesObjectToDatabase() {
    Report testReport = new Report(1, 1, "full", "train is packed, RIP!", 8306);
    testReport.save();
    assertTrue(testReport.getTimestamp() != null);
  }

  @Test
  public void all_returnsAllInstancesOfReport_false() {
    Report firstReport = new Report(1, 1, "full", "train is packed, RIP!", 8306);
    firstReport.save();
    Report secondReport = new Report(1, 1, "full", "train is packed, RIP!", 8306);
    secondReport.save();
    assertEquals(firstReport.getId(), Report.find(firstReport.getId()).getId());
    assertEquals(secondReport.getId(), Report.find(secondReport.getId()).getId());
  }

  @Test
  public void getReportsByTrainId_getsReportsForATrainId_true() {
    Report firstReport = new Report(1, 1, "full", "train is full?", 8306);
    firstReport.save();
    Report secondReport = new Report(1, 1, "full", "train is packed, RIP!", 8306);
    secondReport.save();

    assertTrue(Report.getReportsByTrainId(1).size() == 2);
    assertEquals(Report.getReportsByTrainId(1).get(0).getComment(), firstReport.getComment());
  }

  @Test
  public void getUsername_returnsUserName_true() {
    User firstUser = new User("xyz@gmail.com", "xyz", "1234password", "www.imgur.com/harambe.jpg");
    firstUser.save();
    Report firstReport = new Report(firstUser.getId(), 1, "full", "train is packed, RIP!", 8306);
    firstReport.save();

    assertEquals(firstUser.getUsername(), firstReport.getUsername());
  }

}
