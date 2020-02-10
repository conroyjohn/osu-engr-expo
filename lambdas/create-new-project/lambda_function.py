from utils import awsHelper as awsUtils
from datetime import datetime
import uuid


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
        "body": "The required arguments name,description,picture,team,school,tech,college,links are not present"}

    # all the args are present so can put in ddb
    item={}
    item['name'] = event['name']
    item['description'] = event['description']
    item['picture'] = event['picture']
    item['team'] = event['team']
    item['school'] = event['school']
    item['tech'] = event['tech']
    item['college'] = event['college']
    item['links'] = event['links']
    item['project_id'] = str(uuid.uuid3(NULL_NAMESPACE, str(datetime.now())+event['name']))

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
        "body": response}

    return ret
