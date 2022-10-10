import { css } from "@emotion/react";
import { useState } from "react";

import Wrapper from "../commons/Wrapper";
import TopNovelList from "../Novel/TopNovelList";

const realTimeHotWrapper = css`
  background-color: #fff;
`;

const realTimeHotLabelWrapper = css`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 2.6rem;
  font-weight: 200;
`;

const hotLabel = css`
  font-weight: 600;
`;

const basisTimeLabel = css`
  color: #666666;
  font-size: 1.6rem;
`;

const tagButtonsBlockWrapper = css`
  width: 100%;
  margin-bottom: 2rem;
`;

const tagButtonsBlock = css`
  width: 100%;
  height: 3.6rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  overflow: hidden;
`;

const tagButton = css`
  width: fit-content;
  max-width: 15rem;
  min-width: 0;
  padding: 0.4rem 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.4rem;
  background-color: #fff;
  border-radius: 1.6rem;
  border: 0.1rem solid #ddd;
  text-align: center;
`;

const topNovelListsWrapper = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4.4rem;
`;

const RealtimeHot = () => {
  const time = "00";
  const tags = [
    "전체",
    "판타지",
    "무협",
    "현대",
    "로맨스",
    "현대판타지",
    "라이트노벨",
    "공포",
    "SF",
    "스포츠",
    "대체역사",
    "기타",
  ];

  const [currentTag, setCurrentTag] = useState("전체");

  const handleCurrentTag = (e) => {
    setCurrentTag(e.target.value);
  };

  return (
    <Wrapper css={realTimeHotWrapper}>
      <div>
        <div css={realTimeHotLabelWrapper}>
          실시간
          <span css={hotLabel}> HOT</span>
        </div>
        <span css={basisTimeLabel}>{` ${time}시 기준`}</span>
      </div>
      <div css={tagButtonsBlockWrapper}>
        <div css={tagButtonsBlock}>
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={handleCurrentTag}
              value={tag}
              css={tagButton}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div css={topNovelListsWrapper}>
        <TopNovelList rankType={""} tag={currentTag} />
        <TopNovelList rankType={""} tag={currentTag} />
        <TopNovelList rankType={""} tag={currentTag} />
      </div>
    </Wrapper>
  );
};

export default RealtimeHot;
