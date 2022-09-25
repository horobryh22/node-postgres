const Pool = require('pg').Pool;
const pool = new Pool ({
    user: 'vxaleseatbllol',
    password: 'c09c30c2fb85801040eabd3387e6f4e40f702ee2921b4afbd7b0c5d3716bf101',
    host: 'ec2-34-247-172-149.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd2sevu0aom60d6'
});

module.exports = pool;