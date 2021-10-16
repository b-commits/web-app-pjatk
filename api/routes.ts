import { express }  from 'express';
import { DEFAULT_SERVER_PORT } from './consts';
import { DEFAULT_SERVER_URL } from './consts';

const port = DEFAULT_SERVER_PORT; 
const app = express();

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at ${ DEFAULT_SERVER_URL }${ port }` );
} );