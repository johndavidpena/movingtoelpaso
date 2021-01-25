import nextConnect from 'next-connect';
import middlewareTwilio from '../../middleware/twilioMW';

const handler = nextConnect();

handler.use(middlewareTwilio);

// NOTE: Removed async here
handler.post((req, res) => {
  let client = req.twilioClient;

  let data = req.body.values;
  let firstName = data.firstName;
  let lastName = data.lastName;

  client.messages
    .create({
      from: '+19152332022',
      to: '+19153553477',
      body: `${firstName} ${lastName} submitted at Peña El Paso!`
    })
    .catch(err => {
      console.log(err);
    });
});

export default handler;
