var Aws=require('aws-sdk'),
    prettyPrint=require('./PrettyPrint');
var awsCredential = {
    'region':'ap-south-1',
    'accessKeyId':'AWS_ACCESS_KEY_ID',
    'secretAccessKey':'AWS_SECRET_ACCESS_KEY'
}
var dynamoDb=new Aws.DynamoDB(awsCredential);
dynamoDb.listTables({})
    .promise()
    .then(prettyPrint.prettyPrint)
    .catch(prettyPrint.prettyPrint);