import {MealsArray} from '../../../mock/MealsArray'
import {AvailableContainer} from './styles'
import Card from '../../UI/Card'
import MealItem from '../MealItem'

export default function AvailableMeals(){
  const mealsList = MealsArray.map((meal)=>(
    <MealItem 
      id={meal.id}
      key={meal.id}
      name={meal.name} 
      description={meal.description}
      price={meal.price}
      />
  ))

  return(
    <AvailableContainer>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </AvailableContainer>
  );
};