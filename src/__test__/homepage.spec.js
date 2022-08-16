import { render, screen } from '@testing-library/react';
import { Home } from "../views/Home"

describe('Homepage', function () {
    test('welcome heading to be correct', function () {
        render(<Home />)
        const linkElement = screen.getByText(/welcome/i);
        expect(linkElement).toBeInTheDocument();
    });
});
