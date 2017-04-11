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

    get("/", (request, response) -> {
      Map<String, Object> model = new HashMap<String, Object>();
      if ((request.session().attribute("user")) == null){
       response.redirect("/login");
       } else {
         model.put("template", "templates/index.vtl");
       }
       return new ModelAndView(model, layout);
     } , new VelocityTemplateEngine());

    get("/login", (request, response) -> {
       Map<String, Object> model = new HashMap<String, Object>();
       String warning = request.session().attribute("warning");
       model.put("warning", warning);
       return new ModelAndView(model, "templates/login.vtl");
     }, new VelocityTemplateEngine());

    get("/login/validate", (request, response) -> {
      Map<String, Object> model = new HashMap<String, Object>();
      String userID = request.queryParams("userID");
      if (userID.equals("1234")) {
        request.session().attribute("warning", null);
        request.session().attribute("user", userID);
        response.redirect("/");
      } else {
      request.session().attribute("warning", "fail");
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
      model.put("template", "templates/index.vtl");
      model.put("report", "templates/reports.vtl");
      return new ModelAndView(model, layout);
    }, new VelocityTemplateEngine());

    post("/reports", (request, response) -> {
      Map<String, Object> model = new HashMap<String, Object>();
      int id_user = Integer.parseInt(request.queryParams("id_user"));
      int id_train = Integer.parseInt(request.queryParams("id_train"));
      String comment = request.queryParams("comment");
      int trainCapacity = Integer.parseInt(request.queryParams("trainCapacity"));

      String trainCapacityString = "";

      if(trainCapacity <= 33) {
        trainCapacityString = Report.CAPACITY_EMPTY; //CAPACITY_EMPTY = "empty"
      } else if (trainCapacity > 33 && trainCapacity <= 66) {
        trainCapacityString = Report.CAPACITY_HALF; //CAPACITY_HALF = "half"
      } else if (trainCapacity > 66 && trainCapacity <= 99) {
        trainCapacityString = Report.CAPACITY_FULL; //CAPACITY_FULL = "full"
      }

      Report report = new Report(id_user, id_train, trainCapacityString, comment);
      report.save();

      String url = String.format("/reports");
      response.redirect(url);
      return new ModelAndView(model, layout);
    }, new VelocityTemplateEngine());

  }
}
