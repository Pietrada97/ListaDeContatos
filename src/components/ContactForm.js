import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/actions';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <FormWrapper>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome completo"
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <Input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
      />
      <Button onClick={handleSubmit}>Adicionar Contato</Button>
    </FormWrapper>
  );
};

export default ContactForm;
