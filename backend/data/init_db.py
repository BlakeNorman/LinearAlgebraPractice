from backend.data.create_tables import create_tables
from backend.data.topics import create_topic
create_tables()

create_topic("Subspaces")
create_topic("Linear Transformations")
create_topic("Determinants")
create_topic("Systems of Linear Equations")

print("Tables created")

