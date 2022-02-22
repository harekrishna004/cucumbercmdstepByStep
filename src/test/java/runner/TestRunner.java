package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@cucumber.api.CucumberOptions(
@CucumberOptions(
		features= {"src/test/resources/features"},
		glue= {"Steps"},
		monochrome = true,
		plugin= {"json:target/cucumber.json","rerun:target/failedrerun.txt"}
		
//				"json:target/MyReports/report.json",
//                "junit:target/MyReports/report.xml",
//		        "html:target/MyReports/cucumber",
//		        "rerun:target/failedrerun.txt"
//	       	tags= {"@Smoke , @Regresion"} // OR Tags
//		   tags= {"@Smoke","@Regresion"} //And Tags
//			 tags= {"~@Smoke","@Regresion"}
		        
		)
public class TestRunner {

}
