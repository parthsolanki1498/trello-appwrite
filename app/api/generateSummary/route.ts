import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {

    // Todos in the body of the POST Request
    const { todos } = await request.json();
    console.log(todos);

    // Communicate with OpenAI GPT
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `When response, welcome the user always as User and say welcome to the Trello 2! Limit the response to 200 character but give a productive quote at the end`,
            },
            {
                role: "user",
                content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as
                To do, in progress and done, then tell the user to have a produtive day! Here's the data: ${JSON.stringify(
                    todos
                )}`,
            },
        ]
    });

    console.log(response);

    const { choices } = response;

    console.log('Choices', choices[0].message);

    return NextResponse.json(response.choices[0].message);
}