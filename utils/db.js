const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DATABASE;

export const conStr = 'mongodb+srv://'+username+':'+password+'@cluster0.fabnr8o.mongodb.net/'+database+'?retryWrites=true&w=majority';