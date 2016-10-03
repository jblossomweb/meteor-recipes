FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action: function() {
    BlazeLayout.render('MainLayout', {
      main: 'Recipes'
    });
  }
});