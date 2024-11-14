let foods = [
    'bokkeumbap',
    'ramen',
    'sushi',
    'pasta',
    'pork buns',
    'suvlaki',
    'dumplings',
    'pizza',
    'burgers'
];

export default function FoodList(){
    return (
        <section>
            <ul>
                {
                    foods.map(food => {
                        return <li>{food}</li>
                    })
                }   
            </ul>
        </section>
    )
}