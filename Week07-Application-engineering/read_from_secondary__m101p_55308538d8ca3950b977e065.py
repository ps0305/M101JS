
import pymongo
import time

read_pref = pymongo.read_preferences.ReadPreference.SECONDARY

c = pymongo.MongoClient(host=["mongodb://localhost:27017",
                              "mongodb://localhost:27018",
                              "mongodb://localhost:27019"],
                              read_preference=read_pref)

db = c.m101
things = db.things

for i in range(1000):
    doc = things.find_one({'_id':i})
    print "Found doc ", doc
    time.sleep(.1)

                        
'''You can configure your application vai the drivers to read from secondary nodes within a replica set.What are the reasons that you might not 
want to do that? write all that apply.

1-if your write traffic is great enough,and your secondary is less powerful than the primary,you may overwhelm the secondary,which must process all the
writes as well as the reads.Replication  lag can result

2-You may not read what you previously wrote to MongoDB on a secondary because it will lag behind by some amount.

3-If the secondary hardware has insuffieient memory to keep the working set in memory,directing reads to it will likely slow it down.'''



