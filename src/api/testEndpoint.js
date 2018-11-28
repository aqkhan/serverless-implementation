module.exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({
            message: "This API is dandy working!"
        })
    }
};

module.exports.handler2 = async (event, context) => {
    const a = {
        statusCode: 200,
        header: {},
        body: JSON.stringify({
            message: 'Nothing new here'
        })
    };
    const b = {
        statusCode: 200,
        header: {},
        body: JSON.stringify({
            message: 'Bad request MF!'
        })
    };
    const params = event.queryStringParameters;
    const realParams = event.pathParameters;
    console.log('Path Parameters:', realParams);
    if (event.httpMethod === 'POST')
        return {
            statusCode: 200,
            body: event.body
        };
    return (realParams !== null) ? a : b;
};