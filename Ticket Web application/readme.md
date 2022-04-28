To run application, 

    for server run `yarn i && npx prisma migrate dev --name init  && yarn start` 
        (NOTE : keep mysql data base running)

    for client run `yarn && yarn start`

functionality : 
1. User have to be signed in to see ticket page 
2. Password is stored in encrypted formate.
3. Deleted Tickets will show in Data base as isDeleted true
4. ticket table have sorting feature
