import { render, screen } from '@testing-library/react';
import { Resume } from '../views/Resume';

describe('Test Resume page', function () {
    test('if h1 is loading', function () {
        render(<Resume />)
        const h1 = screen.getByText(/loading/i);
        expect(h1).toBeInTheDocument();
    });
});