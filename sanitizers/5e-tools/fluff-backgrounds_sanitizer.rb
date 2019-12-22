require 'json'

source_json = File.read('./fluff-backgrounds.json')

hash = JSON.parse(source_json)

wanted_bg = hash['background'].select { |b| b['source'] == 'PHB' }

pretty_json = JSON.pretty_generate(wanted_bg)

File.write('./sanitized-fluff-backgrounds.json', pretty_json)
