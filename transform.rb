#!/usr/bin/env ruby

require "json"
require "liquid"


class Hash
  def remap(hash={})
    each { |k,v| yield hash, k, v }
    hash
  end
end


ARCS = [
  { name: "USE", r: 130 },
  { name: "RESEARCH", r: 220 },
  { name: "PHASE OUT", r: 310 },
  { name: "AVOID", r: 400 }
]

class Layout

  OFFSET = {
    "Data Mgt" => 0,
    "Techniques; Frameworks & Tools" => 90,
    "Platforms & Infrastructure" => 180, 
    "Languages" => 270,
  }

  def self.angles(start, step)
    Proc.new do
      Range.new(start, 90-start).step(step).to_a.shuffle +
      Range.new(start + (step * 0.5).to_i, 90-start).step(step).to_a.shuffle
    end
  end

  ANGLES = {
    adopt: angles(10, 13),
    trial: angles(8, 12), 
    assess: angles(6, 10), 
    hold: angles(4, 8), 
  }

  def self.instance(quadrant, ring)
    @instances ||= {}
    @instances["#{quadrant}:#{ring.to_s}"] ||= Layout.new(quadrant, ring)
  end

  def initialize(quadrant, ring)
    @offset = OFFSET[quadrant]
    @angles = ANGLES[ring].call
  end

  def next_angle
    @offset + @angles.shift.to_i
  end
end


class Blip
  attr_reader :name, :quadrant, :score, :url

  def initialize(name, quadrant, score, url)
    @name, @quadrant, @score, @url = name, quadrant, score, url
    @moved = false
  end

  def moved!
    @moved = true
  end

  def ring
    return :adopt if score >= 1.5
    return :trial if score >= 0
    return :assess if score >= -1
    return :hold
  end

  def radius
    return (50..ARCS[0][:r]-10).to_a.sample if ring == :adopt
    return (ARCS[0][:r]+10..ARCS[1][:r]-10).to_a.sample if ring == :trial
    return (ARCS[1][:r]+10..ARCS[2][:r]-10).to_a.sample if ring == :assess
    return (ARCS[2][:r]+10..ARCS[3][:r]-10).to_a.sample
  end

  def angle
    Layout.instance(quadrant, ring).next_angle
  end

  def movement
    @moved ? "t" : "c"
  end

  def sortkey
    [ ring, name.downcase ]
  end

  def as_data
    item = { :name => name, :pc => { :r => radius, :t => angle }, :movement => movement }
    item[:url] = url unless url.to_s.strip.empty?    
    return item
  end
end


class Radar
  def initialize(path)
    @blips = Radar.parse(path)
  end

  def [](name)
    @blips[name]
  end

  def track_moves(previous)
    @blips.each do |name, blip|
      prev_ring = previous[name].ring rescue "nil"
      if prev_ring != blip.ring
        puts "#{name}: #{prev_ring.upcase} --> #{blip.ring.upcase}"
        blip.moved!
      end
    end
  end

  # render blips as json into js template
  def render
    snippets = @blips.values.group_by(&:quadrant).remap do |hash, key, value|
      short_key = key.scan(/\w+/).first.downcase
      hash[short_key] = JSON.pretty_generate(value.sort_by(&:sortkey).map(&:as_data))
    end
    snippets["arcs"] = JSON.pretty_generate(ARCS)
    template = Liquid::Template.parse(open("radar_data.js.liquid").read)
    open("radar_data.js", "w") do |out|
      out.puts template.render(snippets)
    end
  end

  # parse tab-separated data (exported from google doc)
  def self.parse(path)
    blips = {}
    open(path).each do |line|
      cols = line.split("\t")
      name, quadrant, score, skip, url = cols[0], cols[1], cols[3], cols[6], cols[7]
      next if score == "Score"
      next if score.nil? || score.strip.empty? || skip == "FALSE"
      blip = Blip.new(name, quadrant, score.to_f, url)
      blips[blip.name] = blip
    end
    blips
  end
end

files = Dir["data/*.tsv"]
radar = Radar.new(files.pop)
previous = files.pop
radar.track_moves(Radar.new(previous)) if previous
radar.render

