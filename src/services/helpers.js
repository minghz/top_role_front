import RacesData from '../data/races.json';
import BackgroundsData from '../data/backgrounds.json';
import ClassesData from '../data/classes.json';

export function attributeNameFromType(type) {
  switch(type) {
    case 'str':
      return 'Strength'
    case 'dex':
      return 'Dexterity'
    case 'con':
      return 'Constitution'
    case 'int':
      return 'Inteligence'
    case 'wis':
      return 'Wisdom'
    case 'cha':
      return 'Charisma'
    default:
      return 'N/A'
  }
}

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

export function savingProficienciesFromClass(className) {
  var item = ClassesData.find(({name}) => name === className)
  var attr_keys = item.proficiencies.savingThrow // array with attribute keys
  return {
    str: attr_keys.includes("str"),
    dex: attr_keys.includes("dex"),
    con: attr_keys.includes("con"),
    int: attr_keys.includes("int"),
    wis: attr_keys.includes("wis"),
    cha: attr_keys.includes("cha")
  }
}

export function modifierFromAttribute(attribute) {
  return Math.floor((attribute - 10) / 2);
}

export function modifiers(base, racial) {
  return {
    str: modifierFromAttribute(base.str + racial.str),
    dex: modifierFromAttribute(base.dex + racial.dex),
    con: modifierFromAttribute(base.con + racial.con),
    int: modifierFromAttribute(base.int + racial.int),
    wis: modifierFromAttribute(base.wis + racial.wis),
    cha: modifierFromAttribute(base.cha + racial.cha)
  }
}

export function listNames(array) {
  return Array.from(array, item => item["name"])
}

export function racialAttributes(raceName) {
  var obj = RacesData.find(({ name }) => name === raceName)

  return {
    str: obj.attributes.str || 0,
    dex: obj.attributes.dex || 0,
    con: obj.attributes.con || 0,
    int: obj.attributes.int || 0,
    wis: obj.attributes.wis || 0,
    cha: obj.attributes.cha || 0
  }
}

export function backgroundParagraphs(backgroundName) {
  var background = BackgroundsData.find(({name}) => name === backgroundName)
  return background.entries
}
