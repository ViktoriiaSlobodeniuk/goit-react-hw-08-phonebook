import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { StyledDiv } from './Contacts.styled';

export default function ContactsPage() {
  return (
    <StyledDiv>
      <h1>Your personal Phonebook</h1>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </StyledDiv>
  );
}
