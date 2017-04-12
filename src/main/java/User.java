import org.sql2o.*;
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;
import java.sql.Timestamp;

public class User {
  private int id;
  private String email;
  private String username;
  private String password;
  private String image;

  public User(String email, String username, String password, String image) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.image = image;
  }

  public String getEmail() {
    return this.email;
  }

  public int getId() {
    return this.id;
  }

  public String getUsername() {
    return this.username;
  }

  public String getPassword() {
    return this.password;
  }

  public String getImage() {
    return this.image;
  }

  public void save() {
    try(Connection con = DB.sql2o.open()) {
      String sql = "INSERT INTO users (email, username, password, image) VALUES (:email, :username, :password, :image);";
      this.id = (int) con.createQuery(sql, true)
        .addParameter("email", this.email)
        .addParameter("username", this.username)
        .addParameter("password", this.password)
        .addParameter("image", this.image)
        .executeUpdate()
        .getKey();
    }
  }

  public static List<User> all() {
    try(Connection con = DB.sql2o.open()) {
      String sql = "SELECT * FROM users;";
      return con.createQuery(sql)
        .executeAndFetch(User.class);
    }
  }

  public static User find(int id) {
    try(Connection con = DB.sql2o.open()) {
      String sql = "SELECT * FROM users WHERE id=:id;";
      User user = con.createQuery(sql)
        .addParameter("id", id)
        .executeAndFetchFirst(User.class);
      return user;
    }
  }

  public User authenticate(){
    try(Connection con = DB.sql2o.open()) {
      String searchForUser= "SELECT * FROM users WHERE username=:username AND password=:password";
      User foundUserName = con.createQuery(searchForUser)
        .addParameter("username", this.username)
        .addParameter("password", this.password)
        .executeAndFetchFirst(User.class);
      return foundUserName;
    }
  }
  //new method added by Evan to check if username is taken already at registration
  public User authenticateUserNameForNewUserRegistration(){
    try(Connection con = DB.sql2o.open()) {
      String searchForUserName= "SELECT * FROM users WHERE username=:username;";
      User foundUserName = con.createQuery(searchForUserName)
        .addParameter("username", this.username)
        .executeAndFetchFirst(User.class);
      return foundUserName;
    }
  }

  public int getReportCount() {
    try(Connection con = DB.sql2o.open()) {
      String sql = "SELECT COUNT(*) FROM reports WHERE id_user = :id;";
      int reportCount = con.createQuery(sql)
        .addParameter("id", this.id)
        .executeAndFetchFirst(Integer.class)
        .intValue();
      return reportCount;
    }
  }
}
