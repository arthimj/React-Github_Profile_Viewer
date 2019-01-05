import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/App';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a search bar', () => {
    expect(component.find('.search-container')).to.exist;
  });

  it('shows a profile area', () => {
    expect(component.find('.profile-container')).to.exist;
  });

  it('shows a credits area', () => {
    expect(component.find('.credits-container')).to.exist;
  });
});
