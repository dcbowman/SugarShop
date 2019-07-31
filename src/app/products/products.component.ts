import { Component, OnInit } from '@angular/core';

import { IProduct } from '../shared/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string;
  items: IProduct[];

  constructor() { }

  ngOnInit() {
    this.title= 'Our Products';
    this.items = [
      {
      product_id: 1,
      product_name: "Men's Silk Tie",
      product_category: "Accessories",
      image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      price: 93.82,
      color: "Purple",
      description: "tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est"
      },
      {
      product_id: 2,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 69.02,
      color: "Red",
      description: "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id"
      },
      {
      product_id: 3,
      product_name: "Men's Casual Jacket",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 71.8,
      color: "Blue",
      description: "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim"
      },
      {
      product_id: 4,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 65.58,
      color: "Red",
      description: "ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio"
      },
      {
      product_id: 5,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 69.34,
      color: "Maroon",
      description: "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis"
      },
      {
      product_id: 6,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 35.01,
      color: "Goldenrod",
      description: "at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit"
      },
      {
      product_id: 7,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 60.11,
      color: "Yellow",
      description: "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis"
      },
      {
      product_id: 8,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 115.62,
      color: "Pink",
      description: "diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus"
      },
      {
      product_id: 9,
      product_name: "Men's Polo",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 84.67,
      color: "Goldenrod",
      description: "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus"
      },
      {
      product_id: 10,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 131.09,
      color: "Violet",
      description: "luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus"
      },
      {
      product_id: 11,
      product_name: "Men's Casual Jacket",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 117.9,
      color: "Yellow",
      description: "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat"
      },
      {
      product_id: 12,
      product_name: "Men's Overcoat",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 74.16,
      color: "Crimson",
      description: "odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede"
      },
      {
      product_id: 13,
      product_name: "Men's Silk Tie",
      product_category: "Accessories",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 110.04,
      color: "Mauv",
      description: "at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum"
      },
      {
      product_id: 14,
      product_name: "Men's Overcoat",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      price: 11.8,
      color: "Orange",
      description: "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada"
      },
      {
      product_id: 15,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 136.17,
      color: "Pink",
      description: "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis"
      },
      {
      product_id: 16,
      product_name: "Men's Casual Jacket",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 50.77,
      color: "Green",
      description: "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo"
      },
      {
      product_id: 17,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 90.04,
      color: "Pink",
      description: "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet"
      },
      {
      product_id: 18,
      product_name: "Men's Silk Tie",
      product_category: "Accessories",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 40.74,
      color: "Purple",
      description: "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris"
      },
      {
      product_id: 19,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      price: 94.36,
      color: "Orange",
      description: "duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit"
      },
      {
      product_id: 20,
      product_name: "Men's Overcoat",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 32.86,
      color: "Khaki",
      description: "vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel"
      },
      {
      product_id: 21,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 42.1,
      color: "Indigo",
      description: "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer"
      },
      {
      product_id: 22,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      price: 128.26,
      color: "Violet",
      description: "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla"
      },
      {
      product_id: 23,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      price: 100.06,
      color: "Teal",
      description: "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem"
      },
      {
      product_id: 24,
      product_name: "Men's Polo",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 52.54,
      color: "Goldenrod",
      description: "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio"
      },
      {
      product_id: 25,
      product_name: "Men's Casual Jacket",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 59.79,
      color: "Turquoise",
      description: "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede"
      },
      {
      product_id: 26,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      price: 57.27,
      color: "Indigo",
      description: "cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor"
      },
      {
      product_id: 27,
      product_name: "Men's Silk Tie",
      product_category: "Accessories",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 83.25,
      color: "Maroon",
      description: "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst"
      },
      {
      product_id: 28,
      product_name: "Men's Casual Jacket",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 122.46,
      color: "Yellow",
      description: "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit"
      },
      {
      product_id: 29,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      price: 55.07,
      color: "Red",
      description: "quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl"
      },
      {
      product_id: 30,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 74.31,
      color: "Mauv",
      description: "pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas"
      },
      {
      product_id: 31,
      product_name: "Men's Casual Jacket",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 74.05,
      color: "Aquamarine",
      description: "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut"
      },
      {
      product_id: 32,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 29.22,
      color: "Teal",
      description: "nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec"
      },
      {
      product_id: 33,
      product_name: "Men's Casual Jacket",
      product_category: "Jackets",
      image: "http://dummyimage.com/500x500.png/dddddd/000000",
      price: 102.72,
      color: "Fuscia",
      description: "magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis"
      },
      {
      product_id: 34,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 141.47,
      color: "Crimson",
      description: "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus"
      },
      {
      product_id: 35,
      product_name: "Men's Dress Shirt",
      product_category: "Dress Shirts",
      image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      price: 23.99,
      color: "Purple",
      description: "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis"
      },
      {
      product_id: 36,
      product_name: "Men's Casual Shirt",
      product_category: "Casual Shirts",
      image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      price: 146.4,
      color: "Indigo",
      description: "at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper"
      }
      ];
  }

}
