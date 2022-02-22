package Steps;

import cucumber.api.java.en.*;

public class LoginSteps {


	@Given("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
		
	
	}

	@When("^user enters valid username and password$")
	public void user_enters_valid_username_and_password() throws Throwable {
	}

	@Then("^user is navigated to home page$")
	public void user_is_navigated_to_home_page() throws Throwable {
	}

	@Then("^error message is displayed invalid credentials$")
	public void error_message_is_displayed_invalid_credentials() throws Throwable {
	}

	@And("^clicks on login button$")
	public void clicks_on_login_button() throws Throwable {
	}
	
	@Given("^user calculated (\\d+)/(\\d+)$")
	public void user_calculated(int arg1, int arg2)  {
		
		//int i= 1/0;
		//System.out.println(i);
		System.out.println("hello");
	}



}
