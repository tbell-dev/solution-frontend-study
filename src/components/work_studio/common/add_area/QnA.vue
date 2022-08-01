<template>
  <div class="studio-right-qna-wrap">
    <div class="studio-right studio-right-qna studio-right-qna1">
      <ul>
        <li class="studio-title">
          <h2>질문목록</h2>
          <div class="icon-wrap">
            <button>
              질문 작성
              <img
                src="../../../../assets/images/studio/icon/icon-edit.svg"
                alt=""
              />
            </button>
            <img
              src="../../../../assets/images/studio/icon/icon-close.svg"
              alt=""
            />
          </div>
        </li>
        <li class="studio-subtitle">
          <div>
            <b>미해결 질문 <span>(1)</span></b>
          </div>
          <div>
            <b>해결된 질문 <span>(0)</span></b>
          </div>
        </li>
        <li class="studio-contents">
          <div class="top-wrap">
            <div class="img-wrap">
              <img
                src="../../../../assets/images/studio/file-list4.png"
                alt=""
              />
            </div>
            <div class="text-wrap">
              <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
              <b>손가락도 포함하여 작업하나요?</b>
            </div>
          </div>
          <div class="bottom-wrap">Reply 0</div>
        </li>
        <li class="studio-contents">
          <div class="top-wrap">
            <div class="img-wrap">
              <button>
                <img
                  src="../../../../assets/images/studio/file-list4.png"
                  alt=""
                />
              </button>
            </div>
            <div class="text-wrap">
              <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
              <b>손가락도 포함하여 작업하나요?</b>
            </div>
          </div>
          <div class="bottom-wrap">Reply 0</div>
        </li>
      </ul>
    </div>
    <div class="studio-right studio-right-qna studio-right-qna2">
      <div class="studio-right-top">
        <ul>
          <li class="studio-title">
            <div class="title-wrap">
              <img
                src="../../../../assets/images/studio/icon/icon-back.svg"
                alt=""
              />
              <h2>질문보기</h2>
            </div>
            <div class="icon-wrap">
              <button>질문 해결</button>
            </div>
          </li>
          <li class="studio-subtitle">
            <div>
              <b>미해결 질문 <span>(1)</span></b>
            </div>
            <div>
              <b>해결된 질문 <span>(0)</span></b>
            </div>
          </li>
          <li class="studio-contents">
            <div class="qna-img-wrap">
              <img
                src="../../../../assets/images/studio/sample-image.png"
                alt=""
              />
            </div>
          </li>
          <li class="studio-contents">
            <div class="top-wrap">
              <ul class="text-wrap">
                <li class="top">
                  <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
                  <div>
                    <button>수정</button>
                    <span class="bar-left"></span>
                    <button>삭제</button>
                  </div>
                </li>
                <li>
                  <b>질문 내용입니다.</b>
                </li>
              </ul>
            </div>
            <div class="bottom-wrap">Reply 0</div>
          </li>
          <li class="studio-contents">
            <div class="top-wrap">
              <ul class="text-wrap">
                <li class="top">
                  <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
                  <div>
                    <button>수정</button>
                    <span class="bar-left"></span>
                    <button>삭제</button>
                  </div>
                </li>
                <li>
                  <b>질문 내용입니다.</b>
                </li>
              </ul>
            </div>
            <div class="bottom-wrap">Reply 0</div>
          </li>
          <li class="studio-contents">
            <div class="top-wrap">
              <ul class="text-wrap">
                <li class="top">
                  <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
                  <div>
                    <button>수정</button>
                    <span class="bar-left"></span>
                    <button>삭제</button>
                  </div>
                </li>
                <li>
                  <b>답변 내용입니다.</b>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="studio-right-bottom">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="질문을 입력해주세요."
        ></textarea>
        <button class="btn2-4">등록</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
