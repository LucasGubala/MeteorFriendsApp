import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { firstname: 'Bob', lastname: 'Smith', Address: '123 Pine St', Phone: '555-123-4567', Email: 'foop@gump.com' },
  { firstname: 'Steve', lastname: 'Jones', Address: '821 45th Cir', Phone: '555-123-8764', Email: 'glump@mars.net' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
