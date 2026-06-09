import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://sgp.cloud.appwrite.io/v1') // URL Appwrite Cloud
    .setProject('6a26e47900199ad9c2cb'); // Copy dari dashboard Appwrite

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);