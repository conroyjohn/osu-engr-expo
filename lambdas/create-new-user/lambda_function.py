from utils import awsHelper as awsUtils
from datetime import datetime
from decimal import Decimal
import uuid
import json

# used when json.dumps cannot by default decode an element
def default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)

class NULL_NAMESPACE:
    bytes = b''

def handler(event, context):


    required_args_present = set(['email']).issubset(set(list(event.keys())))

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
        "body": json.dumps({"ERROR":"The required argument email is not present"})}

    # all the args are present so can put in ddb
    input_data = json.loads(event["body"])
    item={}
    # using .get and returning None if it doesn't exist since email is the only required arg to create a user
    item['email'] = input_data.get("email", default=None)
    item['display_name'] = input_data.get("display_name", default=None)
    item['description'] = input_data.get("description", default=None)
    item['links'] = input_data.get("links", default=None)

    # userid based on email and timestamp
    item['user_id'] = str(uuid.uuid3(NULL_NAMESPACE, str(datetime.now())+input_data("email", default=None)))

    ddb = awsUtils.connect_ddb()
    response=ddb.Table('osu-expo-users').put_item(Item=item)


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
