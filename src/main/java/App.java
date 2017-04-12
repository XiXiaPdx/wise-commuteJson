import java.util.Map;
import java.util.HashMap;
import spark.ModelAndView;
import spark.template.velocity.VelocityTemplateEngine;
import static spark.Spark.*;

public class App {
  public static void main(String[] args) {
    // staticFileLocation("/public");
    externalStaticFileLocation(String.format("%s/src/main/resources/public", System.getProperty("user.dir")));
    String layout = "templates/layout.vtl";

    before("/", (request, response) -> {
      if (request.session().attribute("user") == null) {
        response.redirect("/login");
        }
    });
    before("/reports", (request, response) -> {
      if (request.session().attribute("user") == null) {
        response.redirect("/login");
        }
    });

    get("/", (request, response) -> {
      Map<String, Object> model = new HashMap<String, Object>();

         User newUser = (request.session().attribute("user"));
         model.put("newUser", newUser);
         model.put("template", "templates/index.vtl");

       return new ModelAndView(model, layout);
     } , new VelocityTemplateEngine());

    get("/login", (request, response) -> {
       Map<String, Object> model = new HashMap<String, Object>();
       User checkUser = request.session().attribute("warning");
       model.put("warning", checkUser);
       return new ModelAndView(model, "templates/login.vtl");
     }, new VelocityTemplateEngine());

    get("/login/validate", (request, response) -> {
      Map<String, Object> model = new HashMap<String, Object>();
      String userName = request.queryParams("userName");
      String userPassWord = request.queryParams("userPassword");
      User newUser = new User("", userName, userPassWord, "");

      if (newUser.authenticate() != null) {
        request.session().attribute("warning", null);
        request.session().attribute("user", newUser);
        response.redirect("/");
      } else {
      request.session().attribute("warning", newUser);
      response.redirect("/login");
    }
    return null;
  });

  get("/logout", (request, response) -> {
     Map<String, Object> model = new HashMap<String, Object>();
     request.session().removeAttribute("warning");
     request.session().removeAttribute("user");
     response.redirect("/login");
     return null;
   });



    get("/reports", (request, response) -> {
      Map<String, Object> model = new HashMap<String, Object>();
      User newUser = (request.session().attribute("user"));
      model.put("newUser", newUser);
      model.put("template", "templates/index.vtl");
      model.put("report", "templates/reports.vtl");
      return new ModelAndView(model, layout);
    }, new VelocityTemplateEngine());

    post("/addReport", (request, response) -> {
      Map<String, Object> model = new HashMap<String, Object>();
      User newUser = request.session().attribute("user");


      int id_user = newUser.getId();
      int id_train = Integer.parseInt(request.queryParams("id_train"));
      String comment = request.queryParams("reportComment");
      int trainCapacity = Integer.parseInt(request.queryParams("trainCapacity"));
      int nextStopID = Integer.parseInt(request.queryParams("id_stop"));

      String trainCapacityString = "";
      if(trainCapacity <= 33) {
        trainCapacityString = Report.CAPACITY_EMPTY; //CAPACITY_EMPTY = "empty"
      } else if (trainCapacity > 33 && trainCapacity <= 66) {
        trainCapacityString = Report.CAPACITY_HALF; //CAPACITY_HALF = "half"
      } else if (trainCapacity > 66 && trainCapacity <= 99) {
        trainCapacityString = Report.CAPACITY_FULL; //CAPACITY_FULL = "full"
      }

      Report report = new Report(id_user, id_train, trainCapacityString, comment, nextStopID);
      report.save();
      // this is testing timestamps are returned from most recent to later.
      for ( Report list: Report.all()){
        System.out.println(list.getTimestamp());
      }
      //end of test
      
      response.redirect("/");
      return new ModelAndView(model, layout);
    }, new VelocityTemplateEngine());

    post("/addReport", (request, response) -> {
      Map<String, Object> model = new HashMap<String, Object>();
      int trainCapacity = Integer.parseInt(request.queryParams("capacityRange"));
      String trainReported= request.queryParams("trainReported");
      String stopReported= request.queryParams("stopReported");
      String reportComment = request.queryParams("reportComment");
      User newUser = (request.session().attribute("user"));
      String url = String.format("/reports");
      response.redirect(url);
      return new ModelAndView(model, layout);
    }, new VelocityTemplateEngine());


  }
}
