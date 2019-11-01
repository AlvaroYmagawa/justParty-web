import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '~/services/api';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';
import { Avatar } from '~/components/Avatar';

export default function AvatarInput() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [file, setFile] = useState(profile.file && profile.file.id);
  const [preview, setPreview] = useState(profile.file && profile.file.url);

  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);

    dispatch(updateProfileRequest(response.data));
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <Avatar src={preview} size={110}>
          <span>Editar</span>
        </Avatar>

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
