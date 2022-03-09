import Input from '../../../UI/Input';
import {Form} from './styles'

export default function MealItemForm(props){

  return(
    <Form>
      <Input 
      label="Amount" 
      input={{
        id: 'amount' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1 '
      }}
      />
      <button>+ Add</button>
    </Form>
  );
};