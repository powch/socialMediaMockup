import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const FormInput = props => {
  return (
    <FormGroup>
      <Label>{props.label}</Label>
      <Input 
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleInputChange}
      />
    </FormGroup>
  )
}