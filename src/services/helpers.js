import RacesData from '../data/races.json';

export function proficiencyBonusFromLevel(level) {
  if(level < 5){
    return 2;
  } else if(level < 9) {
    return 3;
  } else if(level < 13) {
    return 4;
  } else if(level < 17) {
    return 5;
  } else {
    return 6;
  }
}

export function modifierFromAttribute(attribute) {
  return Math.floor((attribute - 10) / 2);
};

export function listNames(array) {
  return Array.from(array, race => race["name"])
}

export function racialAttributes(raceName) {
  var obj = RacesData.find(({ name }) => name === raceName)

  return obj.attributes;
}
