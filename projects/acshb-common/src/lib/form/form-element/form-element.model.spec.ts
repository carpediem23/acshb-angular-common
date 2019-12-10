import { FormElement } from './form-element.model';

describe('FormElement', () => {
  it('should create an instance', () => {
    expect(new FormElement({key: 'key', name: 'name', type: 'text'})).toBeTruthy();
  });
});
