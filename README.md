https://mandiuu.github.io/summons-map

# What is this?
This project explores the issuance of summonses in New York City from 2018 to 2023, focusing on the types of offenses, their locations, and the changes over the years. By utilizing an interactive map, the project provides an in-depth look at enforcement patterns and their impacts on different communities across NYC.

# Why?
Living in New York City, I noticed a prevalent issue with public disorder, particularly people under the influence of drugs and alcohol. Or screaming in the subway. Or doing whatever they wanted. This observation led to a deeper investigation into the patterns of summonses issued by the NYPD, providing a perspective on police enforcement in different neighborhoods.

# How?
With the NYPD Criminal Court Summons: Big datasets available on NYC OpenData, covering offenses, locations, and demographics from 2018 to 2023. And with Geocoding Data Address coordinates obtained via the Mapbox API for mapping purposes.

# But before that...
*Data Cleaning*

The raw data required a lot of cleaning and preparation:
Look for duplicates to ensure that the summons were unique
Handle missing values and filling or removing incomplete data points.
Standardize formats
Reporting if the dataset was correct.

*And then...*
Offense descriptions were categorized into broader categories for easier analysis:

*Categories:* Alcohol/Drugs, Bikes, Disobedience of Business Regulations, Disorderly Behavior, and Noise.

*Visualization*
The project utilized Python, R, and Mapbox for data visualization and cleaning, leveraging libraries such as Pandas. Mapbox was key, employed for creating interactive maps that allow users to explore summons data by location and category.

# Okay, but how?

1. Map Initialization (Mapbox GL JS):
Initialize the map with the specified style, center, zoom, and bounds.
Add data layers for displaying summonses.
2. Data Loading and Manipulation (D3.js):
Load CSV files for each year.
Parse and transform the data into GeoJSON format.
3. Geospatial Calculations (Turf.js):
Use Turf.js to check if summons points fall within precinct polygons.
Assign each summons to the correct precinct based on its coordinates.
4. Address Search and Precinct Lookup (Mapbox Geocoder and Turf.js):
Integrate Mapbox Geocoder for address searching.
On address search, use Turf.js to find the corresponding precinct and update the map with localized data.
5. Storytelling and Scrollytelling (Intersection Observer and Scrollama):
Set up Scrollama to handle scrolling interactions.
Define chapters with specific map views and transitions.
Use Intersection Observer to trigger map updates based on scroll position.


# And also!
Popups: When hovering over a point on the map, a popup displays detailed information about the summons.
Smooth Transitions: The map smoothly transitions between views when the user interacts with the sidebar or storytelling sections.
Potential Improvements
Enhanced Data Collection: Collaborate with local agencies for more detailed and timely data.
Broader Scope: Include additional data on police interactions and community responses.
Advanced Analysis: Conduct more detailed statistical analysis on the impact of summonses on different communities.