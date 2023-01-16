import express, { Request, Response } from 'express'

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'ok'
    })

    req
})

app.listen(port, () => {
    console.log(`App ouvindo na porta ${port}`)
})