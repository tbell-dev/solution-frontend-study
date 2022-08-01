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
      <article>
        <ul class="search-filter">
          <li class="search-title">
            <h2>검색어</h2>
          </li>
          <li class="search-contents">
            <select name="" id="">
              <option value="">파일명 검색</option>
            </select>
            <input type="search" placeholder="폴더명으로 검색해주세요." />
            <button class="btn2-1">검색</button>
          </li>
        </ul>
      </article>
    </section>
    <section>
      <article>
        <ul class="current-bar">
          <li>
            <h2>전체 폴더</h2>
            <b>5</b>
            <h2>건</h2>
          </li>
          <li class="bar"></li>
          <li>
            <a href="../../studio/labeling-studio.html" class="btn-set btn3-1">
              STUDIO</a
            >
          </li>
        </ul>
      </article>
      <article class="basic-article">
        <table class="table1">
          <tr class="table1-head">
            <th><span>파일명</span></th>
            <th><span>작업상태</span></th>
            <th><span>Object개수</span></th>
            <th>
              <span>등록된 질문 개수</span
              ><span class="small">(미해결/전체)</span>
            </th>
            <th><span>최종수정시간</span></th>
            <th><span>현재작업단계</span></th>
          </tr>
          <tr>
            <td>
              <ul class="left align1">
                <li class="img-wrap">
                  <img
                    src="../../../assets/images/studio/file-list1.png"
                    alt=""
                  />
                </li>
                <li>
                  <span class="table1-bold"> 이미지명_0001.png</span>
                </li>
              </ul>
            </td>
            <td><span>완료</span></td>
            <td><span>105</span></td>
            <td><span>1/2</span></td>
            <td><span>2021.12.14 11:30:40</span></td>
            <td><span>최종</span></td>
          </tr>
          <tr>
            <td>
              <ul class="left align1">
                <li class="img-wrap">
                  <img
                    src="../../../assets/images/studio/file-list1.png"
                    alt=""
                  />
                </li>
                <li>
                  <span class="table1-bold"> 이미지명_0001.png</span>
                </li>
              </ul>
            </td>
            <td><span>완료</span></td>
            <td><span>105</span></td>
            <td><span>1/2</span></td>
            <td><span>2021.12.14 11:30:40</span></td>
            <td><span>최종</span></td>
          </tr>
          <tr>
            <td>
              <ul class="left align1">
                <li class="img-wrap">
                  <img
                    src="../../../assets/images/studio/file-list1.png"
                    alt=""
                  />
                </li>
                <li>
                  <span class="table1-bold"> 이미지명_0001.png</span>
                </li>
              </ul>
            </td>
            <td><span>완료</span></td>
            <td><span>105</span></td>
            <td><span>1/2</span></td>
            <td><span>2021.12.14 11:30:40</span></td>
            <td><span>최종</span></td>
          </tr>
          <tr>
            <td>
              <ul class="left align1">
                <li class="img-wrap">
                  <img
                    src="../../../assets/images/studio/file-list1.png"
                    alt=""
                  />
                </li>
                <li>
                  <span class="table1-bold"> 이미지명_0001.png</span>
                </li>
              </ul>
            </td>
            <td><span>완료</span></td>
            <td><span>105</span></td>
            <td><span>1/2</span></td>
            <td><span>2021.12.14 11:30:40</span></td>
            <td><span>최종</span></td>
          </tr>
          <tr>
            <td>
              <ul class="left align1">
                <li class="img-wrap">
                  <img
                    src="../../../assets/images/studio/file-list1.png"
                    alt=""
                  />
                </li>
                <li>
                  <span class="table1-bold"> 이미지명_0001.png</span>
                </li>
              </ul>
            </td>
            <td><span>완료</span></td>
            <td><span>105</span></td>
            <td><span>1/2</span></td>
            <td><span>2021.12.14 11:30:40</span></td>
            <td><span>최종</span></td>
          </tr>
        </table>
      </article>
      <article class="pagination">
        <button class="page-prev">
          <img
            src="../../../assets/images/project/icon/icon-page-prev.svg"
            alt=""
          />
        </button>
        <ul class="pagination-page">
          <li class="now-page">
            <button><span> 1</span></button>
          </li>
        </ul>
        <button class="page-next">
          <img
            src="../../../assets/images/project/icon/icon-page-next.svg"
            alt=""
          />
        </button>
      </article>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
