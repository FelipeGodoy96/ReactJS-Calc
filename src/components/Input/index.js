import { InputContainer } from './styles'
import { LabelComponent } from '../Label/styles'

export default function Input ({value, label}) {
    return (
        <>
        <InputContainer>
        <input id="input" disabled value={value}/>
        <LabelComponent for="input">{label}</LabelComponent>
        </InputContainer>
        </>
    )
}