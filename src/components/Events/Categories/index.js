import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { Container, CategoryList, Category } from './styles';

export default function Categories({ eventId }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get(`/categories/${eventId}`);

      setCategories(response.data);
      setLoading(false);
    }

    loadCategories();
  }, [eventId]);

  return (
    !loading && (
      <Container>
        <CategoryList>
          {categories.map(category => (
            <Category key={category.id} color={category.DefaultCategory.color}>
              #{category.DefaultCategory.name}
            </Category>
          ))}
        </CategoryList>
      </Container>
    )
  );
}
