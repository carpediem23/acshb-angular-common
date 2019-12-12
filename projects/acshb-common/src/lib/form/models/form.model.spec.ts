import { FormElement } from './form.model';

describe('FormElement', () => {
  it('should create an instance', () => {
    expect(new FormElement({key: 'key', name: 'name', type: 'text'})).toBeTruthy();
  });
});
