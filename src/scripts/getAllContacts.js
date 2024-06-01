import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        } else {
            throw error;
        }
    }
};

console.log(await getAllContacts());
