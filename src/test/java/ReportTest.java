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
    Report testReport = new Report(1, 1, "full", "train is packed, RIP!");
    testReport.save();
    Report savedReport = Report.find(testReport.getId());
    assertEquals(testReport.getId(), savedReport.getId());
  }

  @Test
  public void all_returnsAllInstancesOfReport_false() {
    Report firstReport = new Report(1, 1, "full", "train is packed, RIP!");
    firstReport.save();
    Report secondReport = new Report(1, 1, "full", "train is packed, RIP!");
    secondReport.save();
    assertEquals(firstReport.getId(), Report.find(firstReport.getId()).getId());
    assertEquals(secondReport.getId(), Report.find(secondReport.getId()).getId());
  }

}
