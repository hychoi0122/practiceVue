<template>
  <div>
    <div class="study_con study_card" @click="studyShow[0] = !studyShow[0]">
      <h4>Vue란?</h4>
      <div class="study_con" v-if="studyShow[0]">
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
    </div>

    <div class="study_con study_card" @click="studyShow[1] = !studyShow[1]">
      <h4><p>양방향 data 사용</p></h4>
      <div class="study_con" v-if="studyShow[1]">
        message : {{ message }}
        <p>이처럼 data영역에 message를 선언한 후 중괄호  <code>{{}}</code>를 이용하여 변수를 사용할 수 있다.</p>
      </div>
    </div>

    <div class="study_con study_card" @click="studyShow[3] = !studyShow[3]">
      <h4><p>조건문과 반복문</p></h4>
      <div class="study_con" v-if="studyShow[3]">
        seen : true ( data에 선언되어있음 )
        <div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div&nbsp;id<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#63a35c">"app-3"</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>p&nbsp;v<span style="color:#ff3399"></span><span style="color:#a71d5d">-</span><span style="color:#a71d5d">if</span><span style="color:#a71d5d">=</span><span style="color:#63a35c">"seen"</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>이제&nbsp;나를&nbsp;볼&nbsp;수&nbsp;있어요<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>p<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>
      </div>
    </div>


    <div class="study_con study_card" @click="studyShow[4] = !studyShow[4]">
      <h4><p>이미지 파일 첨부</p></h4>
      <div class="study_con" v-if="studyShow[4]">
        <input class="btn btn-secondary" type="file" @change="handleChange">
        <div style="height: 200px;" v-if="!preview"></div>
        <div style="height: 200px; display: inline-block" v-if="preview"><img v-bind:src="preview" height="150px" width="150px"></div>
        <pre>
          <code>
            data : ()=> ({
              message : "메세지",
              preview : '',
            }),
            methods : {
              handleChange :function (event){
                let file = event.target.files[0]
                if(file && file.type.match(/^image\/(png|jpeg)$/)){
                  this.preview = window.URL.createObjectURL(file)
                }
              }
            }
          </code>
        </pre>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "menuVueStudyPage",
  data : ()=> ({
    message : "메세지",
    preview : '',

    studyShow : {
      0 : false,
      1 : false,
      2 : false,
      3 : false,
      4 : false,
      5 : false,
    }

  }),
  methods : {
    handleChange :function (event){
      let file = event.target.files[0]
      if(file && file.type.match(/^image\/(png|jpeg)$/)){
        this.preview = window.URL.createObjectURL(file)
      }
    },
    change(){
      this.studyShow1[0] = !this.studyShow1[0]
      console.log(this.studyShow[0])
    }
  }
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
/*pre code .hljs-tag{*/
/*  color: #2973b7;*/
/*}*/

</style>