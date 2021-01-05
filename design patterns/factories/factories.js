/* The factory pattern is a creational pattern that doesn't require us
 to use a constructor but provides a generic interface
  for creating objects.
This pattern can be really useful when the creation process is complex.

 */
function MyClass(options){
    this.options = options;
}

function create(options){
    // here is the complex options of creations 
    return new MyClass(options);
}

module.exports.create = create;