import {MealsArray} from '../../../mock/MealsArray'
import {AvailableContainer} from './styles'
import Card from '../../UI/Card'

export default function AvailableMeals(){
  const mealsList = MealsArray.map((meal)=>{
    <li key={meal.id}>{meal.name}</li>
  })

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