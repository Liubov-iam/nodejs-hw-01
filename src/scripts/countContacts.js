import { promises as fs } from 'fs';
import { join } from 'path';

const PATH_DB = join(__dirname, '../db/db.json');

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (error) {
        if (error.code === 'ENOENT') {
            return 0;
        } else {
            throw error;
        }
    }
};

console.log('Number of contacts:', await countContacts());
