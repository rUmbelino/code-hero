export const NUMBER_OF_BUTTONS = 5;

export const getFirstButtonDescription = (value) => {
  if (value - 2 <= 1) return '1';

  return String(value - 2);
};

export const getButotns = (currentPage) => {
  const firstValue = getFirstButtonDescription(currentPage);
  const buttons = [];

  for (let i = firstValue; buttons.length < NUMBER_OF_BUTTONS; i++) {
    buttons.push(String(i));
  }

  return buttons;
};
