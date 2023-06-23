import NewsCard from "./Card";

const ad = {
  title: "Apple has new Macbook Deal",
  description: "The 2018 version can be bought for $1800 instead of $3000 ",
};

export default function NewsPage() {
  return (
    <>
      <NewsCard
        title="Critical Dam Destroyed on Front Line in Southern Ukraine"
        description="President Volodymyr Zelensky blamed Russia for the attack, which came a day after U.S. and Russian officials said a Ukrainian counteroffensive had begun. Thousands of residents are evacuating under threat of flooding."
      />

      <NewsCard
        title="‘He Is Seriously Not Going to Be President.’ Our Columnists and Writers Discuss Mike Pence."
        description="Everyone agrees: He has great hair."
      />

      <NewsCard title={ad.title} description={ad.description} />
    </>
  );
}
