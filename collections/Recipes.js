Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc){
    return !!userId; //exists
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

export default Recipes;