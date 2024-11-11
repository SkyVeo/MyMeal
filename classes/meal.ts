export class Meal {
    title: string;
    ingredients: string[];
    creationDate: string;
    prepTime?: number;
    cookingTime?: number;

    constructor(title: string) {
        this.title = title;
        this.ingredients = [];
        this.creationDate = new Date().toISOString();
    }

    get duration() {
        if (this.prepTime === undefined && this.cookingTime === undefined) {
            return undefined;
        }
        return (this.prepTime ?? 0) + (this.cookingTime ?? 0);
    }

    addIngredients(...ingredients: string[]) {
        this.ingredients.push(...ingredients);
        return this;
    }

    addCreationDate(creationDate: string) {
        this.creationDate = creationDate;
        return this;
    }

    addPrepTime(prepTime: number) {
        this.prepTime = prepTime;
        return this;
    }

    addCookingTime(cookingTime: number) {
        this.cookingTime = cookingTime;
        return this;
    }
}
