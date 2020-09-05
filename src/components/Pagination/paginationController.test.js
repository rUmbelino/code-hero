import { NUMBER_OF_BUTTONS, getFirstButtonDescription, getButotns } from './paginationController';

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

  it('should get the correct array size', () => {
    const buttons = getButotns(1);

    expect(buttons.length).toBe(NUMBER_OF_BUTTONS);
  });
});