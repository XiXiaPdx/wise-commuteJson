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

  }
}
