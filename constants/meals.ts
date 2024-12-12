import { Meal } from "@/classes/meal";
import { images } from "./images";

export const meals: Meal[] = [
    new Meal("Pizza prosciutto")
      .addIngredients("Flour", "Tomato", "Mozzarella", "Ham")
      .addCreationDate("2021-01-01")
      .addTags("Pizza", "Italian")
      .addCookingTime(15)
      .addImage(images.pizza),
    new Meal("Spaghetti carbonara")
      .addIngredients("Spaghetti", "Egg", "Guanciale", "Pecorino")
      .addCreationDate("2021-01-02")
      .addTags("Pasta", "Italian")
      .addPrepTime(10)
      .addCookingTime(10),
    new Meal("Tiramisù")
      .addIngredients("Egg", "Sugar", "Mascarpone", "Coffee")
      .addCreationDate("2021-01-03")
      .addTags("Dessert", "Italian")
      .addPrepTime(30)
      .addCookingTime(0),
    new Meal("Lasagna")
      .addIngredients("Flour", "Tomato", "Mozzarella", "Ragù")
      .addCreationDate("2021-01-04")
      .addTags("Pasta", "Italian", "Garfield")
      .addPrepTime(30)
      .addCookingTime(30),
    new Meal("Cacio e pepe")
      .addIngredients("Spaghetti", "Pecorino", "Black pepper")
      .addCreationDate("2021-01-05")
      .addTags("Pasta", "Italian")
      .addPrepTime(10)
      .addCookingTime(10),
    new Meal("Fries")
      .addIngredients("Potatoes", "Salt", "Oil")
      .addCreationDate("2021-01-06")
      .addTags("Belgian")
      .addPrepTime(10)
      .addCookingTime(10),
    new Meal("Hamburger")
      .addIngredients("Bread", "Meat", "Lettuce", "Tomato")
      .addCreationDate("2021-01-07")
      .addTags("Cheat meal")
      .addPrepTime(10)
      .addCookingTime(10)
      .addImage(images.hamburger),
    new Meal("Hot dog")
      .addIngredients("Bread", "Sausage", "Ketchup", "Mustard")
      .addCreationDate("2021-01-08")
      .addPrepTime(10)
      .addCookingTime(10),
    new Meal("Caesar salad")
      .addIngredients("Lettuce", "Chicken", "Bread", "Parmesan")
      .addCreationDate("2021-01-09")
      .addTags("Healthy")
      .addPrepTime(10)
      .addCookingTime(10),
    new Meal("Caprese")
      .addIngredients("Tomato", "Mozzarella", "Basil", "Oil")
      .addCreationDate("2021-01-10")
      .addTags("Healthy")
      .addPrepTime(10)
      .addCookingTime(0),
    new Meal("Pasta al pesto")
      .addIngredients("Pasta", "Basil", "Pine nuts", "Parmesan")
      .addCreationDate("2021-01-11")
      .addTags("Pasta", "Italian"),
    new Meal("Pasta alla norma")
      .addIngredients("Pasta", "Tomato", "Eggplant", "Ricotta")
      .addCreationDate("2021-01-12")
      .addTags("Pasta", "Italian")
      .addPrepTime(10)
      .addCookingTime(10),
    new Meal("Pasta alla puttanesca")
      .addIngredients("Pasta", "Tomato", "Olives", "Capers")
      .addCreationDate("2021-01-13")
      .addTags("Pasta", "Italian")
      .addPrepTime(10)
      .addCookingTime(10),
    new Meal("Zuppa di ceci")
      .addIngredients("Chickpeas", "Tomato", "Bread", "Oil")
      .addCreationDate("2021-01-14")
      .addTags("Soup", "Italian"),
    new Meal("* \\ + \\d \\s")
      .addIngredients("* \\ + \\d", "Tomato", "Bread", "Oil")
      .addCreationDate("2021-01-15")
      .addImage(images.empty),
    new Meal("All'Amatriciana")
      .addIngredients("Pasta", "Tomato", "Guanciale", "Pecorino")
      .addCreationDate("2021-01-16")
      .addTags("Pasta", "Italian")
      .addCookingTime(10),
    new Meal("Pizza margherita")
      .addIngredients("Flour", "Tomato", "Mozzarella", "Basil")
      .addCreationDate("2021-01-17")
      .addTags("Pizza", "Italian", "cheat")
      .addPrepTime(30)
      .addCookingTime(15)
      .addImage(images.pizza),
    new Meal("Pizza quattro stagioni")
      .addIngredients("Flour", "Tomato", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Olives")
      .addCreationDate("2021-01-18")
      .addTags("Pizza", "Italian", "meal")
      .addImage(images.pizza),
    new Meal("Burrito")
      .addIngredients("Tortilla", "Rice", "Beans", "Meat", "Salsa")
      .addCreationDate("2021-01-19")
      .addTags("Mexican", "meal")
      .addPrepTime(90),
    new Meal("Tacos")
      .addIngredients("Tortilla", "Meat", "Salsa", "Guacamole")
      .addTags("Mexican", "meal")
      .addPrepTime(120),
    new Meal("Ham sandwich").addIngredients("Bread", "Ham").addImage(images.sandwich),
    new Meal("Tomato soup")
      .addIngredients(
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato",
        "Tomato"
      )
      .addCookingTime(60000),
    new Meal("Pâtes bolognaise")
      .addIngredients("Pâtes", "Tomate", "Viande hachée", "Oignon", "Ail")
      .addCreationDate("2021-01-20")
      .addTags("Pâtes", "Italien")
      .addCookingTime(10)
      .addImage(images.bolognese),
    new Meal(
      "Pâté of roasted indigenous legumes, paired with a compote of seasonal berries, served on hearty sprouted wheat bread"
    )
      .addIngredients(
        "Pâté",
        "Roasted",
        "Indigenous",
        "Legumes",
        "Compote",
        "Seasonal",
        "Berries",
        "Sprouted",
        "Wheat",
        "Bread"
      )
      .addCreationDate("2021-01-21")
      .addTags(
        "Pâté",
        "Roasted",
        "Indigenous",
        "Legumes",
        "Compote",
        "Seasonal",
        "Berries",
        "Sprouted",
        "Wheat",
        "Bread"
      ),
  ];