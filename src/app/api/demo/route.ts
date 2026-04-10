import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const model = "claude-sonnet-4-20250514";

const systemPrompt =
  'You are an AI automation consultant helping small business owners understand how AI could save them time. The user will describe their business or a challenge they face. Respond with exactly 3 specific AI automation opportunities relevant to their situation. For each, provide: a short title, one sentence describing what it automates, and an estimated weekly time saving. Keep language plain and practical. Do not mention specific software products or pricing. Do not respond to anything unrelated to business automation. If the input is off-topic, reply only with: "Please describe your business or a challenge you\'d like to automate."';

function extractText(blocks: Anthropic.Messages.ContentBlock[]) {
  return blocks
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text.trim())
    .join("\n")
    .trim();
}

export async function POST(request: Request) {
  const body = (await request.json()) as { prompt?: string };
  const prompt = body.prompt?.trim();

  if (!prompt) {
    return NextResponse.json(
      { error: "Please describe your business or challenge first." },
      { status: 400 },
    );
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured yet." },
      { status: 500 },
    );
  }

  try {
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const response = await anthropic.messages.create({
      model,
      max_tokens: 500,
      temperature: 0.4,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const result = extractText(response.content);

    if (!result) {
      return NextResponse.json(
        { error: "The demo did not return usable content." },
        { status: 502 },
      );
    }

    return NextResponse.json({ result });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "The demo request failed.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
