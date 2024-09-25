
import dotenv from 'dotenv';

dotenv.config();

const value = function (globalconfig) {
    var final = null
    if (globalconfig.toLowerCase() === 'local') {
        final = {
            port: process.env.LOCAL_PORT,
            db_name: process.env.LOCAL_DB_NAME,
            user: process.env.LOCAL_DB_USER,
            passwd: process.env.LOCAL_DB_PASSWORD
        }
    }
    else if (globalconfig.toLowerCase() === 'dev') {
        final = {
            port: process.env.DEV_PORT,
            db_name: process.env.DEV_DB_NAME,
            user: process.env.DEV_DB_USER,
            passwd: process.env.DEV_DB_PASSWORD
        }
    }
    else if (globalconfig.toLowerCase() === 'qa') {
        final = {
            port: process.env.QA_PORT,
            db_name: process.env.QA_DB_NAME,
            user: process.env.QA_DB_USER,
            passwd: process.env.QA_DB_PASSWORD
        }
    }
    else {
        console.log('mismatch configurations')
        // final = null
        // console.log(final)
    }
    return final
}
console.log(value('qa')); 

