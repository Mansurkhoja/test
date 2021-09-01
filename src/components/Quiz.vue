<template>
  <div class="quiz" v-if="quizData">
    <div class="quiz__inner">
      <div class="quiz__items" v-if="quizData">
        <div class="quiz__name" v-html="quizData.question"></div>
        <div class="quiz__answers">
          <div class="quiz__answer"
               v-for="(answer, idx) in quizAnswer"
               :key="idx"
               @click="$emit('selectAnswer', idx)"
               v-html="answer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Quiz',
  props: {
    quizData: {
      type: Object,
    },
    quizAnswer: null,
  },
  emits: ['selectAnswer'],
};
</script>

<style>
.quiz {
  padding: 15px;
}
.quiz__items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quiz__name {
  margin: 10px 0;
}
.quiz__answers {
  border: 2px solid rgba(146, 144, 31, 0.5);
  border-radius: 10px;
  padding: 0 10px;
  min-width: 100%;
}
.quiz__answer {
  padding: 10px;
  margin: 10px 0;
  color: rgb(233, 245, 255);
  background-color: rgba(99, 99, 99, 0.5);
  border-bottom: 2px dashed rgba(255, 252, 103, 0.5);
  border-radius: 10px 10px 0 0;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.2s linear;
}
.quiz__answer:hover {
  background-color: rgba(99, 99, 99, 1);
}
</style>
