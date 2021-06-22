import connectDB from '../../../server/mongodb';
import Channel from '../../../models/Channel';

const handler = async (req, res) => {
    try {
        if (req.method === 'GET') {
            Channel.find((err, items) => {
                if (err) {
                    res.status(422).send('req_method_not_supported');
                } else {
                    res.status(200).send(items)
                }
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export default connectDB(handler);