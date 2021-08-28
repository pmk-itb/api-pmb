from dotenv import dotenv_values
from locust import HttpUser, task, between
from faker import Faker


class FormPMBUser(HttpUser):
    wait_time = between(20, 30)

    def on_start(self):
        api_key = dotenv_values('../../../.env.development')['API_KEY']
        self.client.headers = {
            'Authorization': 'Bearer ' + api_key
        }

    @task
    def get_mentors(self):
        self.client.get('/mentors')

    def generate_fake_data(self):
        faker = Faker(['id_ID'])
        data = {
            'nim': faker.random.randint(16521001, 16521600),
            'name': faker.name(),
            'nickname': faker.first_name(),
            'majorId': faker.random.randint(1, 77),
            'gender': 'MALE',
            'birthDate': '2000-09-02T00:00:00Z',
            'line': faker.user_name(),
            'phone': faker.phone_number(),
            'email': faker.email(),
            'originProvince': faker.state(),
            'originCity': faker.city(),
            'originSchool': faker.company(),
            'originChurch': faker.company(),
            'parentPhone': faker.phone_number(),
            'parentRelationship': 'AYAH',
            'discipleshipId': faker.random.randint(1, 85)
        }
        return data

    @task
    def create_member(self):
        data = self.generate_fake_data()
        self.client.post(url='/members', json=data)