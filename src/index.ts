import { APIGatewayEvent, APIGatewayEventRequestContext, APIGatewayProxyCallback } from 'aws-lambda';

export const handler = (event: APIGatewayEvent, context: APIGatewayEventRequestContext, callback: APIGatewayProxyCallback) => {
    console.log(JSON.stringify({ event, context }));

    callback(null, {
        body: JSON.stringify({ hello: 'world' }),
        statusCode: 200,
    });
};