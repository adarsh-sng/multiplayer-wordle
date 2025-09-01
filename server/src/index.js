import { Hono } from 'hono'

const app = new Hono()
app.use()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
// console.log(app)
const correctWord =["hello","adieu","tiger"]
app.post('/validate-word', async (c) => {
  const word = await c.req.json()
  console.log(word);
  // console.log(c.json(correctWord.includes(word) ? "you pass" : "you fail"))
   console.log(correctWord.includes(word) ? "you pass" : "you fail")
  return c.json(correctWord.includes(word) ? "you pass" : "you fail");
})
console.log(correctWord.length)
app.get()
export default app 
