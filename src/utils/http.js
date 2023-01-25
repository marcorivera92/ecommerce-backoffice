const BASE_URL = "https://api.escuelajs.co/api/v1";

const GET = async (resource) => {
  try {
    const res = await fetch(`${BASE_URL}/${resource}`);

    if (res.status >= 400) {
      throw new Error("Can't estalish connection");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return { status: false };
  } finally {
  }
};

const POST = (type, objBody) => {
  return fetch(BASE_URL + type, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  });
};

const PUT = async (type, body) => {
  const res = await fetch(BASE_URL + type, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

const DELETE = (resource, id) => {
  return fetch(`${BASE_URL}/${resource}` + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { GET, POST, PUT, DELETE };
