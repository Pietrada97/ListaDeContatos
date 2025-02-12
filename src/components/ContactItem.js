import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../store/actions';
import styled from 'styled-components';

const ContactItemWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;

const EditFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditInput = styled.input`
  margin: 5px 0;
  padding: 8px;
  border: 1px solid #ccc;
`;

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedContact = { ...contact, name, email, phone };
    dispatch(editContact(updatedContact));
    setIsEditing(false);  // Fechar o formulário de edição
  };

  const handleCancel = () => {
    setIsEditing(false); // Fechar o formulário de edição sem salvar
  };

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <ContactItemWrapper>
      {isEditing ? (
        <EditFormWrapper>
          <EditInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome completo"
          />
          <EditInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <EditInput
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
          />
          <Button onClick={handleSave}>Salvar</Button>
          <Button onClick={handleCancel}>Cancelar</Button>
        </EditFormWrapper>
      ) : (
        <>
          <div>{contact.name}</div>
          <div>{contact.email}</div>
          <div>{contact.phone}</div>
          <Button onClick={handleEdit}>Editar</Button>
          <Button onClick={handleRemove}>Remover</Button>
        </>
      )}
    </ContactItemWrapper>
  );
};

export default ContactItem;
