import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render Search Component', () => {
    render(<App />);
    screen.debug();
    const input = screen.getByTestId('seach-component');
    fireEvent.change(input, {
      target: { value: 'habib' },
    });
    screen.debug();
  });
});
