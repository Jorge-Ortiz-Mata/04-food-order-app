export type MealType = {
  readonly id: number,
  name: string,
  description: string,
  readonly price: number,
  amount: number,
}

export const meals: MealType[] = [
  { id: 1, name: 'Pizza', description: 'Lorem Ipsum is simply dummy text', price: 3.99, amount: 0 },
  { id: 2, name: 'Hamburger', description: 'Printing and typesetting industry', price: 2.29, amount: 0 },
  { id: 3, name: 'Hot-Dog', description: 'Printing and typesetting industry', price: 1.49, amount: 0 },
  { id: 4, name: 'Rice', description: 'Lorem Ipsum is simply dummy text', price: 2.99, amount: 0 },
  { id: 5, name: 'Tacos', description: 'Printing and typesetting industry', price: 1.19, amount: 0 },
  { id: 6, name: 'Chicken', description: 'Lorem Ipsum is simply dummy text', price: 2.99, amount: 0 }
]
