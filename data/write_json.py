#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

# write files
def write_json(filename, obj,encoding = 'utf-8'):
    with open(filename, mode='w', encoding = encoding, newline = '') as written:
        written.write(obj)
    
    return 

frontend_frames = [{
        'site' : 'Vue',
        'url' : 'https://vuejs.org/'
    }, 
    {
        'site' : 'React',
        'url' : 'https://reactjs.org/'
    }
]

json0 = json.dumps(frontend_frames, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    write_json('data/frontFrameworks.json', json0)