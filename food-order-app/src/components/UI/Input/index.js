import {InputContainer} from './styles'

export default function Input(props){
  return (
    <InputContainer>
      <label hltmFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </InputContainer>
  )
}