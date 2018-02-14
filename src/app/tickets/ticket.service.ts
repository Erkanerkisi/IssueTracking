import { Ticket } from "./ticket/ticket.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Comment } from "./comments/comment.model";
import { User } from "../users/user.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class TicketService {

  ticketSelected = new EventEmitter<Ticket>();

  
  nextSeq: number;


  private tickets: Ticket[] = [
    new Ticket(1, 'IT-1001',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut porta mi. Sed commodo ac enim non egestas. Morbi pellentesque sodales lacus, nec facilisis lorem commodo quis. Aenean in enim vel erat ullamcorper eleifend ac et nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec risus dolor, imperdiet non sem sed, luctus rutrum quam. Vestibulum mollis pellentesque nisi, eget porta urna vehicula ac. Phasellus id nulla at purus consectetur ultricies. Ut tempus facilisis nulla eget facilisis. Donec diam magna, bibendum ac aliquet vitae, varius facilisis dui. Quisque sapien urna, gravida nec sem eleifend, sagittis vehicula dolor. Duis eu consectetur purus. Phasellus eu mi quam. Ut id leo vitae erat mollis dictum a ut leo. Proin ut efficitur sapien. Mauris interdum, turpis eget tincidunt consequat, sem lacus bibendum odio, id ultrices sem diam ut nibh.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    ),
    new Ticket(2, 'IT-1002',
      'Etiam velit leo, porttitor ultricies dictum quis, congue eget eros?',
      'Vestibulum suscipit, mauris in dictum sodales, massa libero dapibus mauris, in imperdiet nisl ex in lorem. Quisque commodo in tellus et placerat. Curabitur nec velit sit amet ante molestie ultrices. In nibh justo, vulputate nec vestibulum ut, vehicula id est. Sed quis lorem tristique, volutpat sapien quis, scelerisque leo. Praesent eu vulputate orci. Integer consectetur leo nibh, at dignissim nulla effi',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    ),
    new Ticket(3, 'IT-1003',
      'Nam eget eros vulputate, luctus augue eu, tempus tortor?',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sit amet fermentum leo. Ut tempus ornare ex ut sagittis. Donec vitae lacus eget massa tristique luctus eu quis tellus. Sed ac ligula eu leo consectetur aliquam. Curabitur et dapibus lectus, in auctor massa. Nam nec tellus ac tortor malesuada rutrum. Sed aliquam ut mi sed dapibus. Donec vestibulum ultrices arcu. Vivamus vestibulum et ex non luctus.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    ),
    new Ticket(4, 'IT-1004',
      'Integer porttitor dignissim lacus id vestibulum?',
      'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    )
    ,
    new Ticket(5, 'IT-1005',
      'Integer porttitor dignissim lacus id vestibulum?',
      'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    )
    ,
    new Ticket(6, 'IT-1006',
      'Integer porttitor dignissim lacus id vestibulum?',
      'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    )
    ,
    new Ticket(7, 'IT-1007',
      'Integer porttitor dignissim lacus id vestibulum?',
      'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    )
    ,
    new Ticket(8, 'IT-1008',
      'Integer porttitor dignissim lacus id vestibulum?',
      'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    )
    ,
    new Ticket(9, 'IT-1009',
      'Integer porttitor dignissim lacus id vestibulum?',
      'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    )
    ,
    new Ticket(10, 'IT-1010',
      'Integer porttitor dignissim lacus id vestibulum?',
      'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    )
    ,
    new Ticket(11, 'IT-1011',
      'Integer porttitor dignissim lacus id vestibulum?',
      'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.',
      'Open',
      'Task',
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      ),
      new User(4, 'murata', 'Murat Aydın', 'murataydin@gmail.com', '1234'
      )
      , []
    )
  ];

  private tic = new BehaviorSubject<Ticket[]>(this.tickets);
  cast = this.tic.asObservable();


  accessTickets() {
    return this.tickets;
  }

  getTickets() {
    
    return this.tickets.slice();
  }
  getIdSequence() {
    return this.nextSeq = Object.keys(this.tickets).length + 1
  }

  getTicket(ticketid: number) {
    const ticket: Ticket = this.tickets.find(
      (s) => {
        return s.ticketId == ticketid;
      }
    );
    return ticket;
  }



}