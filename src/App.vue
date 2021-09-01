<template>
  <div class="progress">
    <div class="progressed" :style="progressed"></div>
  </div>
  <Quiz v-if="currentQuiz < 10"
   :quizData="data[currentQuiz]"
   :quizAnswer="quizAnswer"
   @selectAnswer="selectAnswer" />
   <div class="completed" v-else>
     Правильно {{ corectSelected }} из 10
   </div>
</template>

<script>
import _ from 'lodash';
import Quiz from '@/components/Quiz.vue';

export default {
  name: 'App',
  components: {
    Quiz,
  },
  data() {
    return {
      data: [],
      currentQuiz: 0,
      correctAnswer: '',
      quizAnswer: [],
      corectSelected: 0,
    };
  },
  mounted() {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.data = resJson.results;
        this.shuffleAnswers();
      });
  },
  computed: {
    answers() {
      const answers = [...this.data[this.currentQuiz].incorrect_answers];
      answers.push(this.data[this.currentQuiz].correct_answer);
      return answers;
    },
    progressed() {
      return `width:${this.currentQuiz * 10}%;`;
    },
  },
  methods: {
    shuffleAnswers() {
      if (this.currentQuiz < 10) {
        this.quizAnswer = _.shuffle(this.answers);
        this.correctAnswer = this.quizAnswer.indexOf(
          this.data[this.currentQuiz].correct_answer,
        );
      }
    },
    selectAnswer(e) {
      if (e === this.correctAnswer) {
        this.corectSelected += 1;
      }
      this.currentQuiz += 1;
      this.shuffleAnswers();
    },
  },
};
</script>

<style>
html {
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
}
body {
    margin: 0;
    backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  background-color: #aeffd9;
  min-height: 100vh;
}
.progress {
  height: 10px;
  background-color: transparent;
  position: relative;
}
.progressed {
  background-color: rgba(0, 174, 255, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  transition: width 0.2s linear;
}
</style>
