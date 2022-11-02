What columns violate 1NF?
food_code ,food_description.

What entities do you recognize that could be extracted?
dinner,venue,food.


Name all the tables and columns that would make a 3NF compliant solution.

member information:

 member_id | member_name | member_address 


venue information:

 venue_code  venue_description 


dinner information:

 dinner_id |dinner_date| food_code 


food information:

food_code |food_description 


member dinner information:
id | dinner_id|member_id 

member venue information:

id | dinner_id|venue_code  