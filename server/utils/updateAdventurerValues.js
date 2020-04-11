const { values } = require('./constants');

module.exports = (entity) => {
  const {
    baseAttack,
    baseMagicAttack,
    baseDefense,
    baseMagicDefense,
    baseHit,
    baseFlee,
    movementSpeed,
    attackSpeed,
    baseHealth,
    baseMana,
  } = entity;
  const {
    strength,
    intelligence,
    agility,
    dexterity,
    vitality,
  } = entity.attributes;
  entity.attack = Math.floor(
    baseAttack +
      values.STRENGTH_MULTIPLIER_TO_ATTACK * strength +
      values.DEXTERITY_MULTIPLIER_TO_ATTACK * dexterity
  );
  entity.magicAttack = Math.floor(
    baseMagicAttack +
      values.INTELLIGENCE_MULTIPLIER_TO_MAGIC_ATTACK * intelligence
  );
  entity.defense = Math.floor(
    baseDefense + values.VITALITY_MULTIPLIER_TO_DEFENSE * vitality
  );
  entity.magicDefense = Math.floor(
    baseMagicDefense +
      values.VITALITY_MULTIPLIER_TO_MAGIC_DEFENSE * vitality +
      values.INTELLIGENCE_MULTIPLIER_TO_MAGIC_DEFENSE * intelligence
  );
  entity.hit = Math.floor(
    baseHit + values.DEXTERITY_MULTIPLIER_TO_HIT * dexterity
  );
  entity.flee = Math.floor(
    baseFlee + values.AGILITY_MULTIPLIER_TO_FLEE * agility
  );
  entity.movementSpeed = movementSpeed
    ? movementSpeed
    : values.DEFAULT_MOVEMENT_SPEED;
  entity.attackSpeed = attackSpeed ? attackSpeed : values.DEFAULT_MOVEMENT_SPEED;
  entity.health = Math.floor(baseHealth + values.VITALITY_INCREMENT_TO_HEALTH * vitality);
  entity.mana = Math.floor(baseMana + values.INTELLIGENCE_INCREMENT_TO_MANA * intelligence);
};
