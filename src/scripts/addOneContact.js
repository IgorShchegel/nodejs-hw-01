import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  try {
    const contact = await getAllContacts();
    contact.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(contact));
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
