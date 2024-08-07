export interface Diet {
  title: string;
  img: string;
  descriptions: string[];
  ingredients: string;
}

export interface FitnessAction {
  title: string;
  img: string;
  descriptions: string[];
}
export interface Book {
  img: string;
  projectName: string;
  description: string
}

export const testDietList: Diet[] = [
  {
    title: "Beef and Potato",
    img: "beef-potato",
    descriptions: [
      '1.Cook the beef: Season the cooked beef with salt and pepper. Steam the potatoes, then lightly pan-fry them.',
      '2.Prepare the ingredients: Slice the crab sticks and cucumber.',
      '3.Plating: Arrange everything on a plate. Drizzle a bit of salad dressing over the cucumber. Done!'
    ],
    ingredients: "Beef, potatoes, cucumber, crab sticks"
  },
  {
    title: "Shrimp Tofu",
    img: "shrimp-tofu",
    descriptions: [
      '1.Cook the beef: Season the cooked beef with salt and pepper. Steam the potatoes, then lightly pan-fry them.',
      '2.Prepare the ingredients: Slice the crab sticks and cucumber.',
      '3.Plating: Arrange everything on a plate. Drizzle a bit of salad dressing over the cucumber. Done!'
    ],
    ingredients: "Beef, potatoes, cucumber, crab sticks"
  },
  {
    title: "Beef Lettuce",
    img: "beef-lettuce",
    descriptions: [
      '1.Cook the beef: Season the cooked beef with salt and pepper. Steam the potatoes, then lightly pan-fry them.',
      '2.Prepare the ingredients: Slice the crab sticks and cucumber.',
      '3.Plating: Arrange everything on a plate. Drizzle a bit of salad dressing over the cucumber. Done!'
    ],
    ingredients: "Beef, potatoes, cucumber, crab sticks"
  },
  {
    title: "Beef and Potato",
    img: "beef-potato",
    descriptions: [
      '1.Cook the beef: Season the cooked beef with salt and pepper. Steam the potatoes, then lightly pan-fry them.',
      '2.Prepare the ingredients: Slice the crab sticks and cucumber.',
      '3.Plating: Arrange everything on a plate. Drizzle a bit of salad dressing over the cucumber. Done!'
    ],
    ingredients: "Beef, potatoes, cucumber, crab sticks"
  },
]

export const testFitnessActions: FitnessAction[] = [
  {
    title: "shouler1",
    img: "shoulder1",
    descriptions: ["This is a fitness action for your shoulders."]
  },
  {
    title: "shouler2",
    img: "shoulder2",
    descriptions: ["This is a fitness action for your shoulders."]
  },
  {
    title: "biceps1",
    img: "biceps1",
    descriptions: ["This is a fitness action for your shoulders."]
  },
  {
    title: "chest1",
    img: "chest1",
    descriptions: ["This is a fitness action for your shoulders."]
  },
  {
    title: "chest2",
    img: "chest2",
    descriptions: ["This is a fitness action for your shoulders."]
  }
]

export const testBookList: Book[] = [
  {
    img: "https://assets.literal.club/2/cktrnrk7q1209835yz7axkswyf0a.jpg",
    projectName: "Bodyweight Strength Training Anatomy",
    description: "this is a description, you can take a look at the book"
  },
]
