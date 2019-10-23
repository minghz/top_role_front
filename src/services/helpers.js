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
