package de.is24.test;

import de.is24.util.karmatestrunner.junit.KarmaTestSuiteRunner;
import org.junit.runner.RunWith;


@RunWith(KarmaTestSuiteRunner.class)
@KarmaTestSuiteRunner.KarmaConfigPath("./src/test/resources/config/karma-e2e.conf.js")
//@KarmaTestSuiteRunner.KarmaProcessBuilderArgs("./scripts/e2e-test.sh") // i need this when running on mac to get karma to runn
public class JavaScriptUnitIT {
}
