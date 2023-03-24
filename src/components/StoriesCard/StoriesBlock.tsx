import { useTransition } from "@react-spring/web";
import stories from "../../data/stories";
import StoryCard from "./StoryCard";

type Props = {
  limit?: number;
  hasDate?: boolean;
  col?: number;
};

export default function StoriesBlock({
  limit,
  hasDate = true,
  col = 2,
}: Props) {
  const storiesData = limit ? stories.slice(0, limit) : stories;

  const transitions = useTransition(storiesData, {
    from: { opacity: 0, y: -40 },
    enter: { opacity: 1, y: 0 },
    config: {
      duration: 600,
    },
    trail: 500,
  });

  return (
    <section id="stories">
      <div className="flex-wrap md:flex">
        {transitions((style, story) => (
          <StoryCard
            key={story.name}
            details={story}
            hasDate={hasDate}
            style={style}
          />
        ))}
      </div>
    </section>
  );
}
