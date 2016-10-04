Template.Recipe.helpers({
  recipeId: function() {
    return this._id;
  }
});

Template.Recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash': function() {
    if(confirm('Permanently delete recipe for '+this.name+'?')) {
      Meteor.call('deleteRecipe', this._id);
    }
  },
  'click .fa-pencil': function() {
    Session.set(this._id, !Session.get(this._id));
  }
});