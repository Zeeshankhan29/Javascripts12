import dotenv from 'dotenv';

dotenv.config();

class DAtamanage {
    constructor() {
        this.globalconfig = process.env.GLOBAL_SEPERATOR.toLowerCase()


        if (this.globalconfig === 'local') {
            this.finalselectconfig = {
                port: process.env.LOCAL_PORT,
                db_name: process.env.LOCAL_DB_NAME,
                user: process.env.LOCAL_DB_USER,
                passwd: process.env.LOCAL_DB_PASSWORD

            }
        }
        else if (this.globalconfig === 'qa') {
            this.finalselectconfig = {
                port: process.env.QA_PORT,
                db_name: process.env.QA_DB_NAME,
                user: process.env.QA_DB_USER,
                passwd: process.env.QA_DB_PASSWORD

            }
        


        }
        else if (this.globalconfig === 'dev') {
            this.finalselectconfig = {
                port: process.env.DEV_PORT,
                db_name: process.env.DEV_DB_NAME,
                user: process.env.DEV_DB_USER,
                passwd: process.env.DEV_DB_PASSWORD

            }
        }
        else {
            console.log('configuration is not matching')
            this.finalselectconfig = null

        }
    }

    configuration_call() {
        return this.finalselectconfig
    }
}


// const ob = new DAtamanage()
// console.log(ob.configuration_call())


export default DAtamanage