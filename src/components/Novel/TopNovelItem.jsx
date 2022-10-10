import { css } from "@emotion/react";

const topNovelItemWrapper = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
`;

const thumbnailWrapper = css`
  width: 8rem;
  height: 12rem;
`;

const titleWriterTagWrapper = css`
  flex: 1 1 auto;
  min-width: 0;
`;

const titleRankWrapper = css`
  width: 100%;
  display: flex;
  gap: 7px;
  margin-bottom: 0.5rem;
`;

const rankLabel = css`
  font-size: 2.4rem;
  font-weight: 600;
  vertical-align: text-bottom;
`;

const titleLabel = css`
  flex: 1 1 auto;
  min-width: 0;
  font-size: 1.6rem;
  font-weight: 100;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 3.7rem;
`;

const writerLabel = css`
  font-size: 1.4rem;
  color: #777777;
  margin-bottom: 1.6rem;
`;

const tagsWrapper = css`
  display: -webkit-box;
  line-height: 1.3;
  white-space: normal;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const tagLabel = css`
  color: #666666;
  font-size: 1.2rem;
  white-space: nowrap;
`;

const TopNovelItem = ({ rank, thumbnailURL, title, writer, tags }) => {
  return (
    <div css={topNovelItemWrapper}>
      <div css={thumbnailWrapper}>
        <img src={thumbnailURL} />
      </div>
      <div css={titleWriterTagWrapper}>
        <div css={titleRankWrapper}>
          <span css={rankLabel}>{rank}</span>
          <span css={titleLabel}>{title}</span>
        </div>
        <p css={writerLabel}>{writer}</p>
        <div css={tagsWrapper}>
          {tags.writer.map((writerTag, index) => (
            <span key={index} css={tagLabel}>
              {writerTag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNovelItem;
