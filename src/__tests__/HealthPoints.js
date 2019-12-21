import React from 'react';
import { render, act, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import HealthPoints from '../components/HealthPoints';

it('renders with initial states', () => {
  const { getByTestId } = render(
    <HealthPoints max={20} current={13}
                  onHpChange={()=>{}}/>
  );

  expect(getByTestId('currentHp').value).toBe('13')
  expect(getByTestId('maxHp').textContent).toBe('20')
})

it('changes current hp', () => {
  const { getByTestId } = render(
    <HealthPoints max={20} current={13}
                  onHpChange={()=>{}}/>
  );
  fireEvent.change(getByTestId('currentHp'), { target: { value: '16' } })

  expect(getByTestId('currentHp').value).toBe('16')
})
