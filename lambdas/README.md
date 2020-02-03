To create a new lambda function:

1. Define aws resources inside restapi.yaml cloudformation template. See comments in the rest api yaml file for instructions.
2. Create directory for lambda function inside lambdas directory. Make sure the name of the directory matches the code parameter used in the lambda function cloudformation definition.
3. Create python file named lambda_function.py within the directory. Change the response body as needed, but keep the headers the same unless you intend to change the response content type.
4. Create a requirements.txt file within the directory if the lambda function requires external modules. The format for the requirements.txt file is the same as for any other python project.
5. Create a lambda_test.py function if you intend to create tests.
6. Add the name of the directory to the LAMBDA_DIRS variable defined at the top of build_helper.sh separated by a space. This will make sure your lambda code is built appropriately.
