import React from 'react';
import { FormGroup, FormText, Label, Input } from 'reactstrap';

export const FormInput = props => {
  return (
    <FormGroup>
      <Label>{props.label}</Label>
      <Input 
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleInputChange}
      />
      <FormText>{props.helpText}</FormText>
    </FormGroup>
  )
}