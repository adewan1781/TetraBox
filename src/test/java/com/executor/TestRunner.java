package com.executor;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/java/features"},
		glue={"com.stepDefinations"},
		tags="@login,@createfolder",
		plugin ={"html:target/htmlreports/report.html"}
		)
public class TestRunner {

	
}
