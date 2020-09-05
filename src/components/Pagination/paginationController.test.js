import {
  getButotns,
  getPageValue,
  getResponsiveStyle,
  getFirstButtonDescription,
} from './paginationController';

describe('getFirstButtonDescription', () => {
  it('should get 1 as the fisrt number', () => {
    const zero = getFirstButtonDescription(0);
    const one = getFirstButtonDescription(1);
    const two = getFirstButtonDescription(2);
    expect(zero).toBe('1');
    expect(one).toBe('1');
    expect(two).toBe('1');
  });

  it('should get correct value as first number', () => {
    const five = getFirstButtonDescription(7);
    const ten = getFirstButtonDescription(12);
    expect(five).toBe('5');
    expect(ten).toBe('10');
  });

  it('should get the correct array size for maximum buttons on pagination', () => {
    const total = 200;
    const currentPage = 5;
    const buttons = getButotns({ currentPage, total });
    expect(buttons.length).toBe(9);
  });

  it('should get correct pageValue', () => {
    const currentPage = 5;
    const RANDOM_PAGE = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    expect(getPageValue({ description: RANDOM_PAGE, currentPage })).toBe(
      RANDOM_PAGE
    );
    expect(getPageValue({ description: '<', currentPage })).toBe(
      currentPage - 1
    );
    expect(getPageValue({ description: '<<', currentPage })).toBe(1);
  });

  it('should get the correct responsive style', () => {
    const empty = getResponsiveStyle({
      pageNumber: Number('d'),
    });

    const numberButton = getResponsiveStyle({
      pageNumber: 5,
    });

    const visibleNumberButton = getResponsiveStyle({
      pageNumber: 5,
      currentPage: 5,
    });

    expect(empty).toBe('');
    expect(numberButton).toBe('number-button');
    expect(visibleNumberButton).toBe('number-button visible');
  });
});
