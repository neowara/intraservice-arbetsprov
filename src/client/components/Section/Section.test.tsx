import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section', () => {
  it('renders title and children', () => {
    render(
      <Section title="My Section">
        <div>Section content</div>
      </Section>
    );
    expect(screen.getByText('My Section')).toBeInTheDocument();
    expect(screen.getByText('Section content')).toBeInTheDocument();
  });
});
