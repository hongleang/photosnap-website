import { Feature } from "../../models/Features";

type Props = {
  details: Feature;
};

export default function FeatureBlock({ details }: Props) {
  const { img, title, desc } = details;

  return (
    <div className="px-4 md:basis-1/2 lg:basis-1/3">
      <div className="flex flex-col items-center text-center">
        <div className="mb-14 flex h-20 w-20 items-center">
          <img src={img} alt={title} className="w-full align-middle" />
        </div>
        <h3 className="mb-4 flex-1 text-2xl">{title}</h3>
        <p className="leading-6 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
