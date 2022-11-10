
export default async function handler(req, res) {
  console.log("This value is fetched on the server --- will NOT see this console.log in client browser")
  res.status(200).json({ time: new Date() });
}