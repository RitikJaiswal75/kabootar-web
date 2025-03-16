import { features } from "../constants/features";

const Features = () => {
  return (
    <section id="features" className="container mx-auto px-5 ">
      <h2 className="text-xl sm:text-3xl font-bold text-emerald-600 mb-4">
        Features
      </h2>
      <ul>
        {features.map((feature, index) => {
          return (
            <li key={index} className="border-b-gray-800 border-b-2 py-2">
              <i className="ri-file-add-line text-3xl">&nbsp;</i>
              <span className="text-lg font-bold">{feature.point} : </span>
              <span className="text-lg">{feature.description}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
