import QrCode from 'qrcode'
import { Message } from '../../../db/models/messages.model.js';

export const getMessages = async (req, res, next) => {
    console.log(req.session);

    if (req.session.isLoggedIn) {
        let url = `http://localhost:3000/user/${req.session.userId}`
        let qrCode = await QrCode.toDataURL(url)
        const messages = await Message.find({ user: req.session.userId })

        return res.render('message.ejs', { session: req.session, qrCode, messages })
    }
    return res.redirect('/auth/login')

}