// Import dotenv to load environment variables from a .env file
import dotenv from 'dotenv';

dotenv.config();


class DatabaseSelection{
    constructor() {
        this.globalselection = process.env.GLOBAL_SEPERATOR.toLowerCase()
        
        if (this.globalselection === 'local') {
            this.final = {
                port: process.env.LOCAL_PORT,
                db_name: process.env.LOCAL_DB_NAME,
                db_user: process.env.LOCAL_DB_USER,
                db_password: process.env.LOCAL_DB_PASSWORD
            }
        }
        else if (this.globalselection === 'qa') {
            this.final = {
                port: process.env.QA_PORT,
                db_name: process.env.QA_DB_NAME,
                db_user: process.env.QA_DB_USER,
                db_password: process.env.QA_DB_PASSWORD
            }
        }
        else if (this.globalselection === 'dev') {
            this.final = {
                port: process.env.DEV_PORT,
                db_name: process.env.DEV_DB_NAME,
                db_user: process.env.DEV_DB_USER,
                db_password: process.env.DEV_DB_PASSWORD
            }
        }
        else {
            console.log('Error is passing global env value')
            this.final = null; // Optional: Handle invalid cases
        }
    }

    config_selection() {
        return this.final
    }

    
}


var obj = new DatabaseSelection
console.log(obj.config_selection().port)