from utils import awsHelper as awsUtils
from decimal import Decimal
import json

# used when json.dumps cannot by default decode an element
def default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)


def handler(event, context):

    required_args_present=False
    try:
        required_args_present = set(['project_id','name','description','picture','team','school','tech','college','links','booth_number']).issubset(set(list(json.loads(event["body"]).keys())))
    except Exception as e:
        return {
        "statusCode" : "400" ,
        "headers" : {
            "Content-Type" : "application/json" ,
            "Access-Control-Allow-Headers" : 'Content-Type' ,
            "Access-Control-Allow-Origin" : "*" ,
            "Access-Control-Allow-Methods" : "POST, OPTIONS" ,
            "Access-Control-Allow-Credentials" : True
        },
        "body": json.dumps({"ERROR":"Error getting body of request, it may not have been passed correctly",
                            "Exception":str(e)})
        }

    if (not required_args_present):
        return {
        "statusCode" : "400" ,
        "headers" : {
            "Content-Type" : "application/json" ,
            "Access-Control-Allow-Headers" : 'Content-Type' ,
            "Access-Control-Allow-Origin" : "*" ,
            "Access-Control-Allow-Methods" : "POST, OPTIONS" ,
            "Access-Control-Allow-Credentials" : True
        },
        "body": json.dumps({"ERROR":"The required arguments [NAME,DESCRIPTION,PICTURE,TEAM,SCHOOL,TECH,COLLEGE,LINKS] are not present"})
        }


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
    item['booth_number'] = input_data['booth_number']
    item['project_id'] = input_data.get("project_id", None)

    ddb = awsUtils.connect_ddb()
    response=ddb.Table('osu-expo-projects').update_item(
        Key={'project_id':item['project_id']},
        UpdateExpression="SET #NAME_ATTR = :NAME_VAL, #DESC_ATTR = :DESC_VAL, #PICTURE_ATTR = :PICTURE_VAL, #TEAM_ATTR = :TEAM_VAL, #SCHOOL_ATTR = :SCHOOL_VAL, #TECH_ATTR = :TECH_VAL, #COLLEGE_ATTR = :COLLEGE_VAL, #LINKS_ATTR = :LINKS_VAL, #BOOTHNUMBER_ATTR = :BOOTHNUMBER_VAL",
        ExpressionAttributeNames = {
            "#NAME_ATTR":"name",
            "#DESC_ATTR":"description",
            "#PICTURE_ATTR":"picture",
            "#TEAM_ATTR":"team",
            "#SCHOOL_ATTR":"school",
            "#TECH_ATTR":"tech",
            "#COLLEGE_ATTR":"college",
            "#LINKS_ATTR":"links",
            "#BOOTHNUMBER_ATTR":"booth_number"
        },
        ExpressionAttributeValues={
            ":NAME_VAL": str(name),
            ":DESC_VAL": str(description),
            ":PICTURE_VAL": str(picture),
            ":TEAM_VAL": team,
            ":SCHOOL_VAL": str(school),
            ":TECH_ATTR": str(tech),
            ":COLLEGE_ATTR": str(college),
            ":LINKS_VAL": links,
            ":BOOTHNUMBER_VAL":booth_number
        }
    )


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
