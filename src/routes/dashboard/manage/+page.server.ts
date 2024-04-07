export const POST = async ({ request }) => {
    const formData = await request.formData();

    return {
        status: 200,
        body: JSON.stringify({ message: 'Form submitted successfully' })
    };
};