import React from 'react';
import { render, act, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import Attribute from '../components/Attribute';

it('renders with initial states', () => {
  const { getByTestId } = render(
    <Attribute
      type="str"
      base={10}
      racial={4}
      modifier={2}
      onChange={()=>{}} />
  );

  expect(getByTestId('attributeName').textContent).toBe('Strength')
  expect(getByTestId('attributeBase').value).toBe('10')
  expect(getByTestId('attributeRacial').textContent).toBe('racial: 4')
  expect(getByTestId('attributeTotal').textContent).toBe('14')
  expect(getByTestId('attributeMod').textContent).toBe('2')
})

it('changing base attr', () => {
  const { getByTestId } =
    render(
      <Attribute
        type="str"
        base={10}
        racial={4}
        modifier={2}
        onChange={()=>{}} />
    );
  fireEvent.change(getByTestId('attributeBase'), { target: { value: '14' } })

  expect(getByTestId('attributeTotal').textContent).toBe('18')
  expect(getByTestId('attributeMod').textContent).toBe('4')
})

it('changing racial attr', () => {
  const { getByTestId, rerender } =
    render(
      <Attribute type="str" base={10} racial={4} modifier={2} onChange={()=>{}} />
    );
  rerender(<Attribute type="str" base={10} racial={0} modifier={2} onChange={()=>{}} />)

  expect(getByTestId('attributeTotal').textContent).toBe('10')
  expect(getByTestId('attributeMod').textContent).toBe('0')
})

it('cannot be less than 1', () => {
  const { getByTestId } =
    render(
      <Attribute type="str" base={10} racial={4} modifier={2} onChange={()=>{}} />
    );
  fireEvent.change(getByTestId('attributeBase'), { target: { value: '0' } })

  expect(getByTestId('attributeBase').value).toBe('1')
})

it('sets base to 1 if empty', () => {
  const { getByTestId } =
    render(
      <Attribute type="str" base={10} racial={4} modifier={2} onChange={()=>{}} />
    );
  fireEvent.change(getByTestId('attributeBase'), { target: { value: '' } })

  expect(getByTestId('attributeBase').value).toBe('1')
  expect(getByTestId('attributeTotal').textContent).toBe('5')
  expect(getByTestId('attributeMod').textContent).toBe('-3')
})

it('strips leading 0s if any', () => {
  const { getByTestId } =
    render(
      <Attribute type="str" base={10} racial={4} modifier={2} onChange={()=>{}} />
    );
  fireEvent.change(getByTestId('attributeBase'), { target: { value: '05' } })

  expect(getByTestId('attributeBase').value).toBe('5')
})
