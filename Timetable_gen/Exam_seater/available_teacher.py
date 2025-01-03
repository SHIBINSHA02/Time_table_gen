import random

def generate_binary_array( cols, max_consecutive_ones, min_ones):
    rows=1
    def is_valid(row):
        """Check if the row has more than max_consecutive_ones."""
        count = 0
        for num in row:
            if num == 1:
                count += 1
                if count > max_consecutive_ones:
                    return False
            else:
                count = 0
        return True
    
    result = []
    for _ in range(rows):
        while True:
            row = []
            ones_count = 0
            for i in range(cols):
                # Generate either 0 or 1 based on constraints
                if len(row) < 2 or not (row[-1] == 1 and row[-2] == 1):
                    num = random.randint(0, 1)
                else:
                    num = 0  # Avoid adding the 3rd consecutive 1
                
                row.append(num)
                ones_count += num
            
            # Ensure the row meets minimum 4 ones and the consecutive constraint
            if ones_count >= min_ones and is_valid(row):
                break
        
        result.append(row)
    return result

# Generate 5x6 binary array
binary_array = generate_binary_array( cols=6, max_consecutive_ones=2, min_ones=4)

# Print result
for row in binary_array:
    print(row)
