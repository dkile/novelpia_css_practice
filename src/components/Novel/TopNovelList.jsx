import { css } from "@emotion/react";

import TopNovelItem from "./TopNovelItem";

const novelList = {
  label: "조회수",
  novels: [
    {
      id: 1,
      rank: 1,
      title: "히어로가 집착하는 악당이 되었다",
      writer: "서은하",
      thumbnailURL:
        "https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/dummy_thumbnail2.webp",
      tags: {
        writer: [
          "#현대",
          "#판타지",
          "#착각",
          "#후회",
          "#집착",
          "#피폐",
          "#히어로",
          "#임시",
          "#임시",
          "#임시",
          "#임시",
          "#임시",
          "#임시",
        ],
        reader: [],
      },
      description:
        "히어로물 속 악당이 되었다.\n\n그래서 주인공과 싸우다가 이제 그만두려 했는데.\n\n그녀가 나한테 집착한다. 어째서...?",
    },
    {
      id: 2,
      rank: 2,
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
      rank: 3,
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

const topNovelListWrapper = css`
  flex: 1 1 auto;
  min-width: 0;
`;

const rankTypeMoreWrapper = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
`;

const topNovelItemsWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const rankTypeLabel = css`
  font-size: 1.8rem;
  font-weight: 200;
`;

const moreLabel = css`
  font-size: 1.4rem;
  line-height: 2.5rem;
  font-weight: 200;
  color: #777777;
`;

const TopNovelList = ({ rankType, tag }) => {
  return (
    <div css={topNovelListWrapper}>
      <div css={rankTypeMoreWrapper}>
        <span css={rankTypeLabel}>{novelList.label}</span>
        <span css={moreLabel}>더보기</span>
      </div>
      <div css={topNovelItemsWrapper}>
        {novelList.novels.map(
          ({ id, rank, thumbnailURL, title, writer, tags }) => (
            <TopNovelItem
              key={id}
              rank={rank}
              thumbnailURL={thumbnailURL}
              title={title}
              writer={writer}
              tags={tags}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TopNovelList;
