<template>
  <div>
    <div class="study_con study_card" >
      <h4><p>양방향 data 사용</p></h4>
      message : {{ message }}
      <p>이처럼 data영역에 message를 선언한후 중괄호  <code>{{}}</code>를 이용하여 변수를 사용할 수 있다.</p>
    </div>

    <div class="study_con study_card">
      <h4><p>양방향 data 사용</p></h4>
      message : {{ message }}
      <p>이처럼 data영역에 message를 선언한후 중괄호  <code>{{}}</code>를 이용하여 변수를 사용할 수 있다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuVueStudyPage",
  data : ()=> ({
    message : "메세지",

  })
}
</script>

<style scoped>
.study_con{
  display: flex;
  flex-direction: column;
  align-items: flex-start

}
.study_card{
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-top : 20px;
}

</style>