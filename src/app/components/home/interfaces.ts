export interface FoodMenu{
    colorGroup: string;
    description: string;
    flavorName: string;
    glutenFree: boolean;
    groupName: string[];
    imageUrl: string;
    ingredients: string[];
    // Optionally add fields if they exist in other entries:
    kosher?: boolean;
    seasonal?: boolean;
    sugarFree?: boolean;
  }