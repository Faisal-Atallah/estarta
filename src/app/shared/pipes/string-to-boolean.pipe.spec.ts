import { StringToBooleanPipe } from './string-to-boolean.pipe';

describe('StringToBooleanPipe', () => {
  it('create an instance', () => {
    const pipe = new StringToBooleanPipe();
    expect(pipe).toBeTruthy();
  });
});
