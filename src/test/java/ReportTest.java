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
  public void save_assignsTimestampToObjectAndSavesObjectToDatabase() {
    Report testReport = new Report(1, 1, "full", "train is packed, RIP!");
    testReport.save();
    assertTrue(testReport.getTimestamp() != null);
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

  @Test
  public void getReportsByTrainId_getsReportsForATrainId_true() {
    Report firstReport = new Report(1, 1, "full", "train is full?");
    firstReport.save();
    Report secondReport = new Report(1, 1, "full", "train is packed, RIP!");
    secondReport.save();

    assertTrue(Report.getReportsByTrainId(1).size() == 2);
    assertEquals(Report.getReportsByTrainId(1).get(0).getComment(), firstReport.getComment());
  }

}
