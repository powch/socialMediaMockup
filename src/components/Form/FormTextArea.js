import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const FormTextArea = props => {
  return (
    <FormGroup>
      <Label>{props.label}</Label>
      <Input
        type='textarea'
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleInputChange}
      />
    </FormGroup>
  )
}