import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';
import strings from '~/strings';

import { Container, Image } from './styles';

export default function ImageInput({ alt }) {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const ref = useRef();

  async function handleChange1(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const avatar = {
      id: response.data.id,
      url: response.data.url,
    };

    setFile(avatar.id);
    setPreview(avatar.url);
  }

  return (
    <Container>
      <label htmlFor={alt}>
        <Image
          src={
            preview ||
            `${strings.baseUrl}/files/3b9f630b1dbac971329cb33e2482517c.png`
          }
        />

        <input
          type="file"
          id={alt}
          accept="image/*"
          data-file={file}
          onChange={handleChange1}
          ref={ref}
        />
      </label>
    </Container>
  );
}

ImageInput.propTypes = {
  alt: PropTypes.string.isRequired,
};
