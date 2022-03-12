
import {AvailableContainer} from './styles'
import Card from '../../UI/Card'
import MealItem from '../MealItem'
import MealsService from '../../../services/MealsService';
import { useCallback, useEffect, useState } from 'react';

export default function AvailableMeals(){
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const loadMeals = useCallback(async ()=>{
    try{
      setIsLoading(true);
      const loadedMeals = await MealsService.listMeals()
      setMeals(loadedMeals);
    } catch(err){
      setErrorMessage('Something went wrong');
    }    
    finally {
      setIsLoading(false);
    }
  },[]);

  useEffect(()=>{
    loadMeals()
  }, [loadMeals])

  return(
    <AvailableContainer>
      <Card>
        <ul>
          {errorMessage && (<section className="MealsError"><p>{errorMessage}</p></section>)}
          {!errorMessage && isLoading && (
            <section className="MealsLoading">
              <p>Loading...</p>
            </section>
          )}
          {!errorMessage && !isLoading && meals.length > 0 && meals.map((meal)=>(
            <MealItem 
              id={meal.id}
              key={meal.id}
              name={meal.name} 
              description={meal.description}
              price={meal.price}
              />
          ))}

        </ul>
      </Card>
    </AvailableContainer>
  );
};