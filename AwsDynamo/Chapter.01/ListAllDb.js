var Aws=require('aws-sdk'),
    prettyPrint=require('./PrettyPrint');
var awsCredential = {
    'region':'ap-south-1',
    'accessKeyId':'AKIAJTEHLJVS6EC4UXXQ',
    'secretAccessKey':'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'
}
var dynamoDb=new Aws.DynamoDB(awsCredential);
dynamoDb.listTables({})
    .promise()
    .then(prettyPrint.prettyPrint)
    .catch(prettyPrint.prettyPrint);