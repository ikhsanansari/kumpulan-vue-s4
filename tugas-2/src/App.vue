<template>
  <div id="app">
    <div class="container">
      <div
        class="guess-box"
        :class="{ correct: isCorrect, wrong: isWrong }"
        :style="{ backgroundColor: bgColor }"
      >
        <h2>Tebak Angka</h2>
        <input type="number" v-model="userGuess" placeholder="Masukkan tebakan Anda" />
        <button @click="checkGuess">Cek Tebakan</button>
        <p v-if="showResult" class="result">{{ resultMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userGuess: null,
      isCorrect: false,
      isWrong: false,
      bgColor: 'white',
      showResult: false,
      resultMessage: ''
    }
  },
  methods: {
    checkGuess() {
      const randomNumber = Math.floor(Math.random() * 200) // Generate angka acak antara 0 dan 200
      this.showResult = true
      if (this.userGuess === null || isNaN(this.userGuess)) {
        this.resultMessage = 'Masukkan tebakan yang valid!'
        this.bgColor = '#e74c3c' // Merah
      } else if (this.userGuess == randomNumber) {
        this.isCorrect = true
        this.resultMessage = `Tebakan Anda benar! Angka yang benar adalah ${randomNumber}.`
        this.bgColor = '#2ecc71' // Hijau
      } else {
        this.isWrong = true
        this.resultMessage = `Tebakan Anda salah! Angka yang benar adalah ${randomNumber}.`
        this.bgColor = '#e74c3c' // Merah
      }
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.guess-box {
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  border: 2px solid #3498db;
}

input[type='number'] {
  width: 100px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}

.result {
  margin-top: 10px;
  font-weight: bold;
}
.correct {
  border-color: #2ecc71; /* Hijau */
}
.wrong {
  border-color: #e89389; /* Merah */
}
</style>
