import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await getAllContacts();

    if (contacts.length > 1) {
      const contactsRemoveLast = contacts.slice(0, -1);
      await fs.writeFile(PATH_DB, JSON.stringify(contactsRemoveLast));
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
