class ProjectsController < ApplicationController

	def usspending
		@doc = Nokogiri::HTML(open("http://www.usgovernmentspending.com/download_raw"));
		stats = @doc.xpath("//textarea")
		stats_text = stats.map do |i|
			text = i.text
		end
		stats_array = stats_text[0].split('
')
		years = []
		gdp = []
		axis_markers = 0
		# Seperates the data on each line based 
		# on the tab seperation.
		stats_array.each do |i|
			tabbed = i.split('	')
			tabbed = tabbed[0..1]

			# get years in a seperate array
			if tabbed[0] != 'Year'
				years << tabbed[0]
				gdp << tabbed[1]
			else
				axis_markers = {x: tabbed[0], y: tabbed[1]};
			end
		end

		rendering = [axis_markers,years,gdp]
		#get years

		# puts this_array
		render json: rendering
	end

	# Tried to use Selenium to have the site access itsself. This might have worked in the long-run.
	# def uptime
	# 	driver = Selenium::WebDriver.for :firefox
	# 	driver.navigate.to "https://www.uptrends.com/tools/uptime"

	# 	element = driver.findsById('UI_Tools_Url')
	# 	element.send_keys "http://www.alexschattner.com"
	# 	element.submit

	# 	nyDiv = element.find_element(:class, 'title').parent().
	# 	total_time = driver.find_element(:xpath, ".//font[text()='New York']/parent::.httpCheckPointResult/").find_element(:class, 'totaltime');
	# 	puts driver.title

	# 	driver.quit
	# 	doc = Nokogiri::HTML(open("http://www.host-tracker.com/InstantCheck/ResultComplete/679f5954-ca03-e511-80c3-0003ff733473"));
	# 	puts doc

	# 	render :json => doc
	# end

end