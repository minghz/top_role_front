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

export function totalSkillBonus(proficient, bonus, modifier) {
  return proficient ? bonus + modifier : modifier
}

export function mapOfSkillAttribute() {
  return {
    athletics:      'str',
    acrobatics:     'dex',
    sleightOfHand:  'dex',
    stealth:        'dex',
    arcana:         'int',
    history:        'int',
    investigation:  'int',
    nature:         'int',
    religion:       'int',
    animalHandling: 'wis',
    insight:        'wis',
    medicine:       'wis',
    perception:     'wis',
    survival:       'wis',
    deception:      'cha',
    intimidation:   'cha',
    performance:    'cha',
    persuasion:     'cha'
  }
}

export function attributeOfSkill(skill) {
  return mapOfSkillAttribute()[skill]
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

export function refreshProfObj(profs) {
  let profObj = {
    athletics:      false,
    acrobatics:     false,
    sleightOfHand:  false,
    stealth:        false,
    arcana:         false,
    history:        false,
    investigation:  false,
    nature:         false,
    religion:       false,
    animalHandling: false,
    insight:        false,
    medicine:       false,
    perception:     false,
    survival:       false,
    deception:      false,
    intimidation:   false,
    performance:    false,
    persuasion:     false
  }

  profs.forEach(prof => {
    profObj[prof] = true
  })

  return profObj
}
