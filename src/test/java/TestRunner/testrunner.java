package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
		
	@RunWith (Cucumber.class)
	@CucumberOptions (
		features = "src/test/java/features"
		,glue={"StepDefinition"},
		plugin = {"pretty","html:target/cucumber-html-report","usage:target/cucumber-usage.json","junit:target/cucumber-result.xml"}
		,tags = {"@Registration"}
			)
		
	
 public class testrunner{
		
}