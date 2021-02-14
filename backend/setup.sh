mongo memeapp --eval "db.dropDatabase()" 
mongoimport -d memeapp -c memes --file data/export_memeapp_memes.json
