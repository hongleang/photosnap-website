import articleBlocks from "../../data/articleBlocks";

import ArticleBlock from "../ArticleBlock/ArticleBlock";

export default function HomeArticleBlocks() {
  return (
    <section id="story-blocks" className="w-full max-w-full">
      {articleBlocks.map((articleBlock, index) => (
        <ArticleBlock
          key={articleBlock.title + index}
          {...{ articleBlock, reverse: index % 2 !== 1 }}
        />
      ))}
    </section>
  );
}
