import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import Wrapper from "../commons/Wrapper";
import TopicNovelItem from "./TopicNovelItem";

const novelList = {
  label: { sub: "오늘은 뭐 볼까? ", main: "PD 추천픽!" },
  novels: [
    {
      id: 1,
      title: "홈즈 양, 교수님은 악당이 아니에요",
      writer: "khaloff",
      thumbnailURL:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/dummy_thumbnail.webp",
      tags: {
        writer: [
          "#판타지",
          "#추리",
          "#어반",
          "#피카레스크",
          "#약피폐",
          "#홈즈",
        ],
        reader: [],
      },
      description:
        "거짓말이라고요?\n그걸 알아내는 게 탐정의 일이겠죠.\n\n소녀인 셜록 홈즈를 제자로 들였다.\n내가 범죄자라며 홈즈 양이 집착한다.\n\n*표지는 상업적 이용 허가 받은 이미지입니다",
    },
    {
      id: 2,
      title: "홈즈 양, 교수님은 악당이 아니에요",
      writer: "khaloff",
      thumbnailURL:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/dummy_thumbnail.webp",
      tags: {
        writer: [
          "#판타지",
          "#추리",
          "#어반",
          "#피카레스크",
          "#약피폐",
          "#홈즈",
        ],
        reader: [],
      },
      description:
        "거짓말이라고요?\n그걸 알아내는 게 탐정의 일이겠죠.\n\n소녀인 셜록 홈즈를 제자로 들였다.\n내가 범죄자라며 홈즈 양이 집착한다.\n\n*표지는 상업적 이용 허가 받은 이미지입니다",
    },
    {
      id: 3,
      title: "홈즈 양, 교수님은 악당이 아니에요",
      writer: "khaloff",
      thumbnailURL:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/dummy_thumbnail.webp",
      tags: {
        writer: [
          "#판타지",
          "#추리",
          "#어반",
          "#피카레스크",
          "#약피폐",
          "#홈즈",
        ],
        reader: [],
      },
      description:
        "거짓말이라고요?\n그걸 알아내는 게 탐정의 일이겠죠.\n\n소녀인 셜록 홈즈를 제자로 들였다.\n내가 범죄자라며 홈즈 양이 집착한다.\n\n*표지는 상업적 이용 허가 받은 이미지입니다",
    },
    {
      id: 4,
      title: "홈즈 양, 교수님은 악당이 아니에요",
      writer: "khaloff",
      thumbnailURL:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/dummy_thumbnail.webp",
      tags: {
        writer: [
          "#판타지",
          "#추리",
          "#어반",
          "#피카레스크",
          "#약피폐",
          "#홈즈",
        ],
        reader: [],
      },
      description:
        "거짓말이라고요?\n그걸 알아내는 게 탐정의 일이겠죠.\n\n소녀인 셜록 홈즈를 제자로 들였다.\n내가 범죄자라며 홈즈 양이 집착한다.\n\n*표지는 상업적 이용 허가 받은 이미지입니다",
    },
    {
      id: 5,
      title: "홈즈 양, 교수님은 악당이 아니에요",
      writer: "khaloff",
      thumbnailURL:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/dummy_thumbnail.webp",
      tags: {
        writer: [
          "#판타지",
          "#추리",
          "#어반",
          "#피카레스크",
          "#약피폐",
          "#홈즈",
        ],
        reader: [],
      },
      description:
        "거짓말이라고요?\n그걸 알아내는 게 탐정의 일이겠죠.\n\n소녀인 셜록 홈즈를 제자로 들였다.\n내가 범죄자라며 홈즈 양이 집착한다.\n\n*표지는 상업적 이용 허가 받은 이미지입니다",
    },
    {
      id: 6,
      title: "홈즈 양, 교수님은 악당이 아니에요",
      writer: "khaloff",
      thumbnailURL:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/dummy_thumbnail.webp",
      tags: {
        writer: [
          "#판타지",
          "#추리",
          "#어반",
          "#피카레스크",
          "#약피폐",
          "#홈즈",
        ],
        reader: [],
      },
      description:
        "거짓말이라고요?\n그걸 알아내는 게 탐정의 일이겠죠.\n\n소녀인 셜록 홈즈를 제자로 들였다.\n내가 범죄자라며 홈즈 양이 집착한다.\n\n*표지는 상업적 이용 허가 받은 이미지입니다",
    },
  ],
};

const TopicNovelList = ({ topic, isPlus }) => {
  const colorSets = (isPlus) => ({ backgroundColor: "" });

  const topicNovelListWrapper = css`
    background-color: #fff;
  `;

  const topicNovelListBlock = css`
    padding: 2rem 0;
  `;

  const novelListWrapper = css`
    display: flex;
    justify-content: space-between;
    gap: 4.3rem;
  `;

  const topicHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  `;
  const topicLabel = css`
    font-size: 2.6rem;
    font-weight: 200;

    & > span {
      font-weight: 600;
    }
  `;

  const moreButton = css`
    font-size: 1.4rem;
    font-weight: 100;
    padding: 0.5rem 1.5rem;
    border: 1px solid black;
    border-radius: 2rem;
  `;

  const isDomain = true;

  return (
    <Wrapper css={topicNovelListWrapper}>
      <div css={topicNovelListBlock}>
        <div css={topicHeader}>
          <div css={topicLabel}>
            {novelList.label.sub}
            <span>{novelList.label.main}</span>
          </div>
          {isDomain ? (
            <span css={moreButton}>
              <Link to={""}>더보기 {">"}</Link>
            </span>
          ) : (
            <></>
          )}
        </div>
        <div css={novelListWrapper}>
          {novelList.novels.map(({ id, thumbnailURL, title, writer }) => (
            <TopicNovelItem
              key={id}
              thumbnailURL={thumbnailURL}
              title={title}
              writer={writer}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default TopicNovelList;
