import React from 'react';
import renderer from 'react-test-renderer';

import ContactList from '../ContactsList';

describe('ContactList component', () => {
  it('with default parameters', () => {
    // given
    const contactList = <ContactList />;

    // when
    const tree = renderer.create(contactList).toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
