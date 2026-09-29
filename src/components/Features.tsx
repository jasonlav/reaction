import Feature from "./Feature";
import type { Props as FeatureProps } from "./Feature";

type Props = {
  features: FeatureProps[];
};

export default function Features({ features }: Props) {
  return (
    <div>
      {features.length === 0 && <p>No features available.</p>}
      {features.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
}
