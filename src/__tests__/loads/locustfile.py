from dotenv import dotenv_values
from locust import HttpUser, task, between


class FormPMBUser(HttpUser):
    wait_time = between(1, 5)

    def on_start(self):
        api_key = dotenv_values('../../../.env.development')['API_KEY']
        self.client.headers = {
            'Authorization': 'Bearer ' + api_key
        }

    @task
    def get_departments(self):
        self.client.get('/departments')

    @task
    def get_mentors(self):
        self.client.get('/mentors')
