<template>
  <main id="main">
    <!-- 인트로-->
    <section class="intro">
      <img
        src="../../../assets/images/sslo/main-sslo-logo.svg"
        alt="sslo-logo"
      />
      <h2>솔루션 소개</h2>
      <p>다양한 기업들이 통합 플랫폼을 사용하여 성장 중에 있습니다.</p>
    </section>
    <!-- 메뉴바 -->
    <div class="lnb">
      <ul>
        <li><a href="solution.html">Labeling Studio</a></li>
        <li><a href="solution.html#solution2">수집정제 Studio</a></li>
        <li><a href="solution.html#solution3"> 자동화 기능</a></li>
        <li><a href="solution.html#solution4">산업 활용분야</a></li>
      </ul>
      <div class="container">
        <div class="now"><div class="now-bar"></div></div>
      </div>
    </div>
    <!-- 라벨링 도구 -->
    <section class="solution1 sub-section container">
      <h3 class="title">Basic Labeling Tools</h3>
      <ul class="tool">
        <li>
          <div class="img-box">
            <img src="../../../assets/images/sslo/solution/boxing.png" alt="" />
          </div>
          <div class="text-box">
            <h4>Boxing</h4>
            <p>
              객체탐지, 객체인식을 위해<br />상자의 두 모서리를 표시하여<br />이미지에
              배치 할 수 있는<br />가장 간단한 주석 형식
            </p>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img
              src="../../../assets/images/sslo/solution/polygon.png"
              alt=""
            />
          </div>
          <div class="text-box">
            <h4>Polygon</h4>
            <p>
              다각형 모양으로 객체의<br />
              가시 영역 외곽선을 따라<br />
              점을 찍어 그리는 라벨링 방법
            </p>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img
              src="../../../assets/images/sslo/solution/polyline.png"
              alt=""
            />
          </div>
          <div class="text-box">
            <h4>Polyline</h4>
            <p>
              여러 개의 점을 가진 선을 활용하여 <br />
              특정 영역을 라벨링 함으로써<br />
              인도, 차선 등을 구분하기 위해 사용
            </p>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img
              src="../../../assets/images/sslo/solution/keypoint.png"
              alt=""
            />
          </div>
          <div class="text-box">
            <h4>Keypoint</h4>
            <b>(default ; 손, 사람, 동물 등)</b>
            <p>
              특정 지점을 라벨링 하는 작업으로<br />
              안면 인식을 통한 감정 분석과 같이<br />
              정밀하고 섬세한 작업을 요구하는 기술
            </p>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img src="../../../assets/images/sslo/solution/point.png" alt="" />
          </div>
          <div class="text-box">
            <h4>Point</h4>
            <p>
              클래스에 해당되는 지점을 <br />마우스로 클릭하여 점 형태로 지정
            </p>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img src="../../../assets/images/sslo/solution/3dcube.png" alt="" />
          </div>
          <div class="text-box">
            <h4>3D Cube</h4>
            <p>
              2D로 작업할 수 없는 3D 객체들을<br />
              정육면체로 생성하는 라벨링 방식으로<br />
              자동차, 건물 등 입체적인 객체들을<br />
              2D 형식으로 라벨링 작업하는 것에<br />
              한계가 있는 부분을 해결하기 위한 기술
            </p>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img src="../../../assets/images/sslo/solution/brush.png" alt="" />
          </div>
          <div class="text-box">
            <h4>Brush</h4>
            <p>
              segmentation 영역을 지정하기 위한<br />
              도구 선택 시 마우스 커서가 <br />원 형태로 전환되며 객체상에
              드래그하여<br />segmentation을 수행
            </p>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img
              src="../../../assets/images/sslo/solution/magicwand.png"
              alt=""
            />
          </div>
          <div class="text-box">
            <h4>Magig Wand</h4>
            <p>
              객체 픽셀 상에 point 도구로 클릭 시 <br />유사 픽셀 간 polygon을
              생성
            </p>
          </div>
        </li>
      </ul>
      <a href="" class="experience">
        <img src="../../../assets/images/sslo/sslo-logo.svg" alt="sslo-logo" />
        <p>도구 체험하러 가기</p>
      </a>
    </section>
    <!-- 수집정제 studio -->
    <div class="solution2 sub-section container" id="solution2">
      <h2>
        데이터 수집기술은 솔루션에서 제공하는인간 데이터셋과 <br />
        웹 크롤러 또는 커스텀 방식으로 수집할 수 있는 예약형 수집 방식이
        있습니다.
      </h2>
      <ul class="collect-studio">
        <li>
          <div class="img-wrap">
            <img
              src="../../../assets/images/sslo/solution/collect01.png"
              alt=""
            />
          </div>
          <div class="text-wrap">
            <h4>인간 데이터 셋</h4>
            <span class="bar1"></span>
            <p>자체 수집 데이터</p>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img
              src="../../../assets/images/sslo/solution/collect02.png"
              alt=""
            />
          </div>
          <div class="text-wrap">
            <h4>웹 크롤러</h4>
            <span class="bar2"></span>
            <p>네이버, 다음, 구글, 인스타</p>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img
              src="../../../assets/images/sslo/solution/collect03.png"
              alt=""
            />
          </div>
          <div class="text-wrap">
            <h4>커스텀</h4>
            <span class="bar3"></span>
            <p>고객 맞춤형 데이터 수집</p>
          </div>
        </li>
      </ul>
      <h2>
        데이터 정제는 10가지 이미지 관련 전처리 기술과 <br />
        2가지 정제 기술을 제공합니다.
      </h2>
      <h3 class="title">이미지 정제 기술</h3>
      <ul class="img-purification">
        <li>
          <div class="img-wrap">
            <img
              src="../../../assets/images/sslo/solution/purification01.png"
              alt=""
            />
          </div>
          <div class="text-wrap purification01">
            <p>영상 프레임 단위 이미지 추출</p>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img
              src="../../../assets/images/sslo/solution/purification02.png"
              alt=""
            />
          </div>
          <div class="text-wrap purification02">
            <p>중복 데이터 제거</p>
          </div>
        </li>
      </ul>
      <h3 class="title">이미지 전처리 기술</h3>
      <ul class="img-preprocessing">
        <li>
          <div class="img-wrap">
            <img
              src="../../../assets/images/sslo/solution/grayscale.png"
              alt=""
            />
          </div>
          <div class="text-wrap preprocessing01">
            <p>그레이스케일 (Grayscale)</p>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img
              src="../../../assets/images/sslo/solution/binarization.png"
              alt=""
            />
          </div>
          <div class="text-wrap preprocessing02">
            <p>이진화</p>
          </div>
        </li>
      </ul>
      <ul class="img-preprocessing">
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/sslo/solution/zoom.png" alt="" />
          </div>
          <div class="text-wrap preprocessing03">
            <p>확대/축소</p>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/sslo/solution/rotate.png" alt="" />
          </div>
          <div class="text-wrap preprocessing04">
            <p>회전</p>
          </div>
        </li>
      </ul>
      <ul class="img-preprocessing">
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/sslo/solution/rotate.png" alt="" />
          </div>
          <div class="text-wrap preprocessing05">
            <p>변환</p>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img
              src="../../../assets/images/sslo/solution/brightness.png"
              alt=""
            />
          </div>
          <div class="text-wrap preprocessing06">
            <p>밝기/대비</p>
          </div>
        </li>
      </ul>
      <ul class="img-preprocessing">
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/sslo/solution/crop.png" alt="" />
          </div>
          <div class="text-wrap preprocessing07">
            <p>자르기</p>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/sslo/solution/noise.png" alt="" />
          </div>
          <div class="text-wrap preprocessing08">
            <p>노이즈 제거</p>
          </div>
        </li>
      </ul>
      <ul class="img-preprocessing">
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/sslo/solution/mosaic.png" alt="" />
          </div>
          <div class="text-wrap preprocessing09">
            <p>비식별화(모자이크)</p>
          </div>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/sslo/solution/reject.png" alt="" />
          </div>
          <div class="text-wrap preprocessing10">
            <p>배경제거</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 자동화 기능 -->
    <section class="solution3 sub-section container" id="solution3">
      <div class="auto1">
        <div class="img-wrap">
          <img src="../../../assets/images/sslo/solution/auto01.png" alt="" />
        </div>
        <ul class="text-wrap">
          <li>
            <h4>데이터 수집 자동화</h4>
            <span class="bar1"></span>
            <p>
              데이터 수집은 대용량 웹 크롤링 또는 커스텀 데이터 수집을 사용자는
              작업으로 구성하고 예약 기능을 통해 자동으로 수집한다. <br />
              사용자는 수집 추이와 결과만 확인하고 최종 산출물을 받을 수 있다.
            </p>
          </li>
          <li>
            <h4>데이터 정제 자동화</h4>
            <span class="bar2"></span>
            <p>
              대용량 이미지 데이터에 대한 정제를 수행하기 위하여 사용자는 필요한
              정제 기능을 순서대로 선택하여 정제 대상에 적용하는 <br />
              작업으로 구성하고 예약 기능을 통해 자동으로 정제한다. 사용자는
              정제 추이와 결과만 확인하고 최종 산출물을 받을 수 있다.
            </p>
          </li>
        </ul>
      </div>
      <div class="auto2">
        <div class="img-wrap">
          <img src="../../../assets/images/sslo/solution/auto02.png" alt="" />
        </div>
        <div class="text-wrap">
          <div class="top">
            <h4>데이터 정제 자동화</h4>
            <span class="bar3"></span>
          </div>
          <p>
            이미지 라벨링 기능 중에 일부분을 자동화할 수 있다. 정해진 인간
            객체를 인식하거나 식별을 자동화할 수 있다. 커스텀으로 자동화 모델을
            생성할 수도 있다. <br />
            능동 학습(Active Learning) 기법을 활용하여 사용자가 직접 커스텀
            모델을 만들어 이미지에서 원하는 객체를 자동으로 라벨링 할 수 있다.
          </p>
        </div>
      </div>
    </section>
    <!-- 산업 활용분야 -->
    <section class="solution4 sub-section container" id="solution4">
      <ul class="industry1">
        <li>
          <img
            src="../../../assets/images/sslo/solution/section401.png"
            alt=""
          />
          <h4>AI</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section402.png"
            alt=""
          />
          <h4>Healthcare</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section403.png"
            alt=""
          />
          <h4>E-Commerce</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section404.png"
            alt=""
          />
          <h4>BigData</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section405.png"
            alt=""
          />
          <h4>Medical</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section406.png"
            alt=""
          />
          <h4>Media</h4>
        </li>
      </ul>
      <ul class="industry2">
        <li>
          <img
            src="../../../assets/images/sslo/solution/section407.png"
            alt=""
          />
          <h4>Finance</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section408.png"
            alt=""
          />
          <h4>Game</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section409.png"
            alt=""
          />
          <h4>Traffic</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section410.png"
            alt=""
          />
          <h4>Education</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section411.png"
            alt=""
          />
          <h4>Farm</h4>
        </li>
        <li>
          <img
            src="../../../assets/images/sslo/solution/section412.png"
            alt=""
          />
          <h4>Work</h4>
        </li>
      </ul>
    </section>
    <section class="question">
      <p>궁금하신 사항은 문의하시면 상세히 답변드리겠습니다.</p>
      <a href="../html/sub6.html">문의하기</a>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../../../css/reset.css);
@import url(../../../css/sslo/solution/solution.css);
</style>
