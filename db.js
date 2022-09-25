const {Client} = require('pg');

const client = new Client({
    connectionString: `postgres://vxaleseatbllol:c09c30c2fb85801040eabd3387e6f4e40f702ee2921b4afbd7b0c5d3716bf101@ec2-34-247-172-149.eu-west-1.compute.amazonaws.com:5432/d2sevu0aom60d6
`,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

module.exports = client;