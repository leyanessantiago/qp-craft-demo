import { describe, test, expect, afterEach } from "vitest"
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'
import Parks from '../Parks';
import dataset from '../../../data/dataset1.json';

describe('Parks Component', () => {
  afterEach(() => {
    cleanup();
  });

  const parksWithImage = dataset.parks.filter((park) => !!park.image);

  test('renders the correct number of parks with images', () => {
    render(<Parks />);
    const cardImages = screen.getAllByRole('img');
    expect(cardImages.length).toBe(parksWithImage.length);
  });

  test('applies the featured class to the featured card', () => {
    const featuredIndex = '1';
    render(<Parks featuredCard={featuredIndex} />);
    const featuredCard = screen.getByText(parksWithImage[parseInt(featuredIndex, 10)].title).closest('.col-md-3');
    expect(featuredCard).toHaveClass('featured_card');
  });

  test('does not apply the featured class to other cards', () => {
    const featuredIndex = '0';
    render(<Parks featuredCard={featuredIndex} />);
    const cards = screen.getAllByTestId('park-card-container');
    parksWithImage.forEach((_, index) => {
      if (index.toString() !== featuredIndex) {
        expect(cards[index]).not.toHaveClass('featured_card');
      }
    });
  });

  test('renders the category theme correctly', () => {
    render(<Parks />);
    parksWithImage.forEach((park) => {
      const categoryTheme = park.category.toLowerCase();
      const banners = screen.getAllByText(park.category);
      banners.forEach((banner) => {
        expect(banner).toHaveClass(`card__banner__${categoryTheme}`);
      });
    });
  });

  test('renders the link button when link is present', () => {
    const parksWithLink = parksWithImage.filter((park) => !!park.link);
    render(<Parks />);
    const linkButtons = screen.getAllByRole('link');
    parksWithLink.forEach((park, index) => {
      expect(linkButtons[index]).toHaveAttribute('href', park.link);
    });
  });
});

