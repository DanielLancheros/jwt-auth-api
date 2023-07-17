import express from 'express'
import cors from 'cors'
import { onRequest } from 'firebase-functions/v2/https'

const app = express ()
app.use (cors()) // allows access from other domains
app.use(express.json()) // patch and post in json

// routes: 
app.post ("/signup")
app.post ("/login")


// protected (authenticated users only)
app.get ("/profile")
app.patch ("/profile")

export const api = onRequest (app) // send all HTTPS requests to express
