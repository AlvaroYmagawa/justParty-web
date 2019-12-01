import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { IoMdArrowDropdown } from 'react-icons/io';
import api from '~/services/api';
import { Container, Badge, Categories, Scroll, Category } from './styles';

export default function FilterByCategory({ name }) {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [visible, setVisible] = useState(false);
  const { registerField } = useField(name);

  const ref = useRef();

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('defaultCategories');

      setCategories(response.data);
    }

    if (ref.current) {
      registerField({
        name,
        ref: ref.current,
        path: 'dataset.category',
      });
    }

    loadCategories();
  }, []); // eslint-disable-line

  function handleVisibility() {
    setVisible(!visible);
  }

  function setCategory(category) {
    const input = document.getElementById(name);

    setVisible(false);
    input.value = category.name;
    setCategoryId(category.id);
  }

  return (
    <Container>
      <Badge visible={visible} onClick={handleVisibility}>
        <input
          type="text"
          ref={ref}
          disabled
          id={name}
          data-category={categoryId}
        />
        <IoMdArrowDropdown />
      </Badge>
      <Categories visible={visible}>
        <Scroll>
          {categories.map(category => (
            <Category>
              <button type="button" onClick={() => setCategory(category)}>
                {category.name}
              </button>
            </Category>
          ))}
        </Scroll>
      </Categories>
    </Container>
  );
}
