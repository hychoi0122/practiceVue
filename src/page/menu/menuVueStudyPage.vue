<template>
  <div>
    <div class="study_con study_card" >
      <div class="study_con_header">
        <h4 class="study_con_header_inline">
          <span>Vue란?</span>
        </h4>
        <b-button pill variant="success" class="study_con_header_inline " @click="shClick($event)">ᐁ</b-button>
      </div>
      <div class="study_con study_none">
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

    <div class="study_con study_card">
      <div class="study_con_header">
        <h4 class="study_con_header_inline">
          <span>양방향 DATA 사용</span>
        </h4>
        <b-button pill variant="success" class="study_con_header_inline " @click="shClick($event)">ᐁ</b-button>
      </div>
      <div class="study_con study_none">
        message : {{ message }}
        <p>이처럼 data영역에 message를 선언한 후 중괄호  <code>{{}}</code>를 이용하여 변수를 사용할 수 있다.</p>
          <pre>
            <code>
              data : ()=> ({
              message : "메세지",

              }),
            </code>
          </pre>
      </div>
    </div>

    <div class="study_con study_card">
      <div class="study_con_header">
        <h4 class="study_con_header_inline">
            <span>조건문과 반복문</span>
        </h4>
        <b-button pill variant="success" class="study_con_header_inline " @click="shClick($event)">ᐁ</b-button>
      </div>
      <div class="study_con study_none">
        seen : true ( data에 선언되어있음 )
        <div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>div&nbsp;id<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#63a35c">"app-3"</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>p&nbsp;v<span style="color:#ff3399"></span><span style="color:#a71d5d">-</span><span style="color:#a71d5d">if</span><span style="color:#a71d5d">=</span><span style="color:#63a35c">"seen"</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span>이제&nbsp;나를&nbsp;볼&nbsp;수&nbsp;있어요<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>p<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">/</span>div<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span></div></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>
        <br>
        <pre>
          <code>

          </code>
        </pre>
      </div>
    </div>

    <div class="study_con study_card" >
      <div class="study_con_header">
        <h4 class="study_con_header_inline">
          <span>이미지 파일 첨부</span>
        </h4>
        <b-button pill variant="success" class="study_con_header_inline " @click="shClick($event)">ᐁ</b-button>
      </div>
      <div class="study_con study_none">
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

    <div class="study_con study_card" >
      <div class="study_con_header">
        <h4 class="study_con_header_inline">
          <span>Jquery없이 몇번째 요소인지 알아내기</span>
        </h4>
        <b-button pill variant="success" class="study_con_header_inline " @click="shClick($event)">ᐁ</b-button>
      </div>
      <div class="study_con study_none">
        <p></p>
        <pre>
          <code>
            getElementIndex(ele){
            // Array.from(ele.parentNode.childNodes).indexOf(ele) ==  [].indexOf.call(ele.parentNode.children, ele)
            // from은 es5이상 문법으로 인터넷 익스플로러에서 사용불가
            return [].indexOf.call(ele.parentNode.children, ele);
            },

          </code>
        </pre>
      </div>
    </div>

    <div class="study_con study_card" >
      <div class="study_con_header">
        <h4 class="study_con_header_inline">
          <span>MAP JAVASCRIPT</span>
        </h4>
        <b-button pill variant="success" class="study_con_header_inline " @click="shClick($event)">ᐁ</b-button>
      </div>
      <div class="study_con study_none">
        <p><b>정의</b></p>
        <p>MAP - key와 value로 저장되어 이루어진 컬렉션 </p>
        <p>key로 객체, 기본 자료형 , NaN등을 쓸수있다. 객체는 오직 string값</p>
        <p>컬렉션 내 요소나 값을 재 정렬하거나 "숫자"를 이용해 특정 요소나 값을 가지고 오는 것은 불가능합니다.</p>
        <p>배열로 값을 받으려면 [...new Set("값")]을 통해 배열로 받을 수 있다.</p>
        <p><b>메소드</b></p>
        <p>new Map([iterable]) - 맵을 new 연산자를 통해 메모리 영역에 할당받음 , [key,value]쌍으로 있는 iterable(ex:배열)을 선택적으로 넘길 수 있는데 이때 넘긴 이터러블 객체는 맵 초기화에 사용됨</p>
        <p>map.set(key, value) – 키를 이용해 값을 저장합니다.</p>
        <p>map.get(key) – 키에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.</p>
        <p>map.has(key) – 키가 있으면 true, 없으면 false를 반환합니다.</p>
        <p>map.delete(key) – 키에 해당하는 값을 삭제합니다.</p>
        <p>map.keys() – 객체 안의 모든 키(Key)들을 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.</p>
        <p>map.values() – 객체 안의 모든 값(Value)들을 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.</p>
        <p>map.clear() – 맵 안의 모든 요소를 제거합니다.</p>
        <p>map.size – 요소의 개수를 반환합니다.</p>
        <br>
        <p><b>객체와 차이점</b></p>
        <p>일반적인 객체와의 차이점:</p>
        <p> 키의 타입에 제약이 없습니다. 객체도 키가 될 수 있습니다.</p>
        <p>size 프로퍼티 등의 유용한 메서드나 프로퍼티가 있습니다.</p>
        <pre>
          <code>
            //Map 생성후 set을 통한 할당 , string name과 객체 name
            let mapT = new Map();
            let name = {};
            mapT.set("name","hoyoung1")
            mapT.set("name","hoyoung2")
            mapT.set("name","hoyoung3")
            mapT.set(name,"hoyoung4")
            mapT.set(true,"불린값");
            mapT.set(1,"숫자1");
            mapT.set("1","문자1");
            console.log(mapT)
          </code>
        </pre>
        <b-button @click="method1Show = !method1Show , method1()">실행결과</b-button><span v-if="method1Show">{{method1Result}}</span>
        <br>
        <pre>
          <code>
            //get메소드를 통해 숫자1, 문자1, true, name객체 꺼내기
            let mapT = new Map();
            let name = {};
            mapT.set("name","hoyoung1")
            mapT.set(name,"hoyoung4")
            mapT.set(true,"불린값");
            mapT.set(1,"숫자1");
            mapT.set("1","문자1");
            mapT.set(new Object,"1")


            console.log(mapT.get(1))
            console.log(mapT.get("1"))
            console.log(mapT.get(false)) // 해당키 존재 x
            console.log(mapT.get(new Object()))  // 해당키 존재 x
          </code>
        </pre>
        <b-button @click="method2Show = !method2Show , method2()">실행결과</b-button><span v-if="method2Show">{{method2Result}}</span>
        <br>
        <pre>
          <code>
            //has 메소드
            let mapT = new Map();
            let name = {};
            mapT.set("name","hoyoung1")
            mapT.set(name,"hoyoung4")
            mapT.set(true,"불린값");
            mapT.set(1,"숫자1");
            mapT.set("1","문자1");
            mapT.set(new Object,"1")


            console.log(mapT.has(1))
            console.log(mapT.has("1"))
            console.log(mapT.has(false)) // 해당키 존재 x
            console.log(mapT.has(new Object()))  // 해당키 존재 x
          </code>
        </pre>
        <b-button @click="method3Show = !method3Show , method3()">실행결과</b-button><span v-if="method3Show">{{method3Result}}</span>
        <br>
        <pre>
          <code>
            //delete,keys,values,size,clear 메소드
            let mapT = new Map();
            let name = {};
            mapT.set("name","hoyoung1")
            mapT.set(name,"hoyoung4")
            mapT.set(true,"불린값");
            mapT.set(1,"숫자1");
            mapT.set("1","문자1");

            mapT.delete(1);
            console.log(mapT);
            console.log("keys : "+mapT.keys());
            console.log("values : "+mapT.values());
            console.log("size : "+mapT.size);
            mapT.clear()
            console.log("clear이후 : "+mapT);
          </code>
        </pre>
        <b-button @click="method4Show = !method4Show , method4()">실행결과</b-button>
        <div v-if="method4Show" style="text-align: left;">
         <p  v-for="(item,key) in method4Result" :key="item">{{key}} : {{item }}</p>
        </div>

        <br>
        <p>추가 사용법 배열 > map / 객체 > map </p>
        <pre>
          <code>
            ---------------------------
            //배열을 map으로
            let map = new Map([
            ['1',  'str1'],
            [1,    'num1'],
            [true, 'bool1']
            ]);

            console.log( map.get('1') ); // => str1

            //객체를 map으로
            let obj = {
            name: "hoyoung",
            age: 25
            };

            let map1 = new Map(Object.entries(obj));

            console.log( map1.get('name') ); // => hoyoung

            -------------------------
            //map에서 객체로
            let obj1 = Object.fromEntries(map1.entries())
            console.log(obj1);
            //{
            //  name: "hoyoung",
            //  age: 25
            //};
          </code>
        </pre>
        <b-button @click="method5()">콘솔에서 보기</b-button>








      </div>
    </div>

    <div class="study_con study_card" >
      <div class="study_con_header">
        <h4 class="study_con_header_inline">
          <span>SET JAVASCRIPT</span>
        </h4>
        <b-button pill variant="success" class="study_con_header_inline " @click="shClick($event)">ᐁ</b-button>
      </div>
      <div class="study_con study_none">
        <p><b>정의</b></p>
        <p>SET - 중복을 허용하지 않는 값을 모아놓은 컬렉션</p>
        <p>컬렉션 내 요소나 값을 재 정렬하거나 "숫자"를 이용해 특정 요소나 값을 가지고 오는 것은 불가능합니다.</p>
        <p>배열로 값을 받으려면 [...new Set("값")]을 통해 배열로 받을 수 있다.</p>
        <p><b>메소드</b></p>
        <p>new Set([iterable]) - SET을 new 연산자를 통해 메모리 영역에 할당받음 ,매개변수를 선택적으로 넘길 수 있는데 이때 넘긴 이터러블 객체는 SET 초기화에 사용됨</p>
        <p>set.add(value) – 값을 추가하고 셋 자신을 반환합니다.</p>
        <p>set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.</p>
        <p>set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.</p>
        <p>set.clear() – 셋 안의 모든 요소를 제거합니다.</p>
        <p>set.size – 요소의 개수를 반환합니다.</p>
        <br>
        <p><b>배열과 차이점</b></p>
        <p>배열은 중복값을 허용 , 셋은 허용하지 않는다 </p>
        <pre>
          <code>
            // Set객체 생성후 add를 통한 확인
            let setT = new Set();
            setT.add(1);
            setT.add(1);
            setT.add(2);
            setT.add(2);
            console.log(setT.add(2));
            console.log(setT.add());
            console.log(setT);

            // 배열을 생성자에 삽입
            let arr = [4,4,4,1,1,1,2,2,2,3,3,3]; // 1~4중복값이 있는 배열
            let setT1 = new Set(arr);
            console.log(setT1);
          </code>
        </pre>
        <b-button @click="method6Show = !method6Show , method6()">실행결과</b-button>
        <div v-if="method6Show" style="text-align: left;">
          <p  v-for="(item,key) in method6Result" :key="item">{{key}} : {{item }}</p>
        </div>
        <br>
        <pre>
          <code>
            // 배열을 생성자에 삽입
            let arr = [4,4,4,1,1,1,2,2,2,3,3,3]; // 1~4중복값이 있는 배열
            let setT1 = new Set(arr);
            // Set(4) { 4, 1, 2, 3 }
            setT1.delete(4);
            console.log(setT1)
            console.log(setT1.delete(4));
            console.log(setT1.delete(3));
          </code>
        </pre>
        <b-button @click="method7Show = !method7Show , method7()">실행결과</b-button>
        <div v-if="method7Show" style="text-align: left;">
          <p  v-for="(item,key) in method7Result" :key="item">{{key}} : {{item }}</p>
        </div>
        <br>
        <pre>
          <code>
          // 배열을 생성자에 삽입
          let arr = [4,4,4,1,1,1,2,2,2,3,3,3]; // 1~4중복값이 있는 배열
          let setT1 = new Set(arr);
          // Set(4) { 4, 1, 2, 3 }
          console.log(setT1.has(4))
          console.log(setT1.has(`4`));
          console.log(setT1.has(6));
          console.log(setT1.size);
          setT1.clear()
          console.log(setT1)
          </code>
        </pre>
        <b-button @click="method8Show = !method8Show , method8()">실행결과</b-button>
        <div v-if="method8Show" style="text-align: left;">
          <p  v-for="(item,key) in method8Result" :key="item">{{key}} : {{ item }}</p>
        </div>
        <br>
        <p><b>왜 쓰는가></b></p>
        <p> 중복값 제거에 있어서는 최강</p>
        <br>
        <pre>
          <code>
          let array = [];

          for(let i = 0; i&lt;=10000; i++){
              array.push(i);
              array.push(i);
          }

          console.time("SET타이머");
          [...new Set(array)];
          console.timeEnd("SET타이머")

          console.time('필터 타이머');
          array.filter((item, index) => array.indexOf(item) === index);
          console.timeEnd('필터 타이머');

          console.time("리듀스 타이머");
          let test = array.reduce((acc, i) => acc.includes(i) ? acc : [...acc, i], []);
          console.timeEnd("리듀스 타이머");

          </code>
        </pre>
        <b-button @click="method9Show = !method9Show , method9()">실행결과</b-button>
        <div v-if="method9Show" style="text-align: left;">
          <p>SET타이머: 0.674ms</p>
          <p>필터 타이머: 199.192ms</p>
          <p>S리듀스 타이머: 211.153ms</p>
        </div>





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
    method1Show : false,
    method2Show : false,
    method3Show : false,
    method4Show : false,
    method6Show : false,
    method7Show : false,
    method8Show : false,
    method9Show : false,
    method1Result : "Map(5) {\n" +
        "  'name' => 'hoyoung3',\n" +
        "  {} => 'hoyoung4',\n" +
        "  true => '불린값',\n" +
        "  1 => '숫자1',\n" +
        "  '1' => '문자1'\n" +
        "}",
    method2Result : "숫자1\n" +
        "문자1\n" +
        "undefined\n" +
        "undefined",
    method3Result : "true\n" +
        "true\n" +
        "false\n" +
        "false",
    method4Result : {
      "delete()":"Map(4) {\n" +
          "  'name' => 'hoyoung1',\n" +
          "  {} => 'hoyoung4',\n" +
          "  true => '불린값',\n" +
          "  '1' => '문자1'\n" +
          "}",
      "keys()":"[Map Iterator] { 'name', {}, true, '1' }",
      "values()":"[Map Iterator] { 'hoyoung1', 'hoyoung4', '불린값', '문자1' }",
      "size":"4",
      "clear()":"Map(0) {}"
    },
    method6Result : {
      "add(2) ": " Set(2) { 1, 2 }" ,
      "add() ":" Set(3) { 1, 2, undefined }" ,
      "setT() ": " Set(3) { 1, 2, undefined }",
      "setT1() ": "  Set(4) { 4, 1, 2, 3 }"
    },
    method7Result : {
      "setT1()":"Set(3) { 1, 2, 3 }",
      "setT1.delete(4)":"false",
      "setT1.delete(3)":"true",
    },
    method8Result : {
      "has(4)":"true",
      "has('4')":"false",
      "has(6)":"false ",
      "setT1.size":"4",
      "setT1(clear() 이후)":"Set(0) {}",

    }

  }),
  methods : {
    handleChange :function (event){
      let file = event.target.files[0]
      if(file && file.type.match(/^image\/(png|jpeg)$/)){
        this.preview = window.URL.createObjectURL(file)
      }
    },
    shClick(event){
      let ele = event.target;

      ele.classList.toggle('btn_toggle');
      ele.classList.toggle('btn_success');

      if(ele.classList.contains("btn_toggle")){
        ele.innerHTML = "ᐃ";
      }else{
        ele.innerHTML = "ᐁ";
      }
      ele.parentNode.parentNode.children[1].classList.toggle('study_none');
      //contains 시 클래스가 포함된 여부를 확인할 수 있음
      //class 키고 끔 ( jqurey의 $(this).togglSwitch )

    },
    changeCode(str){
      console.log(str);

      return "<div>1</div>"
    },
    // 부모요소중 몇번째 요소인지에 대한 값 얻기
    // getElementIndex(ele){
    //   //어레이 라이크 객체 ?
    //   // 아래와 동일
    //   // console.log(Array.from(ele.parentNode.childNodes).indexOf(ele))
    //   return [].indexOf.call(ele.parentNode.children, ele);
    // },
    method1(){
      let mapT = new Map();
      let name = {};
      mapT.set("name","hoyoung1")
      mapT.set("name","hoyoung2")
      mapT.set("name","hoyoung3")
      mapT.set(name,"hoyoung4")
      mapT.set(true,"불린값");
      mapT.set(1,"숫자1");
      mapT.set("1","문자1");
      console.log(mapT)
    },
    method2(){
      let mapT = new Map();
      let name = {};
      mapT.set("name","hoyoung1")
      mapT.set(name,"hoyoung4")
      mapT.set(true,"불린값");
      mapT.set(1,"숫자1");
      mapT.set("1","문자1");
      mapT.set(new Object,"1")


      console.log(mapT.get(1))
      console.log(mapT.get("1"))
      console.log(mapT.get(false)) // 해당키 존재 x
      console.log(mapT.get(new Object()))  // 해당키 존재 x
    },
    method3(){

      let mapT = new Map();
      let name = {};
      mapT.set("name","hoyoung1")
      mapT.set(name,"hoyoung4")
      mapT.set(true,"불린값");
      mapT.set(1,"숫자1");
      mapT.set("1","문자1");
      mapT.set(new Object,"1")


      console.log(mapT.has(1))
      console.log(mapT.has("1"))
      console.log(mapT.has(false)) // 해당키 존재 x
      console.log(mapT.has(new Object()))  // 해당키 존재 x

    },
    method4(){
      let mapT = new Map();
      let name = {};
      mapT.set("name","hoyoung1")
      mapT.set(name,"hoyoung4")
      mapT.set(true,"불린값");
      mapT.set(1,"숫자1");
      mapT.set("1","문자1");

      mapT.delete(1);
      console.log(mapT);
      console.log("keys : "+mapT.keys());
      console.log("values : "+mapT.values());
      console.log("size : "+mapT.size);
      mapT.clear()
      console.log("clear이후 : "+mapT);
    },
    method5(){

      //배열을 map으로
      let map = new Map([
        ['1',  'str1'],
        [1,    'num1'],
        [true, 'bool1']
      ]);

      console.log( map.get('1') ); // => str1

      //객체를 map으로
      let obj = {
        name: "hoyoung",
        age: 25
      };

      let map1 = new Map(Object.entries(obj));

      console.log( map1.get('name') ); // => hoyoung


      //map에서 객체로
      let obj1 = Object.fromEntries(map1.entries())
      console.log(obj1);
      //{
      //  name: "hoyoung",
      //  age: 25
      //};
    },
    method6(){
      // Set객체 생성후 add를 통한 확인
      let setT = new Set();
      setT.add(1);
      setT.add(1);
      setT.add(2);
      setT.add(2);
      console.log(setT.add(2));
      console.log(setT.add());
      console.log(setT);

      // 배열을 생성자에 삽입
      let arr = [4,4,4,1,1,1,2,2,2,3,3,3]; // 1~4중복값이 있는 배열
      let setT1 = new Set(arr);
      console.log(setT1);
    },
    method7(){
      // 배열을 생성자에 삽입
      let arr = [4,4,4,1,1,1,2,2,2,3,3,3]; // 1~4중복값이 있는 배열
      let setT1 = new Set(arr);
      // Set(4) { 4, 1, 2, 3 }
      setT1.delete(4);
      console.log(setT1)
      console.log(setT1.delete(4));
      console.log(setT1.delete(3));
    },
    method8(){
      // 배열을 생성자에 삽입
      let arr = [4,4,4,1,1,1,2,2,2,3,3,3]; // 1~4중복값이 있는 배열
      let setT1 = new Set(arr);
      // Set(4) { 4, 1, 2, 3 }
      console.log(setT1.has(4))
      // console.log(setT1.has('4'));
      console.log(setT1.has(6));
      console.log(setT1.size);
      setT1.clear()
      console.log(setT1)
    },
    method9(){
      let array = [];

      for(let i = 0; i<=10000; i++){
        array.push(i);
        array.push(i);
      }

      console.time("SET타이머");
      let test1 = [...new Set(array)];
      console.timeEnd("SET타이머")

      console.time('필터 타이머');
      let test2 = array.filter((item, index) => array.indexOf(item) === index);
      console.timeEnd('필터 타이머');

      console.time("리듀스 타이머");
      let test3 = array.reduce((acc, i) => acc.includes(i) ? acc : [...acc, i], []);
      console.timeEnd("리듀스 타이머");
      console.log(test1+test2+test3)
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
  padding: 0em 1.4em;
  font-size: 0.85rem;
  line-height: 1.6rem;
  display: block;
  text-align: left;
  background-color: #f8f8f8;
}
.study_none{
  opacity: 0;
  height: 0;
}
.study_con_header{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
}
.study_con_header_inline{
  display: inline-flex;
}
.btn_toggle{
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn_toggle:focus{
  background-color: #dc3545;
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 50%);
}
/*pre code .hljs-tag{*/
/*  color: #2973b7;*/
/*}*/


</style>