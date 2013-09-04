# AngularJS Phone Catalog Tutorial Application as Java-Maven-App

## Overview

This is a simple web app based on the angular tutorial to show how to use the KarmaTestSuiteRunner.
This app was created with maven "archetypeArtifactId=maven-archetype-webapp" and should represent a common java based web application.
The angular tutorial app "angular-phonecat" was copied and the test execution is done by the KarmaTestSuiteRunner in a JUnit way as described below.

## Motivation: Why using another JUnit test runner instead of karma itself?
A JUnit test runner is fully integrated in any modern JAVA supporting IDE. In most cases a right-click on a test folder and you can execute all java tests with JUnit.
With a JUnit runner you see the execution in realtime in form of some nice green or red bubbles - now you will see something like that for your javascript tests too which
is nice when you have long running e2e (integration) tests. One tool (JUnit) to rule them all ;)

In addition you can use the JUnit @BeforeClass/@AfterClass method to setup and cleanup your test scenarios for e2e tests.

And last but not least the JUnit test runner can be used to integrate karma in other frameworks like Grails so that the grails command "test-app" will execute your javascript test with the
powerful karma framework too. (The grails plugin will follow soon - visit ImmobilienScout24 at github for mor informations).

## Usage

Before you can start clone this web app...


You should have some experience with karma - the angular tutorial (http://docs.angularjs.org/tutorial) should be good start...


* YOU NEED JAVA >= 1.7 TO RUN THIS APP

### Running the webapp

Use the embedded jetty via maven:
```
mvn jetty:run
mvn jetty:stop
```
Browse to http://localhost:8080 to see the angular-phonecat webapp in action...

### Running the tests

To run the test you need to install:
* nodejs (http://nodejs.org/)
* you'll need a chrome or change the karma config which is under test/resources/config (see karma documention)

The webapp ships already with a package.json which install all required dependencies.
Go into the root folder of the webapp and execute the following command in a console:
```
npm install
```
This will install karma and the required karma plugins into the <webapp>/node_modules folder.

************

To run the javascript unit test without JUnit and pure karma style, execute the following command from the webapp root dir:
```
./scripts/test_original.sh
```
If you have a window system run the batch file instead of the shell script...

Ah - you'll hopefully see the successful execution of some javascript tests in chrome.
If you not already have found the tests itself have a look at test/javascript/unit/...

************

To run the javascript e2e test without JUnit and pure karma style, execute the following command from the webapp root dir:
```
mvn jetty:run
./scripts/e2e-test_original.sh
mvn jetty:stop
```
If you have a window system run the batch file instead of the shell script...

Ah - you'll hopefully see the successful execution of some javascript tests in chrome.
If you not already have found the tests itself have a look at test/javascript/e2e/...

************

To run the javascript unit test with JUnit, run the JavaScriptUnitTest (test/java/...) class as a normal JUnit test.

To run the javascript e2e test with JUnit, you have to start the jetty first (s.o.)
Run the JavaScriptIT class (test/java/...) class as a normal JUnit test. Do not forget to stop the jetty...

************

To run the javascript unit test with JUnit and maven:
```
mvn test
```

To run the javascript e2e test with JUnit and maven (make sure that no jetty is already running):
```
mvn integration-test
```

To run all tests with JUnit and maven (make sure that no jetty is already running):
```
mvn verify
```

### Use the KarmaTestSuiteRunner in your own project
The KarmaTestSuiteRunner is still a snapshot version. Make sure your pom allows snapshots:

```
<repositories>
    <repository>
        ...
        <snapshots>
            <enabled>true</enabled>
            <updatePolicy>always</updatePolicy>
            <checksumPolicy>fail</checksumPolicy>
        </snapshots>
        ...
    </repository>
</repositories>
```

These are the needed dependencies:

```
<dependency>
    <groupId>de.is24.util</groupId>
    <artifactId>junit-karma-testrunner</artifactId>
    <version>1.0-SNAPSHOT</version>
    <type>jar</type>
</dependency>
```


### Issues
The KarmaTestSuiteRunner is still a snapshot version, so every bug report or change requests are welcome. Use the github issue page for this webapp
or even better: https://github.com/ImmobilienScout24/junit-karma-testrunner






