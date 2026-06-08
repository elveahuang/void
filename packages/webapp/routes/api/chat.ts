import { deepseek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';
import { Context } from 'hono';
import { defineHandler } from 'void';

export const POST = defineHandler(async (c: Context): Promise<Response> => {
    console.log('POST /text');
    const json = c.req.json();
    console.log(json);
    const result = streamText({
        model: deepseek('deepseek-v4-flash'),
        prompt: '你好，你能                                                           做什么',
    });
    return result.toTextStreamResponse();
});
