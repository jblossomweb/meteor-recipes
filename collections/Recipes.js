Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function(userId){
    return !!userId; // user exists
  },
  update: function(userId, doc){
    return !!userId; // user exists
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  amount: {
    type: String // allow flexibility of units
  }
});

Recipes.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: [Ingredient] // allow multiple sub-docs
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
}));

Meteor.methods({
  toggleMenuItem: function(id, state) {
    Recipes.update(id, {
      $set: {
        inMenu: !state
      }
    })
  },
  deleteRecipe: function(id) {
    Recipes.remove(id);
  }
});

export default Recipes;