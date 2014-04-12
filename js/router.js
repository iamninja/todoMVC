Todos.Router.map(function() {
	this.resource('todos', { path: '/' });
});

// Create todos class with 
// model function returns the existing todos
Todos.TodosRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('todo');
	}
});