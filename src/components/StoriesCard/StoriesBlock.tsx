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

  return (
    <section id="stories">
      <div className="flex-wrap md:flex">
        {storiesData.map((story) => (
          <StoryCard key={story.name} details={story} hasDate={hasDate} />
        ))}
      </div>
    </section>
  );
}
