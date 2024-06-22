import ConsultationIcon from "@/../public/icons/consultation.svg";
import Analysis from "@/../public/icons/analysis.svg";
import StrategyIcon from "@/../public/icons/strategy.svg";
import ImplementationIcon from "@/../public/icons/implementation.svg";
import ReportingIcon from "@/../public/icons/reporting.svg";

export const processData = [
  {
    key: 0,
    title: "Consultation",
    description:
      "Our team connects with you to understand what you are looking for and what your business goals are.",
    icon: ConsultationIcon.src,
  },
  {
    key: 1,
    title: "SWOT Analysis",
    description:
      " We then create a detailed SWOT analysis based on your website, social media presence, and competitors.",
    icon: Analysis.src,
  },
  {
    key: 2,
    title: "Strategy Creation",
    description:
      "After extensive research, we create strategies that'll address your pressing marketing concerns and deliver the results you expected.",
    icon: StrategyIcon.src,
  },
  {
    key: 3,
    title: "Implementation",
    description:
      "From search engines to social media, we implement strategies across different platforms and monitor their progress.",
    icon: ImplementationIcon.src,
  },
  {
    key: 4,
    title: "Reporting",
    description:
      "Every month, we give you an analytics report on your website and social media performance and decide if we need to change the approach.",
    icon: ReportingIcon.src,
  },
];
