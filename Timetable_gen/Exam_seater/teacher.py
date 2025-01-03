class Teacher:
    def __init__(self, name, subjects, total_hours_per_day):
        """
        Initialize a Teacher instance.
        :param name: str - Name of the teacher
        :param subjects: list - List of subjects the teacher can teach
        :param total_hours_per_day: int - Total hours per day the teacher can take classes
        """
        self.name = name
        self.subjects = subjects
        self.total_hours_per_day = total_hours_per_day
        self.remaining_hours = total_hours_per_day
        self.todays_shedule=[]

    def can_teach(self, subject):
        """
        Check if the teacher can teach a given subject.
        :param subject: str - The subject to check
        :return: bool - True if the teacher can teach the subject, False otherwise
        """
        return subject in self.subjects

    def get_schedule(self):
        """
        Get the teacher's schedule details.
        :return: dict - Teacher's name, subjects, and daily hours
        """
        return {
            'Name': self.name,
            'Subjects': self.subjects,
            'Total Hours Per Day': self.total_hours_per_day
        }

    def decrement_hours(self):
        """
        Decrement the remaining hours by 1 each time it's called.
        :return: int - Remaining hours
        """
        if self.remaining_hours > 0:
            self.remaining_hours -= 1
        return self.remaining_hours

    def reset_hours(self):
        """
        Reset the remaining hours back to the total available hours.
        """
        self.remaining_hours = self.total_hours_per_day


# Example usage:
teacher1 = Teacher(name="Alice", subjects=["Math", "Physics"], total_hours_per_day=6)

# Print teacher schedule
print(teacher1.get_schedule())

# Check if teacher can teach Biology
print("Can teach Biology?", teacher1.can_teach("Biology"))

# Check if teacher can teach Math
print("Can teach Math?", teacher1.can_teach("Math"))

# Decrement hours
print("Remaining Hours:", teacher1.decrement_hours())

# Reset hours
teacher1.reset_hours()
print("Hours after reset:", teacher1.remaining_hours)
