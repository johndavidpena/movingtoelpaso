import nextConnect from 'next-connect';
import middlewareDatabase from '../../middleware/mongoMW';

const handler = nextConnect();

handler.use(middlewareDatabase);

handler.get(async (req, res) => {
  let doc = await req.db.collection('landing').findOne();
  // console.log(doc);
});

handler.post(async (req, res) => {
  let contact = req.body.values;

  let doc = await req.db.collection('landing').insertOne(contact);

  res.status(200).end();
});

export default handler;
