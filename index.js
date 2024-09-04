import express from 'express'
import session from 'express-session'
import { connectDB } from './db/connect.js'
import authRouter from './src/modules/auth/auth.router.js'
import messageRouter from './src/modules/messages/message.router.js'
import mongoSession from 'connect-mongodb-session'
import userRouter from './src/modules/user/user.router.js'

const MongoDbStore =mongoSession(session)
const app = express()
const port = 3000
connectDB()
const store =new MongoDbStore({
    uri:"mongodb+srv://mark:$aGAu9jaEvij_d3@cluster0.3abf1.mongodb.net/sarahah",
    collection :'mySessions'
})
app.use(session({
    secret:'hambozo',
    resave:false,
    saveUninitialized:true,
    store
}))
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.get('/', (req, res, next) => {
    res.render('home.ejs')
})
app.use('/auth', authRouter)
app.use('/message', messageRouter)
app.use('/user',userRouter)

app.listen(port, () => console.log(`server is running on port ${port}!`))