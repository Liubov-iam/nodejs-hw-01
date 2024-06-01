import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        let contacts = [];
        try {
            const data = await fs.readFile(PATH_DB, 'utf8');
            contacts = JSON.parse(data);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
            contacts = [];
        }
        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }
         await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

await generateContacts(5);
