module.exports = async function (context, req) {
    // Get time
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZoneName: 'short',
    };
    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(now);

    context.res.json({
        text: `Hello from the API! Time is: ${formattedDateTime}`,
    });
}