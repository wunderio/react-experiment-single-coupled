# React experiment single coupled
Experiment to test best practices, pros and cons of a react single page application coupled with Drupal.

## Step 01
* Create a Drupal module that implements a controller that renders a template that contains the markup for the app container.
* Create a hello world React app that will be rendered into the page that is provided by the controller
* For scaffolding the app we used the project ["create-react-app"](https://github.com/facebookincubator/create-react-app) by Facebook to adhere to best practices and have a library that is well documented.
* To be able to use the build process provided by "creat-react-app" the homepage parameter in package.json was modified with the path to the module directory so that static assets work as well within the context of a Drupal page.
* At the moment the JS and CSS files created by the build process are manually updated in the Drupal library definition due dynamically added hash to the filename. This needs to be automated in the future.

## Step 02
* Introduce client side routing
* [React Router DOM](https://reacttraining.com/react-router/web/) was chosen as a solution for component based declarative routing.
* CAVEAT: Although client side routing works well combined with routes that are answered serverside by using the `<BrowserRouter>` component, the UX is not perfect. In case the user navigates to a route that is not served by the client and uses the browser's back button, she or he will get a 404 because we have no server-side rendering for those routes. Same goes for a hard reload of one of the non base routes that normally work from within the client.
* To solve the routing problem mentioned above we decided to use the `<HashRouter>`
 legacy component. It solves the UX problems mentioned, but not all possible plugins might work with that approach [see the docs for HashRouter](https://reacttraining.com/react-router/web/api/HashRouter).

 ## Step 03
 * Client side routing enhancements & basic Forms
 * Links have been transformed to NavLinks following this tutorial: [React Router 4 Training](https://egghead.io/lessons/react-run-the-react-router-v4-examples-with-create-react-app). Using the new functionality of NavLinks activeClassName has been used to highlight the link when it is the active route. 
 * A basic form component (UserForm) has been rendered on MemberDataPage which simply returns the value of the text input on submit. This component follows the advice from the [Official Facebook Documentation](https://facebook.github.io/react/docs/forms.html).
