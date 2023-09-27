import { Client, Account, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("650267779382a711b58c"); // Your project ID

export const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

export default client;