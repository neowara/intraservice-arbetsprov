import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
  it('renders all options', () => {
    render(
      <Select options={["A", "B"]} selected={[]} onChange={() => {}} />
    );
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('calls onChange when an option is clicked', () => {
    const onChange = jest.fn();
    render(
      <Select options={["A"]} selected={[]} onChange={onChange} />
    );
    fireEvent.click(screen.getByText('A'));
    expect(onChange).toHaveBeenCalledWith('A');
  });
});
