// GET , POST, PUT, DELETE --> HTTP

const URL_API = import.meta.env.BASE_URL_API ?? "";

console.log(URL_API);

const fetcher = {
  get: (url: string) => fetch(URL_API + url).then((res) => res.json()),
  post: (url: string, data: Record<string, any>) =>
    fetch(URL_API + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),
  put: (url: string, data: Record<string, any>) =>
    fetch(URL_API + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),
  delete: (url: string) =>
    fetch(URL_API + url, {
      method: "DELETE",
    }),
};

export default fetcher;
