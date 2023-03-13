import features from "../../data/features";
import FeatureBlock from "./FeatureBlock";

type Props = {
  limit?: number;
  singleCol?: boolean;
};

export default function FeaturesArticle({ limit, singleCol = false }: Props) {
  const featuresData = limit ? features.slice(0, limit) : features;

  return (
    <section id="features">
      <div
        className={`flex flex-col gap-y-20 py-20 px-7 md:flex-row md:flex-wrap lg:items-center ${
          singleCol ? "justify-center gap-x-11 lg:gap-x-0" : ""
        }`}
      >
        {featuresData.map((feature) => (
          <FeatureBlock key={feature.title} details={feature} />
        ))}
      </div>
    </section>
  );
}
