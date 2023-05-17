import * as core from "@actions/core";
import axios from "axios";

export async function run(): Promise<void> {
  try {
    const apiKey = core.getInput("typefully-api-key");
    const content = core.getInput("content");
    const threadify = core.getInput("threadify");
    const share = core.getInput("share");
    const scheduleDate = core.getInput("schedule-date");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
    };

    const data = {
      content: content,
      threadify: threadify,
      share: share,
      schedule_date: scheduleDate,
    };

    const response = await axios.post(
      "https://api.typefully.com/v1/drafts/",
      data,
      config
    );

    if (response.status !== 200) {
      throw new Error(
        `Request failed with status ${response.status} ${response.statusText}`
      );
    }

    core.setOutput("Response", response.data);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
