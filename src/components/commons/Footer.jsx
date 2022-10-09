import { css } from "@emotion/react";

import Wrapper from "./Wrapper";

const footerWrapper = css`
  margin-top: auto;
  width: 100%;
  height: auto;
`;

const footerTopWrapper = css`
  background-color: #333333;
`;

const footerBottomWrapper = css`
  background-color: #2d2d2d;
`;

const footerTop = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 3rem;
  padding-top: 5rem;
  padding-bottom: 5.7rem;
`;

const footerBottom = css`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const iconWrapper = css`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: #2d2d2d;
`;

const icon = css`
  padding: 0.8rem;
  width: 100%;
`;

const Footer = () => {
  return (
    <footer css={footerWrapper}>
      <Wrapper css={footerTopWrapper}>
        <div css={footerTop}>
          <div>
            <div
              css={css`
                display: flex;
                justify-content: flex-start;
                gap: 2.3rem;
                align-items: flex-end;
                font-size: 1.5rem;
                color: #999999;
              `}
            >
              <img
                css={css`
                  padding-bottom: 0.5rem;
                `}
                src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/footer_logo_new.png"
              />
              <span>이용약관</span>
              <span>개인정보취급방침</span>
              <span>회사소개</span>
              <span>제휴안내</span>
              <span>CP 사이트</span>
              <span>작품 투고</span>
            </div>
            <div
              css={css`
                padding-top: 2.7rem;
                padding-bottom: 1rem;
                color: #666666;
                font-size: 1.4rem;
              `}
            >
              <span>주식회사 메타크래프트 </span>
              <span>대표 유정석 </span>
              <span>사업자등록번호 210-81-79781 </span>
              <span>통신판매업 제2021-서울강남-01296호 </span>
              <br />
              <span>주소 서울시 강남구 삼성동 테헤란로 513, K타워 4층</span>
            </div>
            <div
              css={css`
                color: #999999;
                font-size: 1.4rem;
              `}
            >
              <span>
                고객센터 1588-3644
                <a href="mailto:help@novelpia.com">help@novelpia.com</a>
              </span>
              <span>
                운영시간 AM 10:00 ~ PM 07:00 (휴게시간 PM 1:00 ~ 2:00)
              </span>
            </div>
          </div>
          <div>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                gap: 1.6rem;
                padding-top: 0.5rem;
              `}
            >
              <span css={iconWrapper}>
                <img
                  css={icon}
                  src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/so_btn1.png"
                />
              </span>
              <span css={iconWrapper}>
                <img
                  css={icon}
                  src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/so_btn2.png"
                />
              </span>
              <span css={iconWrapper}>
                <img
                  css={icon}
                  src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/so_btn3.png"
                />
              </span>
              <span css={iconWrapper}>
                <img
                  css={icon}
                  src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/so_btn4.png"
                />
              </span>
              <span css={iconWrapper}>
                <img
                  css={icon}
                  src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/so_btn5.png"
                />
              </span>
              <span css={iconWrapper}>
                <img
                  css={icon}
                  src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/so_btn6.png"
                />
              </span>
              <span css={iconWrapper}>
                <img
                  css={icon}
                  src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/so_btn7.png"
                />
              </span>
              <span css={iconWrapper}>
                <img
                  css={css`
                    filter: brightness(1.5);
                  `}
                  src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/so_btn8.png"
                />
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper css={footerBottomWrapper}>
        <div css={footerBottom}>
          <div
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: 1.6rem;
              padding: 3rem 0;
            `}
          >
            <div>
              <img src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/n_copyright_logo2.png"></img>
            </div>
            <div
              css={css`
                width: calc(100% - 9rem);
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
              `}
            >
              <p
                css={css`
                  width: fit-content;
                  color: #999999;
                  font-size: 1.4rem;
                `}
              >
                주의!본 사이트에 등록된 컨텐츠는 사이트 및 원 저작권자에 권리가
                있는 컨텐츠이며, 무단 복제/전송/수정/배포는 법적 처벌을 받을 수
                있습니다.
              </p>
              <p
                css={css`
                  color: #666666;
                  font-size: 1.2rem;
                `}
              >
                Copyright © 노벨피아 2021. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
