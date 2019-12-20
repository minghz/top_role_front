export function averageHp(level, conMod, hitDice) {
  var startingHp = hitDice + conMod
  if(level == 1){ return startingHp }

  var maxDice = hitDice
  var rolls = level - 1
  var averageRoll = ((maxDice + 1) / 2) * rolls
  var conModAddition = rolls * conMod // Warning! with high Constitution, HP may be inflated

  return startingHp + Math.floor(averageRoll) + conModAddition
}

export function rolledHp(level, conMod, hitDice) {
}
