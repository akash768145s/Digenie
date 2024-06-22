import ProcessCard from "@/components/design/processCard";
import { Text } from "@/components/ui/text";
import TextBorder from "@/components/ui/textBorder";

import { processData } from "@/data/process";

const ProcessSection = () => {
  return (
    <section className="bg-[#FBF9F9] px-5 xl:px-14 py-14">
      <div className="w-11/12 lg:w-1/2 mx-auto mb-14 text-center">
        <Text className="text-5xl" variant="h1">
          Our Process
        </Text>
        <TextBorder />
      </div>
      <div className="grid xl:grid-cols-5">
        {processData.map((item) => (
          <ProcessCard
            key={item.key}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
