import { elements } from './base';

export const getInput = () => elements.filterInput;

export const clearInput = () => (elements.filterInput.value = '');
