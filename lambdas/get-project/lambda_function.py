from utils import awsHelper as awsUtils
from decimal import Decimal
import uuid
import json

# used when json.dumps cannot by default decode an element
def default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)


def handler(event, context):


    required_args_present = set(['project_id']).issubset(set(list(event.keys())))

    if (not required_args_present):
        {
        "statusCode" : "400" ,
        "headers" : {
            "Content-Type" : "application/json" ,
            "Access-Control-Allow-Headers" : 'Content-Type' ,
            "Access-Control-Allow-Origin" : "*" ,
            "Access-Control-Allow-Methods" : "POST, OPTIONS" ,
            "Access-Control-Allow-Credentials" : True
        },
        "body": json.dumps({"ERROR":"The required argument [project_id] is not present"})}

    # all the args are present so can put in ddb
    input_data = json.loads(event["body"])
    project_id = input_data['project_id']

    ddb = awsUtils.connect_ddb()
    response=ddb.Table('osu-expo-projects').get_item(Key=project_id)


    ret = {
        "statusCode" : "200" ,
        "headers" : {
            "Content-Type" : "application/json" ,
            "Access-Control-Allow-Headers" : 'Content-Type' ,
            "Access-Control-Allow-Origin" : "*" ,
            "Access-Control-Allow-Methods" : "POST, OPTIONS" ,
            "Access-Control-Allow-Credentials" : True
        },
        "body": json.dumps( response,default=default)}

    return ret
