import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const newContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts));
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
