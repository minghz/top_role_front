require 'json'

def filter_by_source_phb(filepath)
  source_json = File.read(filepath)
  hash = JSON.parse(source_json)
  hash['background'].select { |b| b['source'] == 'PHB' }
end

def parsed_language_proficiencies(lang_prof_arr)
  if lang_prof_arr
    ["#{lang_prof_arr.first['anyStandard']} of your choice"]
  else
    []
  end
end

def parsed_tool_proficiencies(tool_prof_arr)
  if tool_prof_arr
    tool_prof_arr[0].keys
  else
    []
  end
end

def parse_equipment_from_entries(entries)
  list = entries.find {|e| e['type'] == "list" }
  item = list['items'].find { |i| i["name"] == "Equipment" }
  item['entry']
end

def parse_feature_from_entries(entries)
  feature_entry = entries.find { |e| e['data'] && e['data']['isFeature'] }
  {
    name: feature_entry['name'],
    description: feature_entry['entries']
  }
end

def parse_specialty_from_entries(entries)
  specialty = entries.find { |e| e['name'] && e['name'] == 'Specialty' }
  return {} unless specialty

  {
    label: specialty['entries'][1]['colLabels'][1],
    description: specialty['entries'][0],
    rollDice: { faces: specialty['entries'][1]['colLabels'][0].gsub(/[d]/, '') },
    rolls: specialty['entries'][1]['rows'].to_h
  }
end

def parse_characteristics_from_entries(entries)
  characteristics = entries.find { |e| e['name'] == 'Suggested Characteristics' }
  {
    description: characteristics['entries'][0],
    characteristics: parsed_characteristics(characteristics['entries'][1..-1])
  }
end

def parsed_characteristics(characteristics)
  characteristics.map do |char|
    {
      label: char['colLabels'][1],
      rollDice: { faces: char['colLabels'][0].gsub(/[d]/, '') },
      rolls: char['rows'].to_h
    }
  end
end

backgrounds = filter_by_source_phb('./backgrounds.json')

#pretty_json = JSON.pretty_generate(backgrounds)
#File.write('./sanitized_backgrounds1.json', pretty_json)

sanitized_backgrounds = backgrounds.map do |bg|
  # skip variants for now
  next if bg.keys.include?('_copy')

  # proficiencies
  bg['proficiencies'] = {
    skills: bg["skillProficiencies"][0].keys,
    languages: parsed_language_proficiencies(bg["languageProficiencies"]),
    tools: parsed_tool_proficiencies(bg["toolProficiencies"])
  }
  bg.delete("skillProficiencies")
  bg.delete("languageProficiencies")
  bg.delete("toolProficiencies")

  entries = bg.delete('entries')
  # equipment
  bg['equipment'] = parse_equipment_from_entries(entries)

  # feature
  bg['feature'] = parse_feature_from_entries(entries)

  # specialty
  bg['specialty'] = parse_specialty_from_entries(entries)

  # suggested characteristics
  bg['suggested_characteristics'] = parse_characteristics_from_entries(entries)
  
  bg
end.compact

pretty_json = JSON.pretty_generate(sanitized_backgrounds)
puts pretty_json
File.write('./sanitized-backgrounds.json', pretty_json)

