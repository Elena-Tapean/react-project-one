import { render, screen } from '@testing-library/react';
import { text } from 'express';
import { RatingDots } from './components/RatingDots';
import { RatingLevel } from './components/RatingLevel';
import { TextComponent } from './components/TextComponent';
import { Contact } from './views/Contact';

test('renders choose the right', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/choose the right/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Test TextComponent with props', function () {
  test('title and index to be correct', () => {
    const { container } = render(<TextComponent title='demo' index='0' />);
    const h3 = container.querySelector('h3');
    const p = container.querySelector('p');
    const div = container.querySelector('div');
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent('demo');
    expect(p).not.toBeInTheDocument();
    expect(div).toHaveAttribute('index');
    expect(div).toHaveAttribute('index', '0');
  });

  test('check details props', function () {
    const { container } = render(<TextComponent details='<i>some details</i>' />)
    const p = container.querySelector('p');
    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent('some details');
    expect(p).toContainHTML('<i>some details</i>');
  });

  text('check to contain children', function () {
    const { container } = render(<TextComponent><p>orice va trece prin minte</p></TextComponent>)
    const div = container.querySelector('div');
    expect(div).toContainHTML('<p>orice va trece prin minte</p>');
  });
});

describe('Test RatingLevel', function () {
  test('name prop', function () {
    const { container } = render(<RatingLevel name='UFO' />)
    const span = container.querySelector('span');
    expect(span).toHaveTextContent('UFO');
  });
});

describe('Test RatingDots', function () {
  test('rate prop', function () {
    const rate = 8;
    const { container } = render(<RatingDots rate={rate} />)
    const span = container.querySelectorAll('span');
    expect(span).toHaveLength(10);
    span.forEach((elm, index) => {
      index < rate && (expect(elm).toHaveAttribute('class', 'rated'))
  });
    span.forEach((elm, index) => {
      index + 1 > rate && (expect(elm).not.toHaveAttribute('class', 'rated'))
  });
})
})
