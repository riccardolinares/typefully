import * as core from "@actions/core";

export async function run(): Promise<void> {
  try {
    const apiKey = core.getInput("typefully-api-key");
    const content = core.getInput("content");
    const threadify = core.getInput("threadify");
    const share = core.getInput("share");
    const scheduleDate = core.getInput("schedule-date");

    const response = await fetch("https://api.typefully.com/v1/drafts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
      body: JSON.stringify({
        content: content,
        threadify: threadify,
        share: share,
        schedule_date: scheduleDate,
      }),
    });

    if (response.status !== 200) {
      throw new Error(
        `Request failed with status ${response.status} ${response.statusText}`
      );
    }

    core.setOutput("Response", response.json());
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
