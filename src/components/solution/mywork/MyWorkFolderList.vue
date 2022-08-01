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
              <option value="">폴더명 검색</option>
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
        </ul>
      </article>
      <article class="basic-article">
        <table class="table1">
          <tr class="table1-head">
            <th><span>폴더 경로</span></th>
            <th><span>나의 진행률</span></th>
            <th><span>작업필요</span></th>
            <th><span>작업완료</span></th>
            <th><span>반려</span></th>
          </tr>
          <tr>
            <td class="align1 folder-name">
              <img
                src="../../../assets/images/project/icon/icon-folder.svg"
                alt=""
              /><a href="my-work-file.html">무료이미지</a>
            </td>
            <td>
              <div class="progress-wrap">
                <progress min="0" max="100" value="10"></progress>
                <p>10% <span>(10/100)</span></p>
              </div>
            </td>
            <td><span>0</span></td>
            <td><span>1,000</span></td>
            <td><span>1</span></td>
          </tr>
          <tr>
            <td class="align1 folder-name">
              <img
                src="../../../assets/images/project/icon/icon-folder.svg"
                alt=""
              /><a href="my-work-file.html">무료이미지</a>
            </td>
            <td>
              <div class="progress-wrap">
                <progress min="0" max="100" value="10"></progress>
                <p>10% <span>(10/100)</span></p>
              </div>
            </td>
            <td><span>0</span></td>
            <td><span>1,000</span></td>
            <td><span>1</span></td>
          </tr>
          <tr>
            <td class="align1 folder-name">
              <img
                src="../../../assets/images/project/icon/icon-folder.svg"
                alt=""
              /><a href="my-work-file.html">무료이미지</a>
            </td>
            <td>
              <div class="progress-wrap">
                <progress min="0" max="100" value="10"></progress>
                <p>10% <span>(10/100)</span></p>
              </div>
            </td>
            <td><span>0</span></td>
            <td><span>1,000</span></td>
            <td><span>1</span></td>
          </tr>
          <tr>
            <td class="align1 folder-name">
              <img
                src="../../../assets/images/project/icon/icon-folder.svg"
                alt=""
              /><a href="my-work-file.html">무료이미지</a>
            </td>
            <td>
              <div class="progress-wrap">
                <progress min="0" max="100" value="10"></progress>
                <p>10% <span>(10/100)</span></p>
              </div>
            </td>
            <td><span>0</span></td>
            <td><span>1,000</span></td>
            <td><span>1</span></td>
          </tr>
          <tr>
            <td class="align1 folder-name">
              <img
                src="../../../assets/images/project/icon/icon-folder.svg"
                alt=""
              /><a href="my-work-file.html">무료이미지</a>
            </td>
            <td>
              <div class="progress-wrap">
                <progress min="0" max="100" value="10"></progress>
                <p>10% <span>(10/100)</span></p>
              </div>
            </td>
            <td><span>0</span></td>
            <td><span>1,000</span></td>
            <td><span>1</span></td>
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
