import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJoZWxsbm9ldGgtdmliZS13YWl0LnZlcmNlbC5hcHAifQ",
      signature:
        "MHgzYTc2ZmJiOTgxMjQ1ZTQ0MGE5OTQ5ODkyYjJiNzY3YTI1MzIwMjMwYTA2MmYzOWM0Njk3NjEwZDNmYTBjMGJlNzE0NWY2ZTBiODRkZjE4NmRkNzZkY2VkNzA4NTNkY2Q4NjczNTU0ZDFmMDA1MmQxN2I4YzhhZjhiZDMzYjYwYTFi",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
