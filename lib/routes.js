FlowRouter.route('/', {
  name: 'home',
  action: function() {
    if(Meteor.userId()) {
      FlowRouter.go('recipe-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action: function() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {
      main: 'Recipes'
    });
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action: function() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {
      main: 'RecipeDetails'
    });
  }
});