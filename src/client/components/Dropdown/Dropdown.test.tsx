import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders label and children', () => {
    render(
      <Dropdown open={true} setOpen={() => {}} dropdownRef={React.createRef()} label="Dropdown label">
        <div>Dropdown content</div>
      </Dropdown>
    );
    expect(screen.getByText('Dropdown label')).toBeInTheDocument();
    expect(screen.getByText('Dropdown content')).toBeInTheDocument();
  });

  it('calls setOpen when button is clicked', () => {
    const setOpen = jest.fn();
    render(
      <Dropdown open={false} setOpen={setOpen} dropdownRef={React.createRef()} label="Dropdown label">
        <div>Dropdown content</div>
      </Dropdown>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(setOpen).toHaveBeenCalledWith(true);
  });
});
