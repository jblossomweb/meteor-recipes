Meteor.subscribe('recipes');

// console.log(Meteor.settings.public.ga.account);

Template.Recipes.helpers({
  recipes: function() {
    return Recipes.find({});
  }
});