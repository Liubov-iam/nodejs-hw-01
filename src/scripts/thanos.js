import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);

        const filteredContacts = contacts.filter(() => Math.random() > 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2), 'utf8');
        console.log('Thanos snapped his fingers!');
    } catch (error) {
        console.error('Error performing Thanos snap:', error);
        throw error;
    }
};


await thanos();
