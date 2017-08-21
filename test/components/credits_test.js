import { renderComponent, expect } from '../test_helper';
import Credits from '../../src/components/credits';

describe('Credits', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Credits);
  });

  it('have the correct class', () => {
    expect(component).to.have.class('credits-container');
  });

  it('show some text', () => {
    expect(component.find('span')).to.exist;
  });

});