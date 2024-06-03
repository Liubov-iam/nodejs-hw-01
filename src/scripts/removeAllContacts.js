import { promises as fs } from 'fs';
import { join } from 'path';

const PATH_DB = join(__dirname, '../db/db.json');

export const removeAllContacts = async () => {
    try {
          await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');
        console.log('All contacts have been removed.');
    } catch (error) {
        console.error('Error removing all contacts:', error);
        throw error;
    }
};

await removeAllContacts();
