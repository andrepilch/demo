import { Section, SectionGap, SectionHeader } from "./Section";
import { Eyebrow, H2, Body } from "./Text";
import { PhilosophyMasonry, type PhilosophyItem } from "./PhilosophyMasonry";

// Product Design Philosophy (masonry grid)
const productPhilosophies: PhilosophyItem[] = [
  {
    category: "Focus",
    title: "Build the right product",
    description: "Products have to create an attraction for real people. Spend time on what matters."
  },
  {
    category: "Value",
    title: "Always add value",
    description:
      "Value must be proven. More work, change, or progress can be good or bad, but value focuses on real metrics. It helps focus on what matters. Adding value does not require perfection and it insinuates there needs to be a clear increase in value that can be demonstrated at some level in the work.",
  },
  {
    category: "Simplicity",
    title: "Keep it simple",
    description:
      "Users usually want something very simple. Power users can still benefit from simple features, and they might enjoy it better too!",
  },
  {
    category: "Simplicity",
    title: "Simplicity is complicated",
    description: "There is always a danger when you simplify things which makes good simplicity hard to achieve. Simplicity which enhances usability is worth the effort. Complexity loses engagement."
  },
  {
    category: "Strategy",
    title: "Establish UX Reciprocity",
    description:
      "Rely on patterns elsewhere for a mutual benefit. Everything that’s the same should be the same. Save users time by not making them relearn.",
  },
  {
    category: "Marketing",
    title: "Marketing is a big deal",
    description:
"There is always a point in product development when marketing becomes the most important, it can truly make or break a product no matter how good.",
  },
  {
    category: "Brand",
    title: "Remember who you are",
    description:
      "Don’t forget the past when adapting for the future. Don’t lose the essence of what made the business what it is today.",
  },
  {
    category: "Value",
    title: "Prioritize user content",
    description:
      "No content you create is as valuable as the content a user creates. Users return for their own content.",
  },
  {
    category: "Collaboration",
    title: "Work transparently",
    description:"Early visibility is easier than late presentation."
  },
  {
    category: "Collaboration",
    title: "Listen to others",
    description: "As designers it is easy to think we have to come up with all the solutions. In reality we don't, most of our solutions will come from others and our job is often simply just to listen and ask the right questions. If we listen and are able to apply the best solutions we hear, we can almost guarantee the outcome to be successful."
  },
  {
    category: "Research",
    title: "Don't assume",
    description: "Do research and build strong intuition. Builders don’t build a new house with top-bottom split doors just because it could be a nice feature somebody wants. Don’t build software that way either."
  },
  {
    category: "Brand",
    title: "Meet expectations",
    description: "Users are always benchmarking: faster, easier, cheaper, stronger, nicer, cooler, …. Users form expectations based on their experience with similar kinds of software. Those expectations influence a user’s response to software."
  },
    {
    category: "Process",
    title: "Progress over correctness",
      quote: "Iterate to greatness. Balance business goals with craft by shipping continuous improvements and avoiding the perfection trap.",
    attribution: "Vercel",
  },
    {
    category: "Simplicity",
    title: "Don't distract",
    description: "Good design is invisible. Keep the user on track by removing friction. Every bit of friction is something in the way of the happy path and a return customer."
  },
    {
    category: "Collaboration",
    title: "Work together",
    description: "Work for the name on the front of the jersey, not the back."
  },
    {
    category: "Competition",
    title: "Pave the way",
    description: "Innovation carves out its own path to create a competitive advantage."
  },
  {
    category: "Intuition",
    title: "Wear their shoes",
    description: "No customer should feel like your first customer. Know the user experience, and refine it."
  },
  {
    category: "Prototyping",
    title: "Prototyping is worth it",
    quote:
      "While a picture is worth a thousand words, a prototype is worth a thousand meetings",
    attribution: "Kevin Grennan",
  },
];

export function ProductPhilosophy() {
  return (
    <Section gap={SectionGap.lg} id="product-philosophy">
        <SectionHeader>
          <Eyebrow>Product Thinking</Eyebrow>
          <H2>Product Design Philosophy</H2>
          <Body color="secondary">
            Collected insights and principles from years of building
            products. These shape how I approach every design challenge.
        </Body>
        </SectionHeader>

        <PhilosophyMasonry items={productPhilosophies} />
    </Section>
  );
}
