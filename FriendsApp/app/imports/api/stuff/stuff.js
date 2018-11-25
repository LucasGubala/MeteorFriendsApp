import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  firstname: {
    label: 'First',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Bicycle',
    },
  },
  lastname: {
    label: 'Last',
    type: String,
    optional: false,
    autoform: {
      group: 'Stuff',
      placeholder: 'Smith',
    },
  },
  Address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: '123 Pine St',
    },
  },
  Phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: '555-555-5555',
    },
  },
  Email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'gomble@gmail.com',
    },
  },
});

Stuff.attachSchema(StuffSchema);
