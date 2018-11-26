import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddStuffForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_Stuff_Page');
    },
  },
});

Template.Add_Stuff_Page.events({
  'submit .new-contact': function (event) {
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const Address = event.target.Address.value;
    const Phone = event.target.Phone.value;
    const Email = event.target.Email.value;

    Stuff.insert({
      firstname: firstname,
      lastname: lastname,
      Address: Address,
      Phone: Phone,
      Email: Email,
    });
  },
});


Template.Add_Stuff_Page.helpers({
  stuffCollection() {
    return Stuff;
  },
});
