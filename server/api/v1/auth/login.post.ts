export default defineEventHandler(async (event) => {
    console.log('Login event received');
    const data = event._requestBody;
});