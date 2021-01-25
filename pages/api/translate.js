// export GOOGLE_APPLICATION_CREDENTIALS="/Users/johnpena/Documents/Code/penaelpaso-9f8a07de53c5.json"
// const { Translate } = require('@google-cloud/translate').v2;

// API resolved without sending a response for /api/translate, this may result in stalled requests.
// export default (req, res) => {
//   function main(projectId = 'penaelpaso-1588113112327') {
//     const translate = new Translate({ projectId });

//     async function quickStart() {
//       const text = 'Hello, China! Welcome to Pena El Paso.';
//       // Translates some text into Chinese(Simplified)
//       const target = 'zh';
//       const [translation] = await translate.translate(text, target);

//       const result = `${text} in Chinese is ${translation}`;
//       res.statusCode = 200;
//       res.send(result);
//     }

//     quickStart();
//   }

//   main(...process.argv.slice(2));
// }
