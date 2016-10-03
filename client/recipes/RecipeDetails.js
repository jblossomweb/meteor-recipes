Template.RecipeDetails.onCreated(function(){
  var self = this;
  console.log('RecipeDetails');
  self.autorun(function(){
    self.subscribe('recipes');
  });
});

Template.RecipeDetails.helpers({
  recipe: function() {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({
      _id: id
    });
  }
});