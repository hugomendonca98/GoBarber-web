import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';

import { Container } from './styles';

interface ToastConatinerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastConatinerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
