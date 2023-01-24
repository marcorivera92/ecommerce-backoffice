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

export { GET };
