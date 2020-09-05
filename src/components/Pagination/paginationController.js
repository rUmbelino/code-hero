import { ITEMS_PER_PAGE } from '../StateManager';

import {
  NUMBER_OF_BUTTONS,
  BEFORE_DESCRIPTION,
  FIRST_PAGE_DESCRIPTION,
  NEXT_DESCRIPTION,
  LAST_PAGE_DESCRIPTION,
} from './constants';

export const getFirstButtonDescription = (value) => {
  if (value - 2 <= 1) return '1';

  return String(value - 2);
};

export const getButotns = ({ total, currentPage }) => {
  if (!total) return [];

  const firstValue = getFirstButtonDescription(currentPage);
  const buttons = [];

  const MAX_PAGE_VALUE = Math.ceil(total / ITEMS_PER_PAGE);
  for (let i = firstValue; buttons.length < NUMBER_OF_BUTTONS; i++) {
    if (i > MAX_PAGE_VALUE) break;

    buttons.push(String(i));
  }

  const generatePreviousButtons = () => {
    let previousButtons = [];

    if (currentPage - 2 >= 1) {
      previousButtons = [FIRST_PAGE_DESCRIPTION, BEFORE_DESCRIPTION];
    } else if (currentPage - 1 >= 1) {
      previousButtons = [BEFORE_DESCRIPTION];
    }

    return previousButtons;
  };

  const generateNextButtons = () => {
    let nextButtons = [];

    if (currentPage + 2 <= MAX_PAGE_VALUE) {
      nextButtons = [NEXT_DESCRIPTION, LAST_PAGE_DESCRIPTION];
    } else if (currentPage < MAX_PAGE_VALUE) {
      nextButtons = [NEXT_DESCRIPTION];
    }

    return nextButtons;
  };

  return [...generatePreviousButtons(), ...buttons, ...generateNextButtons()];
};

export const getPageValue = ({ total, description, currentPage }) => {
  let page;

  switch (description) {
    case BEFORE_DESCRIPTION:
      page = currentPage - 1;
      break;
    case FIRST_PAGE_DESCRIPTION:
      page = 1;
      break;
    case NEXT_DESCRIPTION:
      page = currentPage + 1;
      break;
    case LAST_PAGE_DESCRIPTION:
      page = Math.ceil(total / ITEMS_PER_PAGE);
      break;
    default:
      page = Number(description);
  }

  return page;
};
