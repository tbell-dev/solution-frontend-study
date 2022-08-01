<template>
  <main id="main">
    <section>
      <article class="align1 button-filter">
        <a href="#" class="btn-set btn2-1">가공</a>
        <a href="#" class="btn-set btn1-1">검수</a>
        <a href="#" class="btn-set btn1-1">최종</a>
      </article>
    </section>
    <section>
      <article class="align5">
        <div class="statistics-left">
          <div class="statistics-title align1">
            <h2>작업상태</h2>
          </div>
          <div class="statistics-wrap">
            <div class="statistics">
              <h3>프로젝트 진행현황</h3>
              <!-- 도넛그래프 -->
            </div>
            <table class="table7">
              <tr class="table7-head">
                <th><span>작업단계</span></th>
                <th><span>파일 개수</span></th>
                <th><span>비율</span></th>
              </tr>
              <tr>
                <th><span>미작업</span></th>
                <td><span>700</span></td>
                <td><span>70%</span></td>
              </tr>
              <tr>
                <th><span>작업완료</span></th>
                <td><span>200</span></td>
                <td><span>20%</span></td>
              </tr>
              <tr>
                <th><span>반려</span></th>
                <td><span>100</span></td>
                <td><span>10%</span></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="statistics-right">
          <div class="statistics-title align4">
            <h2>일별 작업량</h2>
            <div class="right align1">
              <select name="" id="">
                <option value=""><span>1일</span></option>
                <option value=""><span>3일</span></option>
                <option value=""><span>7일</span></option>
                <option value=""><span>14일</span></option>
                <option value=""><span>30일</span></option>
              </select>
            </div>
          </div>
          <div class="statistics-wrap">
            <div class="statistics">
              <h3>작업량</h3>
              <!-- 꺾은선그래프 -->
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
