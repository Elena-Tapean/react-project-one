import { render, screen } from '@testing-library/react';
import { Portfolio } from '../views/Portfolio';

describe('Test Portfolio', function () {
    test('first link to have correct title', function () {
        const { container } = render(<Portfolio a = "React Resume" />);
        const a = container.querySelector('a');
        expect(a).toHaveTextContent('React Resume');
    })
})