/* tslint:disable */

import AWS from 'aws-sdk';

const lambda = new AWS.Lambda({
    region: 'eu-west-1'
});

lambda.invoke({
    FunctionName: process.env.FUNCTION_NAME,
    Payload: JSON.stringify({
        test: 'hello',
    }),
    LogType: 'Tail',
}).promise().then(({ StatusCode, Payload, LogResult }) => {
    console.log({StatusCode, Payload});

    console.log(Buffer.from(LogResult, 'base64').toString())
}).catch(console.trace);