from utils import awsHelper as awsUtils

def handler(event, context):
    s3 = awsUtils.connect_s3()
    sample_text = awsUtils.get_s3_content_as_string(s3,"osu-capstone-beta","sampleFile.txt")
    ret = {
        "statusCode" : "200" ,
        "headers" : {
            "Content-Type" : "application/json" ,
            "Access-Control-Allow-Headers" : 'Content-Type' ,
            "Access-Control-Allow-Origin" : "*" ,
            "Access-Control-Allow-Methods" : "POST, OPTIONS" ,
            "Access-Control-Allow-Credentials" : True
        },
        "body": sample_text}
    return ret
