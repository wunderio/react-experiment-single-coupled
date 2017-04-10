# React experiment single coupled
Experiment to test best practices, pros and cons of a react single page application coupled with Drupal.

# Step 01
* Create a Drupal module that implements a controller that renders a template that contains the markup for the app container.
* create a hello world React app that will be renderd into the page rthat is provided by the controller
* for scaffolding the app we used the project ["create-react-app"](https://github.com/facebookincubator/create-react-app) by facebook to adhere to best practices and have a library that is well documented.
* to be able to use the build process provided by "creat-react-app" the homepage parameter in package.json was modified with the path to the module directory so that static assets work as well within the context of a Drupal page.
* at the mopment the JS and CSS files created by the build process are manually updated in the Drupal library definition. This needs to be automated in the future.
