import { User } from "./user.model";


export class UserService{
    
    nextSeq;
    private users: User[] = [
         new User(1,'erkane','Erkan Erkişi','erkanerkisi@gmail.com','1234'
        ),
        new User(2,'volkane','Volkan Erkişi','volkanerkisi@gmail.com','1234'
        ),
        new User(3,'ahmetk','Ahmet Kova','ahmetkova@gmail.com','1234'
        ),
        new User(4,'murata','Murat Aydın','murataydin@gmail.com','1234'
        ),
       ];

       accessUsers(){
        return this.users;
       }

       getUsers(){
        return this.users.slice(); 
    }
       getIdSequence(){
        return this.nextSeq = Object.keys(this.users).length + 1
       }

       getUser(userid: number) {
        const user:User = this.users.find(
          (s) => {
            return s.userId == userid;
          }
        );
        return user;
      }


}