import org.sql2o.*;
import java.util.ArrayList;
import java.util.List;
import java.sql.Timestamp;
import java.util.Collections;

public class Report {

  private int id;
  private int id_user;
  private int id_train;
  private int id_nextstop;
  private String train_capacity;
  private String comment;
  private Timestamp timestamp;

  public static final String CAPACITY_EMPTY = "Empty";
  public static final String CAPACITY_HALF = "Half";
  public static final String CAPACITY_FULL = "Full";

  public Report(int id_user, int id_train, String train_capacity, String comment, int id_nextstop) {
    this.id_user = id_user;
    this.id_train = id_train;
    this.train_capacity = train_capacity;
    this.comment = comment;
    this.id_nextstop = id_nextstop;
  }

  public int getId() {
    return this.id;
  }

  public int getUserId() {
    return this.id_user;
  }

  public int getTrainId() {
    return this.id_train;
  }

  public int getNextStopId(){
    return this.id_nextstop;
  }

  public String getTrainCapacity() {
    return this.train_capacity;
  }

  public String getComment() {
    return this.comment;
  }

  public Timestamp getTimestamp() {
    return this.timestamp;
  }

  public String getUsername() {
    try(Connection con = DB.sql2o.open()) {
      String sql = "SELECT username FROM users WHERE id = :id;";
      String userName = con.createQuery(sql)
        .addParameter("id", this.id_user)
        .executeAndFetchFirst(String.class);
      return userName;
    }
  }

  public void save() {
    try(Connection con = DB.sql2o.open()) {
      String sql = "INSERT INTO reports (id_user, id_train, train_capacity, comment, timestamp, id_nextstop) VALUES (:id_user, :id_train, :train_capacity, :comment, now(), :id_nextstop);";
      this.id = (int) con.createQuery(sql, true)
        .addParameter("id_user", this.id_user)
        .addParameter("id_train", this.id_train)
        .addParameter("train_capacity", this.train_capacity)
        .addParameter("comment", this.comment)
        .addParameter("id_nextstop", this.id_nextstop)
        .executeUpdate()
        .getKey();
    }

    try(Connection con = DB.sql2o.open()) {
      String timestampQuery = "SELECT timestamp FROM reports WHERE id = :id;";
      this.timestamp = con.createQuery(timestampQuery)
        .addParameter("id", this.id)
        .executeAndFetchFirst(Timestamp.class);
    }
  }

  public static List<Report> all() {
    try(Connection con = DB.sql2o.open()) {
      String sql = "SELECT * FROM reports;";
      List<Report> reports= con.createQuery(sql)
      .throwOnMappingFailure(false)
        .executeAndFetch(Report.class);
        Collections.reverse(reports);
        return reports;
    }
  }

  public static Report find(int id) {
    try(Connection con = DB.sql2o.open()) {
      String sql = "SELECT * FROM reports WHERE id=:id;";
      Report report = con.createQuery(sql)
        .addParameter("id", id)
        .executeAndFetchFirst(Report.class);
      return report;
    }
  }

  public static List<Report> getReportsByTrainId(int id_train) {
    try(Connection con = DB.sql2o.open()) {
      String sql = "SELECT * FROM reports WHERE id_train = :id;";
      return con.createQuery(sql)
        .addParameter("id", id_train)
        .executeAndFetch(Report.class);
    }
  }
}
