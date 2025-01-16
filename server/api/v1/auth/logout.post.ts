export default defineEventHandler(async (event) => {
    console.log('Logout event received');
    const { email } = await readBody(event);
    await useStorage("user").removeItem(email);
    return {
        message: "User Created Successfully",
        statusCode: 200,
    }
});