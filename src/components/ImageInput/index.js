import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import api from '~/services/api';
import strings from '~/strings';

import { Container, Image } from './styles';

export default function ImageInput({ alt, name }) {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const { registerField } = useField(name);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'imageInput',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, []);// eslint-disable-line

  async function handleChange(e) {
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
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

ImageInput.propTypes = {
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
