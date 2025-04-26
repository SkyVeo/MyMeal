import { meals } from "@/constants/meals";

export async function getMeals() {
    // Simulate a network request with a delay
    // await new Promise((resolve) => setTimeout(resolve, 100000));
    return meals;
}
