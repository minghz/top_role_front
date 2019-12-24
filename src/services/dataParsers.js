import RacesData from '../data/races.json';
import BackgroundsInfoData from '../data/backgrounds-info.json';
import BackgroundsData from '../data/backgrounds-full.json';
import ClassesData from '../data/classes.json';

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

export function hitDiceNumberFromClass(className) {
  var classObj = ClassesData.find(({name}) => name === className)
  return classObj.hitDice.faces;
}

export function armorProficienciesFromClass(className) {
  var classObj = ClassesData.find(({name}) => name === className)
  var armorProf = classObj.proficiencies.armor
  return armorProf === undefined ? 'none' : armorProf.join(', ');
}

export function weaponProficienciesFromClass(className) {
  var classObj = ClassesData.find(({name}) => name === className)
  var weaponProf = classObj.proficiencies.weapons
  return weaponProf === undefined ? 'none' : weaponProf.join(', ');
}

export function toolProficienciesFromClass(className) {
  var classObj = ClassesData.find(({name}) => name === className)
  var toolProf = classObj.proficiencies.tools
  return toolProf === undefined ? 'none' : toolProf.join(', ');
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
  var background = BackgroundsInfoData.find(({name}) => name === backgroundName)
  return background.entries
}

export function skillProfsFromBackground(backgroundName) {
  var background = BackgroundsData.find(({name}) => name === backgroundName)
  return background.proficiencies.skills
}

export function languagesFromBackground(backgroundName) {
  var background = BackgroundsData.find(({name}) => name === backgroundName)
  return background.proficiencies.languages[0] || 'none'
}

export function toolProfsFromBackground(backgroundName) {
  var background = BackgroundsData.find(({name}) => name === backgroundName)
  let toolProf = background.proficiencies.tools
  return toolProf.length > 0 ? toolProf.join(', ') : 'none'
}

export function featureFromBackground(backgroundName) {
  var background = BackgroundsData.find(({name}) => name === backgroundName)
  return background.feature
}

export function specialtyFromBackground(backgroundName) {
  var background = BackgroundsData.find(({name}) => name === backgroundName)
  return background.specialty
}
