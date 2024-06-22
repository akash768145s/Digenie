import ContentMarketingImage from "@/../public/images/services/content-marketing.png";
import WesiteImage from "@/../public/images/services/website.png";
import SocialMediaImage from "@/../public/images/services/social-media.png";
import SEOImage from "@/../public/images/services/seo.png";
import ListingsReputation from "@/../public/images/services/listings-reputation.png";
import DigitalAds from "@/../public/images/services/digital-ads.png";

import BulbIcon from "@/../public/icons/bulb.svg";
import FlagIcon from "@/../public/icons/flag.svg";
import MessageIcon from "@/../public/icons/message.svg";
import MobileIcon from "@/../public/icons/mobile.svg";
import EmailIcon from "@/../public/icons/email.svg";
import MonitorIcon from "@/../public/icons/monitor.svg";
import WebsiteIcon from "@/../public/icons/website.svg";

export const services = [
  {
    key: 0,
    title: "SEO",
    question:
      "Is your website showing up on the first page of Google search results?",
    answer:
      "SEO algorithms are constantly changing, and you need to know how to stay on top of those changes. But as a business owner, you might not have the time to do it all yourself. This is where we come in! We employ link-building, authentic content, keyword research, alt tags, and every other trick in the book to improve your on-page and off-page SEO. Don't worry about getting lost in the sea of businesses in the search engines! Partner with us to rank higher and reach a larger audience.",
    order: "order-0",
    image: SEOImage.src,
  },
  {
    key: 1,
    title: "Content Marketing",
    question: "Are you creating valuable content?",
    answer:
      "Longform content is the key to positioning yourself as an industry expert in your ideal target market’s mind. Well-researched blogs and whitepapers show readers your authority in the industry. Fortunately, they don't just impress curious prospects; they also show search engine crawlers that your website has relevant content and boost your SEO score. Digenie’s skilled writers conduct a thorough keyword and trend analysis to create content that will attract traffic and search engines. We also create case studies to leverage customer experiences and reach potential clients.",
    order: "order-1",
    image: ContentMarketingImage.src,
  },
  {
    key: 2,
    title: "Social Media Marketing",
    question: "How engaged are your social media followers?",
    answer:
      "Social media forums are the ideal platforms to interact with your target group, identify their needs, display your services, and build a positive relationship with them. Our team blends relevant content with creative designs to help convert your social media followers into paying customers. We can manage your Facebook, Instagram, X, threads, and LinkedIn accounts for you. Depending on the nature of your business, we'll also recommend which platform you need to focus more on.",
    order: "order-0",
    image: SocialMediaImage.src,
  },
  {
    key: 3,
    title: "Digital Ads",
    question: "Do you want to run an effective ad campaign?",
    answer:
      "Whether you want to promote a new service or spread the word about an exclusive offer, digital ads are a great way to reach your target group. Our team does extensive keyword research, crafts engaging copy, and uses the right platform to deliver your message to your potential customers. From search engines to social media, we can assist you in running ad campaigns on various platforms.",
    order: "order-1",
    image: DigitalAds.src,
  },
  {
    key: 4,
    title: "Listings & Reputation Management",
    question: "Want to increase the credibility of your business?",
    answer:
      "When a prospect is considering your service/product, the first place they might look is the search engine. If the information they find is inaccurate, they might lose trust in your business. To prevent that from happening, we update your business address, website, phone number, and other information in Google Business Profiles, and other popular listing platforms. The Digenie team also monitors customer reviews across different platforms and responds to them to make your customers feel heard. This will help position you as a brand that cares about your clients' needs.",
    order: "order-0",
    image: ListingsReputation.src,
  },
  {
    key: 5,
    title: "Website Designing",
    question: "Is your website user-friendly?",
    answer:
      "Your website is your firm's online storefront. If it is not user-friendly and responsive, you might miss out on potential customers. Our website designers understand your vision for your website and create a visually appealing design. We make sure the site is user-friendly, responsive, fast, and accessible. Our team also runs a periodic website analysis to check your website and make sure it is functioning well.",
    order: "order-1",
    image: WesiteImage.src,
  },
];

export const servicesForServicesPage = [
  {
    key: 0,
    title: "Website Designing",
    discription:
      "Increase conversions and attract more traffic with our user-friendly websites.",
    icon: WebsiteIcon.src,
    color: "bg-pink-600",
  },
  {
    key: 1,
    title: "Email Marketing",
    discription:
      "Pitch your product/service to your ideal customers through our creative email campaigns",
    icon: EmailIcon.src,
    color: "bg-gray-600",
  },
  {
    key: 2,
    title: "Influencer Marketing",
    discription:
      "Leverage your industry's top voices and attract your target audience with Digenie’s help",
    icon: FlagIcon.src,
    color: "bg-orange-600",
  },
];

export const servicesForHomePage = [
  {
    key: 0,
    title: "SEO",
    discription:
      "Gain more visibility online with on our on-page and off-page SEO tactics",
    icon: MessageIcon.src,
    color: "bg-red-600",
  },
  {
    key: 1,
    title: "Content Marketing",
    discription:
      "Showcase your expertise with our well-researched blogs, whitepapers, case studies, and more",
    icon: MonitorIcon.src,
    color: "bg-blue-600",
  },
  {
    key: 2,
    title: "Social Media Marketing",
    discription:
      "Engage, interact, and convert your followers into loyal customers with Digenie",
    icon: BulbIcon.src,
    color: "bg-green-600",
  },
  {
    key: 3,
    title: "Digital Ads",
    discription:
      "Reach your target audience and generate more quality leads with Digenie's ad campaigns",
    icon: MobileIcon.src,
    color: "bg-yellow-600",
  },
];
