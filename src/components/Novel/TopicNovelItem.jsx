import { css } from "@emotion/react";

const itemWrapper = css`
  flex: 1 1 auto;
  min-width: 0;
`;

const titleWrapper = css`
  width: 100%;
  font-size: 1.8rem;
  margin-top: 1.9rem;
  margin-bottom: 0.8rem;
  font-weight: 100;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.1;
`;

const writerWrapper = css`
  font-size: 1.4rem;
  font-weight: 100;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TopicNovelItem = ({ thumbnailURL, title, writer }) => {
  return (
    <div css={itemWrapper}>
      <div>
        <img src={thumbnailURL} />
      </div>
      <h3 css={titleWrapper}>{title}</h3>
      <p css={writerWrapper}>{writer}</p>
    </div>
  );
};

export default TopicNovelItem;
