import OpenAI from "openai";
import { OPENROUTER_API_KEY, REFERER, TITLE } from "./constants";

const openai = new OpenAI({
    apiKey: OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
    dangerouslyAllowBrowser: true,
    defaultHeaders: {
        "HTTP-Referer": REFERER,
        "X-Title": TITLE,
    },
});

export default openai;

