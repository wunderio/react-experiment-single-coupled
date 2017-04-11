# React experiment single coupled
Experiment to test best practices, pros and cons of a react single page application coupled with Drupal.

# Step 01
* Create a Drupal module that implements a controller that renders a template that contains the markup for the app container.
* create a hello world React app that will be renderd into the page rthat is provided by the controller
* for scaffolding the app we used the project ["create-react-app"](https://github.com/facebookincubator/create-react-app) by facebook to adhere to best practices and have a library that is well documented.
* to be able to use the build process provided by "creat-react-app" the homepage parameter in package.json was modified with the path to the module directory so that static assets work as well within the context of a Drupal page.
* at the mopment the JS and CSS files created by the build process are manually updated in the Drupal library definition. This needs to be automated in the future.

## Step 02
* Introduce client side routing
* [React Router DOM](https://reacttraining.com/react-router/web/) was chosen as a solution for component based declarative routing.
* CAVEAT: Although client side routing works well combined with routes hat are answered serverside by using the `<BrowserRouter>` component, the UX is not perfect. In case the user navigates to a route that is not served by the client and uses the browser's back button, she or he will get a 404 because we have noi server-side rendering for those routes. Samew goes for a hard reload of one of the non base routes that normally work from within the client.
* To solve the routing problem mentioned above we decided to use the `<HashRouter>`
 legacy component. It solves the UX problems mentioned, but not all possible plugins might work with that approach [see the docs for HashRouter](https://reacttraining.com/react-router/web/api/HashRouter)
