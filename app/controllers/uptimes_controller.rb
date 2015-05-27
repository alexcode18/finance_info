class UptimesController < ApplicationController
  def index
  end

  def create
	  @doc = Nokogiri::HTML(open("http://b.h-t.co/679f5954-ca03-e511-80c3-0003ff733473"));
		stats = @doc.xpath("//tspan")
		stats = stats[2..stats.length]
		
		stats_text = stats.map do |i|
			text = i.text.split(' ')
			text[0].to_f.round(3)
		end

		new_uptime = Uptime.create({avg_speed: stats_text.last, size: stats_text.first, download: stats_text[1]})
		render :json => stats_text
  end

  def update
  end

  def delete
  end

end
