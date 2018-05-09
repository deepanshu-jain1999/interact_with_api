from django.views.generic import ListView
from django.shortcuts import render, redirect, reverse
import urllib.request
from django.http import HttpResponseRedirect
from bs4 import BeautifulSoup
from json import dumps
import requests


class FormHandler(ListView):
    template_name = "apps/form.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

    def post(self, request):
        r = urllib.request.urlopen('http://127.0.0.1:5000/').read()
        soup = BeautifulSoup(r, 'html.parser')

        # profile
        first_name = soup.find('span', attrs={'name': 'first_name'})
        last_name = soup.find('span', attrs={'name': 'last_name'})
        canId = soup.find('span', attrs={'name': 'canId'})
        email_id = soup.find('span', attrs={'name': 'email_id'})
        mobile = soup.find('span', attrs={'name': 'mobile'})
        imgPhoto = soup.find('img', attrs={'name': 'imgPhoto'})
        headline = soup.find('span', attrs={'name': 'headline'})
        industryText = soup.find('span', attrs={'name': 'industryText'})
        country = soup.find('span', attrs={'name': 'country'})
        city = soup.find('span', attrs={'name': 'city'})
        experience = soup.find('span', attrs={'name': 'experience'})
        skills = soup.find('span', attrs={'name': 'skills'})
        one = soup.find('span', attrs={'name': 'one'})
        two = soup.find('span', attrs={'name': 'two'})
        three = soup.find('span', attrs={'name': 'three'})
        four = soup.find('span', attrs={'name': 'four'})
        five = soup.find('span', attrs={'name': 'five'})
        summary = soup.find('p', attrs={'name': 'summary'})
        resume = soup.find('a', attrs={'name': 'resume'})

        # ug
        degree = soup.find('p', attrs={'name': 'degree'})
        institute = soup.find('p', attrs={'name': 'institute'})
        from_where = soup.find('p', attrs={'name': 'from_where'})
        course = soup.find('span', attrs={'name': 'course'})
        degree_type = soup.find('span', attrs={'name': 'degree_type'})
        ugto = soup.find('span', attrs={'name': 'ugto'})
        ugyear = soup.find('span', attrs={'name': 'ugyear'})

        # 12th
        twelthschool = soup.find('p', attrs={'name': 'twelthschool'})
        twelthcity = soup.find('p', attrs={'name': 'twelthcity'})
        twelthspecification = soup.find('span', attrs={'name': 'twelthspecification'})
        twelthto = soup.find('span', attrs={'name': 'twelthto'})
        twelthyear = soup.find('span', attrs={'name': 'twelthyear'})

        # employment|Experience
        organization = soup.find('span', attrs={'name': 'organization'})
        designation = soup.find('span', attrs={'name': 'designation'})
        role = soup.find('span', attrs={'name': 'designation'})
        current_city = soup.find('span', attrs={'name': 'current_city'})
        workLocation = soup.find('span', attrs={'name': 'current_city'})
        current_from = soup.find('span', attrs={'name': 'current_from'})
        present_date = soup.find('span', attrs={'name': 'present_date'})
        current_description = soup.find('span', attrs={'name': 'current_description'})

        # Projects
        project_title = soup.find('span', attrs={'name': 'project_title'})
        project_role = soup.find('span', attrs={'name': 'project_role'})
        project_from = soup.find('span', attrs={'name': 'project_from'})
        project_to = soup.find('span', attrs={'name': 'project_to'})
        project_url = soup.find('span', attrs={'name': 'project_url'})
        project_description = soup.find('span', attrs={'name': 'project_description'})

        # Other Details|Affirmative Action
        category = soup.find('span', attrs={'name': 'category'})
        differentlyAbled = soup.find('span', attrs={'name': 'differentlyAbled'})
        dob = soup.find('span', attrs={'name': 'dob'})
        gender = soup.find('span', attrs={'name': 'gender'})
        maritalStatus = soup.find('span', attrs={'name': 'maritalStatus'})

        # Other Details|Job Preference
        perferLocation = soup.find('span', attrs={'name': 'perferLocation'})
        job_type = soup.find('span', attrs={'name': 'job_type'})
        job_description = soup.find('span', attrs={'name': 'job_description'})
        expectedCTC = soup.find('span', attrs={'name': 'expectedCTC'})

        auth_url = 'http://ec2-52-66-88-28.ap-south-1.compute.amazonaws.com/oneapi/Post/'
        headers = {'content-type': 'application/json'}
        payload = {'canId': canId.text, 'aadharCardNo': '', 'age': '', 'area_of_specialization': '',
                   'first_name': first_name.text, 'last_name': last_name.text,
                   'candidate_name': first_name.text + '' + last_name.text, 'category': category.text,
                   'communicationrating': '', 'confidential': '', 'createdDate': '', 'createdUserID': '',
                   'createdBy': '', 'dob': dob.text, 'summary': summary.text, 'emp_status_c': '', 'exNationality': '',
                   'fedrated': '', 'functionText': '', 'gender': gender.text, 'hotNotes': '', 'hourly_rate': '',
                   'imageName': '', 'imgPhoto': imgPhoto['src'], 'industryText': industryText.text,
                   'job_description': job_description.text, 'job_type': job_type.text, 'language': '',
                   'lastModifiedUserID': '', 'modifiedby': '', 'lastUpdateDate': '', 'mobile': mobile.text,
                   'maritalStatus': maritalStatus.text, 'nationality_c': '', 'notes': '', 'noticePeriod': '',
                   'officePh': '', 'officePhExt': '', 'pANNo': '', 'passportNo': '', 'passportValidity': '',
                   'perferLocation': perferLocation.text, 'phoneH': '', 'differentlyAbled': differentlyAbled.text,
                   'differentlyAbled_type': '', 'phychallenged': '', 'pref_distance': '', 'reason_change': '',
                   'reason_relocate': '', 'references_1': '', 'references_2': '', 'releventExp': '', 'relocate': '',
                   'res_headline': headline.text, 'searchsheet': '', 'shift_work': '', 'sLL_Number': '', 'source': '',
                   'subFunctionText': '', 'subIndustryText': '', 'willing_to_relocate': '', 'willingToChangeJob': '',
                   'workingFrom': '', 'originalFileName': '', 'modifiedFileName': '', 'resume': resume.text,
                   'fresher': '',
                   'email': {'primary': email_id.text, 'secondary': '', 'third': '', 'fourth': '', 'fifth': ''},
                   'skill': {'skills': {'lastUsed': '', 'expirence': '', 'text': skills.text},
                             'one': {'lastUsed': '', 'expirence': '', 'text': one.text},
                             'two': {'lastUsed': '', 'expirence': '', 'text': two.text},
                             'three': {'lastUsed': '', 'expirence': '', 'text': three.text},
                             'four': {'lastUsed': '', 'expirence': '', 'text': four.text},
                             'five': {'lastUsed': '', 'expirence': '', 'text': five.text}}, 'address': {
                'permanentAddress': {'country': country.text, 'city': city.text, 'street': '', 'location': '',
                                     'state': '', 'pincode': ''},
                'currentAddress': {'country': '', 'city': '', 'street': '', 'location': '', 'state': '',
                                   'pincode': ''}}, 'education': {
                'ug': {'degree': degree.text, 'degree_type': degree_type.text, 'course': course.text,
                       'institute': institute.text, 'university': institute.text, 'from_where': from_where.text,
                       'to': ugto.text, 'year': ugyear.text, 'percentage': '', 'eduDetails': ''},
                'pg': {'degree': '', 'degree_type': '', 'course': '', 'institute': '', 'university': '',
                       'from_where': '', 'to': '', 'year': '', 'percentage': '', 'eduDetails': ''},
                'doctorate': {'year': '', 'percentage': '', 'course': '', 'institute': '', 'eduDetails': ''},
                'tength': {'school': '', 'specification': '', 'city': '', 'board': '', 'from_where': '', 'to': '',
                           'year': '', 'percentage': '', 'eduDetails': ''},
                'diploma': {'year': '', 'percentage': '', 'course': '', 'institute': '', 'eduDetails': ''},
                'twelveth': {'school': twelthschool.text, 'specification': twelthspecification.text,
                             'city': twelthcity.text, 'board': '', 'from_where': '', 'to': twelthto.text,
                             'year': twelthyear.text, 'percentage': '', 'eduDetails': ''},
                'certificates': {'certificates_title': '', 'certificates_from': '', 'certificates_to': '',
                                 'certificates_description': ''}}, 'employment': {
                'current': {'workLocation': workLocation.text, 'role': role.text, 'level': '', 'teamSize': '',
                            'organization': organization.text, 'designation': designation.text,
                            'current_city': current_city.text, 'current_from': current_from.text,
                            'present_date': present_date.text, 'current_description': current_description.text},
                'previous': {'organization1': '', 'organization': '', 'organization2': '', 'organization3': '',
                             'organization4': '', 'designation': '', 'previous_city': '', 'previous_from': '',
                             'previous_to': '', 'previous_description': ''},
                'achievement': {'achievement_title': '', 'achievement_from': '', 'achievement_to': '',
                                'achievement_description': ''}},
                'project': {'project_title': project_title.text, 'project_role': project_role.text,
                               'project_from': project_from.text, 'project_to': project_to.text,
                               'url': project_url.text, 'project_description': project_description.text},
                'salary': {'negotiableCTC': '', 'presentCTC': '', 'type_of': '', 'expectedCTC': expectedCTC.text,
                              'presentCTC_type': '', 'expectedCTC_type': ''},
                'experience': {'months': '', 'TotalExp': experience.text, 'years': experience.text}}

        r = requests.post(auth_url, headers=headers, data=dumps(payload))
        return HttpResponseRedirect('http://127.0.0.1:8000/')



