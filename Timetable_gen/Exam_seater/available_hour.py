from datetime import datetime, timedelta
import numpy as np

def calculate_working_hours(start_date, end_date, hours_per_day=8, exclude_weekends=True):
    # Convert string dates to datetime objects
    start = datetime.strptime(start_date, "%Y-%m-%d")
    end = datetime.strptime(end_date, "%Y-%m-%d")
    
    # Calculate total days between dates
    total_days = (end - start).days + 1
    
    # Generate a list of all dates within the range
    all_dates = [start + timedelta(days=i) for i in range(total_days)]
    
    # Filter only working days if exclude_weekends=True
    if exclude_weekends:
        working_days = [d for d in all_dates if d.weekday() < 5]  # Monday-Friday
    else:
        working_days = all_dates
    
    # Total working days
    total_working_days = len(working_days)
    
    # Total working hours
    total_hours = total_working_days * hours_per_day
    
    # Average working days per month
    # months_spanned = np.unique([d.strftime("%Y-%m") for d in working_days])  # Unique months
    # avg_working_days_per_month = total_working_days / len(months_spanned)
    
    # # Average hours per day
    # avg_hours_per_day = total_hours / total_days
    
    return {
        "Total Working Days": total_working_days,
        "Total Hours Available": total_hours,
        # "Average Working Days Per Month": round(avg_working_days_per_month, 2),
        # "Average Hours Per Day": round(avg_hours_per_day, 2)
    }

# Example Input
# start_date = "2024-01-01"
# end_date = "2024-03-31"
# hours_per_day = 6

# # Calculate
# result = calculate_working_hours(start_date, end_date, hours_per_day)
# print(result)
