import FoodCard from "./FoodCard";

let foods = [
    'Bokkeumbap',
    'Ramen',
    'Sushi',
    'Pasta',
    'Pork Buns',
    'Lasagna',
    'Pizza',
    'Dumplings',
    'Butter Chicken',
    'Laksa'
];

export default function FoodList(){
    return (
        <section>
                {
                    foods.map((food, index) => {
                        return <p><FoodCard key={index} foodName={food}/></p>
                    })
                }
        </section>
    )
}