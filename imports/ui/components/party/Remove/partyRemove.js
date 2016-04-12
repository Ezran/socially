import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import './partyRemove.html';
import { Parties } from '../../../../api/collection';

class PartyRemove {
  remove() {
    if (this.party) {
        Parties.remove(this.party._id);
    }
  }
}
 
const name = 'partyRemove';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: `imports/ui/components/party/Remove/${name}.html`,
  bindings: {
    party: '<'
  },
  controllerAs: name,
  controller: PartyRemove
});