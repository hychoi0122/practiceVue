<template>
  <div>
    <div class="study_con study_card" >
      <h4><b>Vue란?</b></h4>
      <p>사용자 인터페이스 ( 프론트엔드 )를 만들기 위한 <b>프로그레시브 프레임워크</b></p>
      <br>
      <h4><b>설치방법</b></h4>
      <p>1. 스크립트 추가 ( CDN )</p>
      <table><tbody><tr><td class="code"><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br></code></pre></td></tr></tbody></table>
      <table><tbody><tr><td class="code"><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/vue@2.6.0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br></code></pre></td></tr></tbody></table>
      <table><tbody><tr><td class="code"><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"module"</span>&gt;</span><br><span class="javascript">  <span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'</span></span><br><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br></code></pre></td></tr></tbody></table>
      <p>2. NPM</p>
      <table><tbody><tr><td class="code"><pre><code class="hljs bash"><span class="hljs-comment"># 최신 안정화 버전</span><br>$ npm install vue<br></code></pre></td></tr></tbody></table>
    </div>

    <div class="study_con study_card" >
      <h4><p>양방향 data 사용</p></h4>
      message : {{ message }}
      <p>이처럼 data영역에 message를 선언한후 중괄호  <code>{{}}</code>를 이용하여 변수를 사용할 수 있다.</p>
    </div>

    <div class="study_con study_card">
      <h4><p>조건문과 반복문</p></h4>
      seen : true ( data에 선언되어있음 )
      <table><tbody><tr><td class="code"><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app-3"</span>&gt;</span><br>  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"seen"</span>&gt;</span>이제 나를 볼 수 있어요<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br></code></pre></td></tr></tbody></table>
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
pre{
  font-family: "Roboto Mono", Monaco, courier, monospace;
  font-size: 0.85em;
  background-color: #f8f8f8;
  -webkit-font-smoothing: initial;
}
pre code {
  overflow-x: auto;
  color: #525252;
  white-space: pre;
  padding: 1.2em 1.4em;
  font-size: 0.85rem;
  line-height: 1.6rem;
  display: block;
  text-align: left;
}
pre code .hljs-tag{
  color: #2973b7;
}


</style>