// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { rest } from 'msw'
import { categories } from "./data";

const handlers = [
    rest.get('/category', (req, res, ctx) => {
        return res(ctx.json(categories))
    })
]

export { handlers }
