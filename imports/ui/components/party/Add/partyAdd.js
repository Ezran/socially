import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';
import './partyAdd.html';
import { Parties } from '../../../../api/collection';
 
class PartyAdd {
  constructor() {
    this.party = {};
  }
 
  submit() {
    this.party.owner = Meteor.user()._id;
    Parties.insert(this.party);
    this.reset();
  }
 
  reset() {
    this.party = {};
  }
}

 
const name = 'partyAdd';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/party/Add/${name}.html`,
  controllerAs: name,
  controller: PartyAdd
});