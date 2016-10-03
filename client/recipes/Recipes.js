// tie recipes to template instead of route (performs better)
Template.Recipes.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipes');
  });
});

Template.Recipes.helpers({
  recipes: function() {
    return Recipes.find({});
  }
});

// console.log(Meteor.settings.public.ga.account);