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
  bookName: string;
  bookDetail: string;
  type: "diet" | "action";
  description: string;
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
    img: "https://assets.literal.club/cover/5/ckr1vuwkt1qvj01crp2q5typb.jpg",
    bookName: "What I Talk About When I Talk About Running",
    type: "action",
    bookDetail: "https://literal.club/book/haruki-murakamiwhat-i-talk-about-when-i-talk-about-running-bjdfi",
    description: "A memoir from Haruki Murakami"
  },
  {
    img: "https://assets.literal.club/2/ckuk8y8n9134957457abinlg5en.jpg",
    bookName: "Starting from Scratch",
    type: "action",
    bookDetail: "https://literal.club/book/jay-northcote-starting-from-scratch-aqyc9",
    description: "this is a description, you can take a look at the book"
  },
  {
    img: "https://assets.literal.club/2/cktrnrk7q1209835yz7axkswyf0a.jpg",
    bookName: "Bodyweight Strength Training Anatomy",
    type: "action",
    bookDetail: "https://literal.club/book/bret-contreras-bodyweight-strength-training-anatomy-fp344",
    description: "this is a description, you can take a look at the book"
  },
  {
    img: "https://assets.literal.club/2/cks8yg4k910872671k98r2amzctf.jpg",
    bookName: "You Are Your Own Gym",
    type: "action",
    bookDetail: "https://literal.club/book/you-are-your-own-gym-8g382",
    description: "this is a description, you can take a look at the book"
  },
  {
    img: "https://assets.literal.club/4/ckyq5okua3941600jr4cfyy353e.jpg",
    bookName: "The Anatomy of Stretching",
    type: "action",
    bookDetail: "https://literal.club/book/brad-walker-the-anatomy-of-stretching-7vjqy",
    description: "Your Illustrated Guide to Flexibility and Injury Rehabilitation"
  },
  {
    img: "https://assets.literal.club/2/cl3iri4ma3539210hirqa8nzkp8.jpg",
    bookName: "Strength training anatomy",
    type: "action",
    bookDetail: "https://literal.club/book/frederic-delavier-strength-training-anatomy-8lk8w",
    description: "this is a description, you can take a look at the book"
  },
  {
    img: "https://assets.literal.club/2/cksyw1wkp1534062k7ompledhxm.jpg",
    bookName: "The New Encyclopedia of Modern Bodybuilding",
    type: "action",
    bookDetail: "https://literal.club/book/arnold-schwarzenegger-the-new-encyclopedia-of-modern-bodybuilding-ae0j6",
    description: "The Bible of Bodybuilding, Fully Updated and Revised"
  },
  {
    img: "https://assets.literal.club/2/cknh6ffc7244641had027g39un.jpg",
    bookName: "Becoming a Supple Leopard",
    type: "action",
    bookDetail: "https://literal.club/book/becoming-a-supple-leopard-wy389",
    description: "The Ultimate Guide to Resolving Pain, Preventing Injury, and Optimizing Athletic Performance"
  },
  {
    img: "https://assets.literal.club/2/ckrlwn8cr890819183smxr8wpbu.jpg",
    bookName: "The Complete Guide to Sports Nutrition",
    type: "diet",
    bookDetail: "https://literal.club/book/anita-bean-the-complete-guide-to-sports-nutrition-pfiq9",
    description: "The definitive practical handbook to sports nutrition, now in its sixth edition, fully updated and revised"
  },
  {
    img: "https://assets.literal.club/cover/4/cl70cfbtg3948870jgiahraqpm3.jpg",
    bookName: "The Complete Guide to Sports Nutrition",
    type: "diet",
    bookDetail: "https://literal.club/book/weston-andrew-price-nutrition-and-physical-degeneration-z3p27",
    description: "A great Nutrtite introduction."
  }
]
