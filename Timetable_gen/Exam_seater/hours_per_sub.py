

def academic_subjects_ratio(subjects_with_hours):
    """
    Calculate the absolute hours allocated to each subject based on a total of 24 hours.
    :param subjects_with_hours: dict - A dictionary with subjects as keys and required hours as values.
    :return: dict - A dictionary with subjects as keys and their allocated hours (rounded).
    """
    total_hours = 24
    total_required_hours = sum(subjects_with_hours.values())
    allocated_hours = {}
    
    # Allocating the total 24 hours based on the ratio, rounded to absolute values
    for subject, hours in subjects_with_hours.items():
        allocated_hours[subject] = round((hours / total_required_hours) * total_hours)
    
    # Adjust the total hours to exactly 24 if rounding causes any deviation
    allocated_total = sum(allocated_hours.values())
    if allocated_total != total_hours: 
        # Find the difference and adjust the largest subject allocation
        diff = total_hours - allocated_total
        largest_subject = max(allocated_hours, key=allocated_hours.get)
        allocated_hours[largest_subject] += diff
        
      
    
    return allocated_hours

# Calculate academic subjects ratio
subjects_with_hours = {
    "Math": 6,
    "Physics": 8,
    "Chemistry": 0,
    "Biology": 0,
    "History": 7,
    "Geography": 1
}

print("Allocated hours:", academic_subjects_ratio(subjects_with_hours))
