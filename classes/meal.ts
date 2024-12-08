import { images } from "@/constants/images";

export class Meal {
    title: string;
    ingredients: string[];
    creationDate: Date;
    tags: string[];
    prepTime?: number;
    cookingTime?: number;
    image?: any;
    isFavorite: boolean;

    constructor(title: string) {
        this.title = title;
        this.ingredients = [];
        this.creationDate = new Date();
        this.tags = [];
        this.isFavorite = false;
        this.image = images.default;
    }

    get duration() {
        if (this.prepTime === undefined && this.cookingTime === undefined) {
            return undefined;
        }
        return (this.prepTime ?? 0) + (this.cookingTime ?? 0);
    }

    get creationDay() {
        const day = this.creationDate.toLocaleDateString(undefined, { day: "numeric" });
        return day.length === 1 ? `0${day}` : day;
    }

    get creationMonth() {
        return this.creationDate.toLocaleDateString(undefined, { month: "short" });
    }

    get creationYear() {
        return this.creationDate.getFullYear;
    }

    addIngredients(...ingredients: string[]) {
        this.ingredients.push(...ingredients);
        return this;
    }

    addCreationDate(creationDate: string) {
        this.creationDate = new Date(creationDate);
        return this;
    }

    addTags(...tags: string[]) {
        this.tags.push(...tags);
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

    addImage(image: any) {
        this.image = image;
        return this;
    }

    toggleFavorite() {
        this.isFavorite = !this.isFavorite;
    }

    durationToString() {
        return this.duration ? (this.duration % 60 === 0 ? `${this.duration / 60} h` : `${this.duration} min`) : "";
    }

    ingredientsToString(searchWords?: string[]) {
        if (!searchWords) {
            return this.ingredients.join(", ");
        }

        const matches = this.ingredients.filter((ingredient) =>
            searchWords.some((word) => ingredient.toLowerCase().replace(/\s+/g, "").includes(word.toLowerCase()))
        );

        if (matches.length === 0) {
            return "";
        }

        const unmatched = this.ingredients.filter((ingredient) => !matches.includes(ingredient));
        while (matches.length < 3 && unmatched.length > 0) {
            matches.push(unmatched.shift()!);
        }

        return `${matches.join(", ")}${unmatched.length > 0 ? `... +${unmatched.length}` : ""}`;
    }
}
