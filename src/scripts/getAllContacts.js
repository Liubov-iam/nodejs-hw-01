import { promises as fs } from 'fs';
import { join } from 'path';

const PATH_DB = join(__dirname, '../db/db.json');

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
