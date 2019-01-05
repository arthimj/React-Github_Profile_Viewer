import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/components/SearchBar';

describe('SearchBar', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('search-container');

  });

  it('has an input area for text', () => {
    expect(component.find('input')).to.exist;
  });

  describe('entering text', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'JamesIves');
    });

    it('should show that text in the input', () => {
      expect(component.find('input')).to.have.value('JamesIves');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('input')).to.have.value('');
    });
  });
});