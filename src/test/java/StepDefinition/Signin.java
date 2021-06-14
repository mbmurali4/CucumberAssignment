package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Signin {

public WebDriver driver;
		


@Given("^User is on Elearning application registration page$")
public void user_is_on_Elearning_application_registration_page()  {

	System.setProperty("webdriver.chrome.driver", "C:\\Users\\BALAMURALIMANI\\Downloads\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("http://elearningm1.upskills.in/");
	driver.manage().window().maximize();
	String ExpectedTitle = "My Organization - My education";
	String ActualTitle = driver.getTitle();
	System.out.println("The Title of the Application is : "+ActualTitle);
	
	//Verify assert function for page title
	Assert.assertEquals(ActualTitle,ExpectedTitle);
    }

@When("^User click on signup button for registration$")
public void user_click_on_signup_button_for_registration()  {
	
//Find and click on the Sign up button
	WebElement signup = driver.findElement(By.xpath("//a[contains(text(),'Sign up!')]"));
	signup.click();

}

@When("^User enter mandatory \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enter_mandatory_and_and_and_and_and(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6)  {
    	
//Enter value for  Firstname field
	WebElement Firstname = driver.findElement(By.xpath("//input[@id='registration_firstname']"));
	Firstname.sendKeys("Apples44");
	
//Enter value for Lastname field
	WebElement Lastname = driver.findElement(By.xpath("//input[@id='registration_lastname']"));
	Lastname.sendKeys("Zizs44");
	
//Enter value for email field
	WebElement email = driver.findElement(By.xpath("//input[@id='registration_email']"));
	email.sendKeys("apples44@gmail.com");
	
//Enter value for Username
	WebElement Username = driver.findElement(By.xpath("//input[@id='username']"));
	Username.sendKeys("Apple45");
		
//Enter value for Password 
	WebElement Pass = driver.findElement(By.xpath("//input[@id='pass1']"));
	Pass.sendKeys("Abcd@12365");
		
//Enter value to Confirm Password 
	WebElement Confirmpassword = driver.findElement(By.xpath("//input[@id='pass2']"));
	Confirmpassword.sendKeys("Abcd@12365");
					
}

@When("^User click on register button$")
public void user_click_on_register_button() {

	WebElement Register = driver.findElement(By.xpath("//button[@id='registration_submit']"));
	Register.click();
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
}

@Then("^User should redirect to elearn home page$")
public void user_should_redirect_to_elearn_home_page()  {
	
	WebElement Homepage = driver.findElement(By.xpath("//a[contains(text(),'Homepage')]"));
	Homepage.click();

 //Assert.assertTrue(driver.getTitle().contains("http://elearningm1.upskills.in/index.php"));
	
}

@Then("^User select inbox from user profile$")
public void user_select_inbox_from_user_profile()  {
	
	WebElement Profilelink = driver.findElement(By.xpath("//a[contains(text(),'Profile')]"));
	Profilelink.click();

}

@Then("^User click on compose message icon to enter subject line$")
public void user_click_on_compose_message_icon_to_enter_subject_line() throws InterruptedException  {

	WebElement Composelink = driver.findElement(By.xpath("//a[contains(text(),'Compose')]"));
	Composelink.click();
	Thread.sleep(2000);
	
	WebElement Sendto = driver.findElement(By.xpath("//input[@class='select2-search__field']"));
	Sendto.sendKeys("Apple");
	Thread.sleep(2000);
	Sendto.sendKeys(Keys.ENTER);
	Thread.sleep(2000);
	System.out.println("Apple keyword is entered");

	driver.findElement(By.xpath("//input[@name='title']")).sendKeys("Test Mail");
	Thread.sleep(2000);
	
	
}

@Then("^User click on send message button at the bottom$")
public void user_click_on_send_message_button_at_the_bottom()  {
	WebElement Sendmessage = driver.findElement(By.xpath("//button[@id='compose_message_compose']"));
	Sendmessage.click();
	System.out.print("Click on Send button");
	driver.quit();

}


}
