// const { UnitCharacter } = require('./js/unit_character.class.js');
// const { Team } = require('./js/Team.class.js');

import { UnitCharacter } from './js/unit_character.class.js';
import { Team } from './js/Team.class.js';

const tor = new UnitCharacter('Tor', 'Magician');
const gor = new UnitCharacter('Gor', 'Bowerman');

const listAllUnit = [gor, tor, gor];

const teamDreem = new Team();
// teamDreem.add(tor)
// teamDreem.add(gor)
// // teamDreem.add(gor)

teamDreem.addAll(listAllUnit);
console.log(teamDreem);
const teamDreemList = teamDreem.toArray();
console.log(teamDreemList, '- end');

