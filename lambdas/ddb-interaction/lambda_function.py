from utils import awsHelper as awsUtils

def handler(event, context):
    ddb = awsUtils.connect_ddb()
    content = "There are " + str(len(list(ddb.tables.all()))) + " tables in the ddb resource."
    ret = {
        "statusCode" : "200" ,
        "headers" : {
            "Content-Type" : "application/json" ,
            "Access-Control-Allow-Headers" : 'Content-Type' ,
            "Access-Control-Allow-Origin" : "*" ,
            "Access-Control-Allow-Methods" : "POST, OPTIONS" ,
            "Access-Control-Allow-Credentials" : True
        },
        "body": content}
    return ret
