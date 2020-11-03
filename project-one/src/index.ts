import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import {} from 'googlemaps';

const user = new User();
const company = new Company();
console.log(company.companyName);
let map = new CustomMap('#map');

map.addMarker(user);
map.addMarker(company);
