import dbConnect from '../../../server/dbConnect';
import Channel from '../../../models/Channel';

const handler = async (req, res) => {
    try {
        await dbConnect()
        
        if (req.method === 'POST') {
            let channel = new Channel(req.body)

            channel.save((error) => {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.status(200).send({'message': 'Created in test'});
                }
            })
        } else {
            res.status(400).send({'message': 'Bad request'})
        }
    } catch (error) {
        res.status(500).send({'message': 'Internal server error'});
    }
};

export default handler;