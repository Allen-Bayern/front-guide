#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

# some Python dicts
frameworks = dict()

frameworks['sites'] =[
    {
        'name' : 'jQuery',
        'url' : 'https://jquery.com/'
    },
    {
        'name' : 'Angular',
        'url' : 'https://angular.io/'
    },
    {
        'name' : 'React',
        'url' : 'https://reactjs.org/'
    },
    {
        'name' : 'Vue',
        'url' : 'https://cn.vuejs.org/'
    }
]

string = json.dumps(frameworks, ensure_ascii=False, indent = 4)

with open('frameworks.json', mode = 'w', encoding='utf-8') as wf:
    wf.writelines(string)