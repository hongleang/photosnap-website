import { useTransition } from "@react-spring/web";
import articleBlocks from "../../data/articleBlocks";

import ArticleBlock from "../ArticleBlock/ArticleBlock";

export default function HomeArticleBlocks() {
  const transitions = useTransition(articleBlocks, {
    from: {
      opacity: 0,
      x: -500,
    },
    enter: {
      opacity: 0.85,
      x: 0,
    },
    config: {
      duration: 300
    },
    trail: 500,
  });
  return (
    <section id="story-blocks" className="w-full max-w-full">
      {transitions((style, articleBlock, _arr, idx) => (
        <ArticleBlock
          key={articleBlock.title + idx}
          {...{ articleBlock, reverse: idx % 2 !== 1, style }}
        />
      ))}
    </section>
  );
}
