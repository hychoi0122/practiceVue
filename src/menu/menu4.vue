<template>
  <div style="display: flex; flex-direction: column;">

    <div style="display: flex">


      <div style="display: inline-flex;">
        <video id="video" width="500" height="480" autoplay></video>
        <canvas id="canvas" width="500" height="400"></canvas>

      </div>
      <div>
        <button type="button" id="webcamBtn">캡쳐하기</button>
        <button @click="test1">클릭</button>
      </div>




    </div>
    <div style="width: 1000px">

      <p>
        MediaDevices 인터페이스는 카메라, 마이크, 공유 화면 등 현재 연결된 미디어 입력 장치로의 접근 방법을 제공하는 인터페이스입니다. 다르게 말하자면, 미디어 데이터를 제공하는 모든 하드웨어로 접근할 수 있는 방법입니다. - MDN

        문제 해결법 참고

        원인
        최신 크롬에선 안전하지 않을경우, 즉 https가 아닐경우
        mediaDevices 객체를 제공하지 않는다고 한다.

        해결법
        chrome://flags/#unsafely-treat-insecure-origin-as-secure

        위 링크에 들어가, 보안 정책을 무시할려는 주소를 적고 재시작한다

        포트가 있을경우, 포트까지 적어준다

        http://localhost:3000 등...
      </p>
    </div>

  </div>
</template>
<script>
export default {
  name: "menuFrame",
  data : () => ({
    test : '',
    beforePixelScore  : "",
    canvas : "",

  }),
  methods : {
    test1(){
      const canvas = this.canvas;
      const ctx = canvas.getContext('2d');
      // const arr = new Uint8ClampedArray(40000);
      const imageData = ctx.createImageData(200, 200);
      const getImageData = ctx.getImageData(100,100,100,100);
      // const imageData = ctx.createImageData(640, 480);


      for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i + 0] = getImageData.data[i+1]-20;    // R value
        imageData.data[i + 1] = getImageData.data[i+1]-20;  // G value
        imageData.data[i + 2] = getImageData.data[i+1]-20;    // B value
        imageData.data[i + 3] = 255;  // A value
      }

      ctx.putImageData(imageData, 0, 0);

    }
  },
  mounted() {
    let constraints = {
      audio: false,
      video: { width: 500, height: 500 }
    };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(success)
        .catch(error);

    function success(stream) {
      let video = document.getElementById('video');
      video.srcObject = stream;
    }

    function error(error) {
      console.log(error);
    }

    let video = document.getElementById('video');

    this.canvas = document.getElementById('canvas');

    this.canvas.width = 500;
    this.canvas.height = 400;
    let context = this.canvas.getContext('2d');

    setInterval(capture, 200);

    function capture() {
      context.drawImage( video, 0, 0, 640, 400);

    }


  },

}
</script>

<style scoped>

</style>