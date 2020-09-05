export const NUMBER_OF_BUTTONS = 5;

const FIRST_PAGE_DESCRIPTION = '<<';
const BEFORE_DESCRIPTION = '<';

export const getFirstButtonDescription = (value) => {
  if (value - 2 <= 1) return '1';

  return String(value - 2);
};

export const getButotns = (currentPage) => {
  const firstValue = getFirstButtonDescription(currentPage);
  const buttons = [];

  const generatePreviousButtons = () => {
    let previousButtons = [];

    if (currentPage - 2 >= 1) {
      previousButtons = [FIRST_PAGE_DESCRIPTION, BEFORE_DESCRIPTION];
    } else if (currentPage - 1 >= 1) {
      previousButtons = [BEFORE_DESCRIPTION];
    }

    return previousButtons;
  };

  for (let i = firstValue; buttons.length < NUMBER_OF_BUTTONS; i++) {
    buttons.push(String(i));
  }

  return [...generatePreviousButtons(), ...buttons];
};

export const getPageValue = (description, currentPage) => {
  let page;

  switch (description) {
    case BEFORE_DESCRIPTION:
      page = currentPage - 1;
      break;
    case FIRST_PAGE_DESCRIPTION:
      page = 1;
      break;
    default:
      page = Number(description);
  }

  return page;
};
