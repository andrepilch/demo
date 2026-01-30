import { Section, SectionGap, SectionHeader } from "./Section";
import { Eyebrow, H2, Body } from "./Text";
import { PhilosophyMasonry, type PhilosophyItem } from "./PhilosophyMasonry";

// Product Design Philosophy (masonry grid)
const productPhilosophies: PhilosophyItem[] = [
  {
    category: "Focus",
    title: "Building the Right Product",
    description:
      "You have to create an attraction for real people. Given enough time, a product will usually end up in the right place—but you don't want to be the last one there, if you still make it with funding.",
  },
  {
    category: "Value",
    title: "User-Created Content Wins",
    description:
      "No content you create is as valuable as the content a user creates. Users return to see what they've been working on, not what you've been working on.",
  },
  {
    category: "Simplicity",
    title: "Simplicity Is Hard",
    description:
      "Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for.",
    quote:
      "Simplicity doesn't mean limiting features—it means taking more time on each feature.",
    attribution: "Chris Sacca",
  },
  {
    category: "Strategy",
    title: "Don't Re-invent, Plan Ahead",
    description:
      "Build on existing patterns, flows, and products. Building in isolation leads to disconnected flows and weaker code. Build a castle of stone, not cards.",
  },
  {
    category: "UX",
    title: "User-Driven Design",
    description:
      "Don't exercise user-manual-driven design. Instead, design to remove the need for a user manual entirely.",
  },
  {
    category: "Baseline",
    title: "Strong Products",
    description:
      "A strong product saves time, adds value, competes well, and provides a good experience from start to finish.",
  },
  {
    category: "Iteration",
    title: "Always Add Value",
    description:
      "Progress is subjective and can sometimes be equated to change. But value can and has to be proven. Are users enjoying the app better? Are we selling more?",
    quote:
      "We recognize that what we ship is never in a perfect state. Iterate to Greatness allows us to balance business goals with craft.",
    attribution: "Vercel",
  },
  {
    category: "Focus",
    title: "Meet Expectations",
    description:
      "Users form expectations based on their experience with similar software. Those expectations influence their response to your product.",
  },
  {
    category: "Mindset",
    title: "The App Is Its People",
    description:
      "Software has very little overhead—some infrastructure and the rest labor. The people making the app are the app.",
  },
  {
    category: "Process",
    title: "Transparency First",
    description:
      "Early visibility is easier than late presentation. Share progress openly to avoid surprises.",
  },
  {
    category: "Product vs Feature",
    title: "Products Have Purpose",
    description:
      "Products stem from research, have personas, and solve real problems with complete flows. Features fit into products—but building products as features doesn't work.",
  },
  {
    category: "Presentation",
    title: "Make It a Big Deal",
    description:
      "Make your product a big deal and users will follow with trust to invest themselves in it.",
  },
  {
    category: "Consistency",
    title: "Reciprocity in Design",
    description:
      "Everything that's the same should be the same. Don't make different menus for the same thing. Users should not have to play 'find the differences.'",
  },
  {
    category: "Quality",
    title: "Accidental Features Cause Accidents",
    description:
      "Every feature should be intentional and designed for a purpose. Undesigned functionality opens the door for user accidents and quality loss.",
  },
  {
    category: "Leadership",
    title: "Product Thinking Makes Good Products",
    description:
      "It's product thinking that makes good products, not engineering. Apps also end up bloated with features that failed—those should be removed or redesigned.",
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
