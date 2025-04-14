const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      playerattack: { min: 5, max: 12 },
      playerSpecialAttack: { min: 10, max: 25 },
      playerHelAmount: { min: 8, max: 20 },
      monsterHealth: 100,
      monsterattack: { min: 8, max: 15 },
      roundNum: 0,
      specialAttackLaunchRound: -99,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    playerHealthBar() {
      return { width: this.playerHealth + "%" };
    },
    monsterHealthBar() {
      return { width: this.monsterHealth + "%" };
    },
    specialAttackCooldown() {
      if (this.roundNum - this.specialAttackLaunchRound >= 3) return false;
      else return true;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.roundNum = 0;
      this.specialAttackLaunchRound = -99;
      this.winner = null;
      logMessages = [];
    },
    attackMonster() {
      const attackValue = getRandomValue(this.playerattack.min, this.playerattack.max);
      this.monsterHealth -= attackValue;
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      }
      this.addLogMessage("player", "attack", attackValue);
      this.playerRoundEnd();
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(this.playerSpecialAttack.min, this.playerSpecialAttack.max);
      this.monsterHealth -= attackValue;
      this.specialAttackLaunchRound = this.roundNum;
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      }
      this.addLogMessage("player", "special-attack", attackValue);
      this.playerRoundEnd();
    },
    attackPlayer() {
      const attackValue = getRandomValue(this.monsterattack.min, this.monsterattack.max);
      this.playerHealth -= attackValue;
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
      }
      this.addLogMessage("monster", "attack", attackValue);
    },
    playerRoundEnd() {
      this.roundNum++;
      this.attackPlayer();
    },
    playerHeal() {
      const healValue = getRandomValue(this.playerHelAmount.min, this.playerHelAmount.max);
      this.playerHealth += healValue;
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.addLogMessage("player", "heal", healValue);
      this.playerRoundEnd();
    },
    playerSurrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    selectWhoStyle(who) {
      return who === "player" ? "log--player" : "log--monster";
    },
    selectWhoText(who) {
      return who === "player" ? "Player " : "Monster ";
    },
    selectWhatStyle(what) {
      return what === "heal" ? "log--heal" : "log--damage";
    },
    selectWhatText(what) {
      return what === "heal" ? "heal himself for " : "deal damage to ";
    },
  },
});
app.mount("#game");

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
