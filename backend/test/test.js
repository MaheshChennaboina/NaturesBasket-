import chai from "chai";
import chaiHttp from "chai-http";
const server = "http://localhost:5000";

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe("Products", () => {
  describe("/GET products", () => {
    it("it should GET all the products", (done) => {
      chai
        .request(server)
        .get("/products")
        .end((err, res) => {
          if(err) console.log(err)
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  })
  describe("/GET one product", () => {
    it("it should get a product", (done) => {
      chai
        .request(server)
        .get("/product/product1")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  })
  describe("/POST user", () => {
    const product = {
      name: "Beans - 250 g",
      category: "Vegetables",
description: "French beans are the most popular choice among vegetables of the bean family. It can be cooked in multiple ways: sautéed with onions and potatoes, stir fried with coconut, or simply boiled with a pinch of turmeric and salt. #Good source of protein, thiamin, riboflavin, niacin, calcium, iron, magnesium, phosphorus, potassium, copper, and dietary fiber #Rich in vitamins A, B6, C, and K",
    };
    it("If any required field is missing user should not get posted.", (done) => {
      chai
        .request(server)
        .post("/products")
        .send(product)
        .end((err, res) => {
          res.should.have.status(400);
          // res.body.should.be.a("object");
          done();
        });
    });
  });
});
// let mongoose = require("mongoose");
// let Posts = require('./models/Posts');

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = "http://localhost:5000/api";
// let should = chai.should();
// var expect = chai.expect

// chai.use(chaiHttp);

// describe('Products', () => {
//   describe('/GET products', () => {
//     it('it should GET all the products', (done) => {
//       chai.request(server)
//         .get('/products')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           done();
//         });
//     });
//   });
//   describe('/POST product', () => {
//     it('it should not POST a product without all fields', (done) => {
//       let product = {
//         price: 32.35,
//         name: "Beans - 250 g",
//         category: "Vegetables",
//       }
//       chai.request(server)
//         .post('/products')
//         .send(product)
//         .end((err, res) => {
//           res.should.have.status(400);
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//   });
// });


// describe('Shoes', () => {
//   describe('/GET Shoes', () => {
//     it('it should GET all shoes', (done) => {
//       chai.request(server)
//         .get('/shoes')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           done();
//         });
//     });
//   });
//   describe('/POST shoes', () => {
//     it('it should not POST a food item without all fields', (done) => {
//       let shoe = {
//         name: "Price Breakup Tub Italian Popcorn + 2 Large Coke(0) 720 COKE LARGE(2) ...",
//         brand: "ADDIDAS",
//         image: "1.jpg",
//         price: 23400
//       }
//       chai.request(server)
//         .post('/shoes')
//         .send(shoe)
//         .end((err, res) => {
//           res.should.have.status(400);
//           res.body.should.be.a('object');
//           res.body.should.have.property('message');
//           expect(res.body.message).to.include('size: Path `size` is required.');
//           expect(res.body.message).to.include('comments: Path `comments` is required.');
//           expect(res.body.message).to.include('type: Path `type` is required.');
//           expect(res.body.message).to.include('rating: Path `rating` is required.');
//           expect(res.body.message).to.include('gender: Path `gender` is required.');
//           expect(res.body.message).to.include('description: Path `description` is required.');
//           expect(res.body.message).to.include('views: Path `views` is required.');
//           expect(res.body.message).to.include('date: Path `date` is required.');
//           done();
//         });
//     });
//   });
// });



// describe('User', () => {
//   describe('/GET user', () => {
//     it('it should GET all users', (done) => {
//       chai.request(server)
//         .get('/users')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           done();
//         });
//     });
//   });
//   describe('/POST user', () => {
//     it('it should not POST a user without all fields', (done) => {
//       let user = {
//         name: "7021904275",
//         email: "user23@gmail.com",
//         googleId: "987y2de"
//       }
//       chai.request(server)
//         .post('/users')
//         .send(user)
//         .end((err, res) => {
//           res.should.have.status(400);
//           res.body.should.be.a('object');
//           res.body.should.have.property('message');
//           expect(res.body.message).to.include('profileImg: Path `name` is required.');
//           expect(res.body.message).to.include('givenName: Path `about` is required.');
//           expect(res.body.message).to.include('liked: Path `image` is required.');
//           done();
//         });
//     });
//   });
// });

// describe('Coupouns', () => {
//   describe('/GET coupouns', () => {
//     it('it should GET all coupouns', (done) => {
//       chai.request(server)
//         .get('/coupouns')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           done();
//         });
//     });
//   });
//   describe('/GET:code organizers', () => {
//     it('it should GET all organizers', (done) => {
//       chai.request(server)
//         .get('/coupouns:code')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           done();
//         });
//     });
//   });
// });

// describe('Brands', () => {
//   describe('/GET brands', () => {
//     it('it should GET all brands', (done) => {
//       chai.request(server)
//         .get('/brands')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           done();
//         });
//     });
//   });
// });