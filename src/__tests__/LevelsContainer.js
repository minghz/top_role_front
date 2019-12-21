import React from 'react';
import { render, act, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import LevelsContainer from '../components/LevelsContainer';

it('renders with initial states', () => {
  const { getByTestId } = render(
    <LevelsContainer value={6} proficiencyBonus={3} onLevelChange={()=>{}}/>
  );

  expect(getByTestId('levelValue').value).toBe('6')
  expect(getByTestId('profBonus').textContent).toBe('Proficiency Bonus: 3')
})

it('changes current level', () => {
  const { getByTestId } = render(
    <LevelsContainer value={6} proficiencyBonus={3} onLevelChange={()=>{}}/>
  );
  fireEvent.change(getByTestId('levelValue'), { target: { value: '16' } })

  expect(getByTestId('levelValue').value).toBe('16')
  expect(getByTestId('profBonus').textContent).toBe('Proficiency Bonus: 3')
})

it('will never be less than 1', () => {
   const { getByTestId } = render(
    <LevelsContainer value={6} proficiencyBonus={3} onLevelChange={()=>{}}/>
  );
  fireEvent.change(getByTestId('levelValue'), { target: { value: '0' } })

  expect(getByTestId('levelValue').value).toBe('1')
})
