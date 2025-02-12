import React from 'react';
import StoreProvider from './store/store';
import ContactForm from './components/ContactForm';
import ContactItem from './components/ContactItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 500px;
  margin: auto;
  padding: 20px;
`;

const ContactList = styled.div`
  margin-top: 20px;
`;

const App = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <StoreProvider>
      <AppWrapper>
        <h1>Lista de Contatos</h1>
        <ContactForm />
        <ContactList>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ContactList>
      </AppWrapper>
    </StoreProvider>
  );
};

export default App;
