export default defineEventHandler(async (event) => {
    console.log('SignUp event received');
    const body = await readBody(event);
    await useStorage("user").setItem<{name: string, email: string, password: string}>(body.email, body);
    return {
        message: "User Created Successfully",
        statusCode: 200,
    }
});