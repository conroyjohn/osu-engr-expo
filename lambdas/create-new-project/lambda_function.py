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


    required_args_present = set(['name','description','picture','team','school','tech','college','links']).issubset(set(list(event.keys())))

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
        "body": json.dumps({"ERROR":"The required arguments name,description,picture,team,school,tech,college,links are not present"})}

    # all the args are present so can put in ddb
    input_data = json.loads(event["body"])
    item={}
    item['name'] = input_data['name']
    item['description'] = input_data['description']
    item['picture'] = input_data['picture']
    item['team'] = input_data['team']
    item['school'] = input_data['school']
    item['tech'] = input_data['tech']
    item['college'] = input_data['college']
    item['links'] = input_data['links']
    item['project_id'] = str(uuid.uuid3(NULL_NAMESPACE, str(datetime.now())+input_data['name']))

    ddb = awsUtils.connect_ddb()
    response=ddb.Table('osu-expo-projects').put_item(Item=item)


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
