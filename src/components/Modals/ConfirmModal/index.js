import React from 'react';
import PropTypes from 'prop-types';

import { FaRegQuestionCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container, Content, CancelButton } from './styles';
import { DefaultButton } from '~/components/Buttons';

export default function ConfirmModal({
  tittle,
  visible,
  btConfirm,
  btCancel,
  func,
}) {
  return (
    <Container visible={visible}>
      <Content>
        <div className="contentTittle">
          <FaRegQuestionCircle />
          <h2>{tittle}</h2>
        </div>

        <div className="contentButton">
          <DefaultButton
            onClick={() => {
              func();
              toast.success('Compra realizada, agora é só curtir o ROLEE!');
            }}
          >
            {btConfirm}
          </DefaultButton>

          <CancelButton type="button" onClick={func}>
            <span>{btCancel}</span>
          </CancelButton>
        </div>
      </Content>
    </Container>
  );
}

ConfirmModal.propTypes = {
  tittle: PropTypes.isRequired,
  visible: PropTypes.bool.isRequired,
  btConfirm: PropTypes.string,
  btCancel: PropTypes.string,
  func: PropTypes.isRequired,
};

ConfirmModal.defaultProps = {
  btConfirm: 'Confirmar',
  btCancel: 'Cancelar',
};
