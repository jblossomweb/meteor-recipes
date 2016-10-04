Template.RecipeDetails.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipe', FlowRouter.getParam('id'));
  });
});

Template.RecipeDetails.helpers({
  recipe: function() {
    return Recipes.findOne({
      _id: FlowRouter.getParam('id')
    });
  }
});