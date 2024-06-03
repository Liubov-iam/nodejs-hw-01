import { promises as fs } from 'fs';
import { join } from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';

const PATH_DB = join(__dirname, '../db/db.json');

export const addOneContact = async () => {
    try {
        const newContact = createFakeContact();

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

        contacts.push(newContact);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

        console.log('One contact added successfully:', newContact);
    } catch (error) {
        console.error('Error adding one contact:', error);
    }
};

await addOneContact();
