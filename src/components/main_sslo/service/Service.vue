<template>
  <main id="main">
    <!-- 인트로 -->
    <section class="intro">
      <img
        src="../../../assets/images/sslo/main-sslo-logo.svg"
        alt="sslo-logo"
      />
      <h2>서비스 소개</h2>
      <p>다양한 기업들이 통합 플랫폼을 사용하여 성장 중에 있습니다.</p>
    </section>
    <!-- 메뉴바 -->
    <div class="lnb">
      <ul>
        <li><a href="service.html">데이터 구축 서비스 </a></li>
        <li><a href="service.html#service2">데이터 구축 프로세스</a></li>
        <li><a href="service.html#service3">학습 데이터 셋</a></li>
        <li><a href="service.html#service4">대시보드</a></li>
      </ul>
      <div class="container">
        <div class="now"><div class="now-bar"></div></div>
      </div>
    </div>
    <!-- 데이터 구축 서비스 -->
    <section class="service1 sub-section container">
      <ul class="line line1">
        <li>
          <div class="top top1">샘플 서비스</div>
          <div class="bottom">
            자동화 솔루션의 샘플 데이터로 <br />필요 데이터 정의
          </div>
        </li>
        <li>
          <div class="top top2">최고 품질</div>
          <div class="bottom">
            교차검수, 이중검수 , 단계별 검수 진행,<br />모델학습 테스트를 통한
            품질 증가
          </div>
        </li>
        <li>
          <div class="top top3">정책 수립</div>
          <div class="bottom">
            데이터 보안, 개인정보, 개인정보 활용 등 관련 정책 수립,<br />긴급상황
            발생 시 대응 체계 수립
          </div>
        </li>
      </ul>
      <ul class="line line2">
        <li>
          <div class="top top4">자동화 솔루션</div>
          <div class="bottom">
            데이터 구축 시간,<br />
            인력 리소스 문제 해결
          </div>
        </li>
        <li>
          <div class="top top5">컨설팅</div>
          <div class="bottom">
            데이터 활용 방법,<br />구축 방식에 대한 컨설팅 지원
          </div>
        </li>
        <li>
          <div class="top top6">전문인력</div>
          <div class="bottom">초기 데이터 구축,<br />판단 데이터 가공</div>
        </li>
        <li>
          <div class="top top7">고객 맞춤</div>
          <div class="bottom">
            AI 비즈니스 고객을 위한<br />
            맞춤형 데이터 솔루션 제공
          </div>
        </li>
      </ul>
    </section>
    <!-- 데이터 구축 프로세스 -->
    <section class="service2 sub-section container" id="service2">
      <div class="img-box">
        <div class="bar1"></div>
      </div>
      <ul class="text-box1">
        <li>
          <h4>프로젝트 협의</h4>
          <p>
            작업기간 협의<br />산출물 협의<br />데이터 정의 및 설계<br />파일
            규칙 협의
          </p>
        </li>
        <li>
          <h4>프로젝트 준비</h4>
          <p>
            작업 수행 계획 수립<br />작업 환경 구축<br />작업 도구 선정 및
            커스텀<br />작업 지침 및 가이드 작성<br />작업자 확보 및 선정
          </p>
        </li>
        <li>
          <h4>데이터 수집</h4>
          <p>
            직접 수집<br />고객사 API 연동<br />오픈 데이터 활용<br />웹,SNS
            크롤링 및 스크래핑
          </p>
        </li>
      </ul>
      <div class="arrow-box">
        <img src="../../../assets/images/sslo/arrow.png" alt="" class="arrow" />
      </div>
      <div class="img-box">
        <div class="bar2"></div>
      </div>
      <ul class="text-box2">
        <li>
          <h4>데이터 전처리</h4>
          <p>
            데이터 분류(카테고리 / 주제 / 형식 등)<br />데이터 변환(리사이징 /
            파일형식 / 백그라운드제거 등)<br />데이터 축소(인코딩 / 숫자축소 /
            주성분 분석 등)<br />데이터 통합(결합 / 병합)<br />데이터
            정제(무효데이터 제거 / 중복제거 / 개인정보처리 등)
          </p>
        </li>
        <li>
          <h4>데이터 가공</h4>
          <p>
            영상 라벨링 <br />이미지 라벨링<br />텍스트 태깅 / 추출 / OCR 등
          </p>
        </li>
        <li>
          <h4>검수</h4>
          <p>
            전문가를 통한 검수<br />인력을 통한 교차 검수<br />도구를 통한 이중
            검수<br />단계별 데이터 검수<br />부적합 데이터 재가공
          </p>
        </li>
        <li>
          <h4>테스트</h4>
          <p>
            테스트 모델 선정<br />테스트 모델 검증<br />모델 학습 테스트<br />테스트
            모델 평가
          </p>
        </li>
        <li>
          <h4>완료</h4>
          <p>최종 결과 확인<br />산출물 납품</p>
        </li>
      </ul>
    </section>
    <!-- 학습 데이터 셋 -->
    <section class="service3 sub-section container" id="service3">
      <img src="../../../assets/images/sslo/dataset.png" alt="" />
      <ul class="text-box">
        <li>
          <h4>
            포털 사이트, SNS,<br />
            쇼핑몰, API
          </h4>
          <p>
            다양한 사이트로부터<br />요구사항에 맞는<br />실시간 및 누적 데이터
            수집
          </p>
        </li>
        <li>
          <h4>
            데이터 모델링,<br />
            인터페이스 시각화
          </h4>
          <p>
            유형별 데이터 모델링 <br />
            자동화 및 분산 스토리지를 활용한<br />
            효율적인 데이터 관리
          </p>
        </li>
        <li>
          <h4>
            단어 추출, 필터링, 품사 태깅,<br />
            리사이징, 단어 원형 복원
          </h4>
          <p>
            분석 및 가공 결과의 <br />
            품질 증가를 위한 데이터 전처리
          </p>
        </li>
        <li>
          <h4>영상/이미지/텍스트 <br />라벨링</h4>
          <p>
            자동화를 통해 <br />
            구축기간 / 투입 인력 절감
          </p>
        </li>
        <li>
          <h4>
            빈도 분석, 토픽 분석,<br />
            클러스터링, 워드 임베딩
          </h4>
          <p>최신 언어 모델을 활용한<br />텍스트 분석</p>
        </li>
      </ul>
    </section>
    <!-- 대시보드 -->
    <section class="service4 sub-section container" id="service4">
      <div class="img-box">
        <img src="../../../assets/images/sslo/dashboard.png" alt="" />
      </div>
      <div class="text-box">
        <h4>대시보드를 통한 시각화 서비스</h4>
        <p>
          작업현황 실시간 모니터링, 정확도 분석으로 효율적인 관리가 가능합니다.
        </p>
        <ul class="info">
          <li>
            <span class="ball1"></span>
            <p>작업현황 데이터 시각화</p>
          </li>
          <li>
            <span class="ball2"></span>
            <p>작업현황 실시간 모니터링</p>
          </li>
          <li>
            <span class="ball3"></span>
            <p>학습 데이터 정확도 분석</p>
          </li>
        </ul>
      </div>
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
@import url(../../../css/sslo/service/service.css);
</style>
