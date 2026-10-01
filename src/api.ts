export async function subscribe(email: string) {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { email } }),
  });

  if (response.status === 204) {
    return undefined;
  }

  if (response.headers.get("content-type")?.includes("application/json")) {
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }
  }

  throw new Error("Failed to subscribe");
}
