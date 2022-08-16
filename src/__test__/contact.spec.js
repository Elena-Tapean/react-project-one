import { render, screen } from '@testing-library/react';
import { Contact } from '../views/Contact';

describe('Test Contact page', function () {
    test('if there is a heading', function () {
        render(<Contact />);
        const linkElement = screen.getByText(/chat/i);
        expect(linkElement).toBeInTheDocument();
    })
})