import { reactive } from "vue";

export const store = reactive({
  headerNavbar: ["home", "services", "why us", "case studies", "about", "blog"],
  infoCards: [
    {
      section: "business growth",
      title: "increase brand awarness",
    },
    {
      section: "investors in people",
      title: "in-house sales training",
    },
    {
      section: "social media analysis",
      title: "harness your social proof",
    },
  ],
  infoCardTxt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante orci convallis gravida et at massa.",
  infoCardIcon: "",
  infoCardPath: "image",
  partnersImgPath: [
    "abstract",
    "cglobal",
    "next",
    "hemisferio",
    "spaces",
    "digitalbox",
  ],
  caseInfo: [
    {
      title:
        "How Spaces attracted five millions visitors by improving the content",
      value: "200%",
      subtitle: "Higher revenue from digital",
    },
    {
      title:
        "Creativity helped Hemisferio to increase their brand reach vertically",
      value: "10x",
      subtitle: "Sales increase with the same ad spend",
    },
    {
      title: "How DigitalBox used AI-powered data insight to boost sales",
      value: "3-year",
      subtitle: "Partnership with Avada Consultant",
    },
  ],
  caseImgPath: "case-studies-",
  footerLinks: [
    {
      title: "services",
      links: [
        "marketing plan",
        "sales development",
        "digital marketing",
        "pricing",
        "why us",
        "case studies",
      ],
    },
    {
      title: "resources",
      links: ["learning center", "video tutorials", "customers", "blog"],
    },
    {
      title: "company",
      links: ["who we are", "contact us", "careers"],
    },
  ],
});
