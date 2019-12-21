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

it('will never be negative', () => {
  const { getByTestId } = render(
    <HealthPoints max={20} current={13} onHpChange={()=>{}}/>
  );
  fireEvent.change(getByTestId('currentHp'), { target: { value: '-4' } })

  expect(getByTestId('currentHp').value).toBe('0')
})

it('will never be greater than max', () => {
  const { getByTestId } = render(
    <HealthPoints max={20} current={13} onHpChange={()=>{}}/>
  );
  fireEvent.change(getByTestId('currentHp'), { target: { value: '45' } })

  expect(getByTestId('currentHp').value).toBe('20')
})

it('updates if max hp changes', () => {
  const { getByTestId, rerender } = render(
    <HealthPoints max={20} current={13} onHpChange={()=>{}}/>
  );
	rerender(<HealthPoints max={25} current={13} onHpChange={()=>{}}/>)

  expect(getByTestId('maxHp').textContent).toBe('25')
})

it('updates current hp if max is low', () => {
  const { getByTestId, rerender } = render(
    <HealthPoints max={20} current={13} onHpChange={()=>{}}/>
  );
	rerender(<HealthPoints max={8} current={13} onHpChange={()=>{}}/>)

  expect(getByTestId('maxHp').textContent).toBe('8')
  expect(getByTestId('currentHp').value).toBe('8')
})
