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
});
