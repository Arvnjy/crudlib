var faker = require('faker');

describe('API Test', () => { //Test Case

    it('Should request to get Data of Books', () => { //Test Scripts 

        cy.request({        //Parameters
            method: 'GET',      //GET Request
            url: '/books',
            body: {
                'id' : '',
                'title' : '',
                'author' : '',
                'updatedAt' : '',
                'createdAt' : ''
            },
            headers: {
                "content-type" : "application/x-www-form-urlencoded"                             //specifying that this is a Form Data
            }

        }).then((res) => {
            
            expect(res)
            expect(res).have.property('status', 200)    //for validations
            
        });

      });

        it.skip('Should be able to Create a book', () =>{     //Test Scripts
         var randomtitle = faker.name.title();
         var randomname = faker.name.firstName();
          cy.request({
            method: 'POST',       //Creating a New Book
            url: '/books',
            body: {

              'title': randomtitle,
              'author': randomname, 
              'updatedAt': '',
              'createdAt': ''

            },
            headers: {
              "content-type" : "application/x-www-form-urlencoded"
            }

          }).then(res => {

            expect(res)
            expect(res).to.have.property('status', 200)
            //expect(res.body).to.have.property('title', 'The Crane' , 'author', 'Washington')

            })
          })

        it.skip('Should Update the book ', () => {     //Test Scripts
          const book = {"id": "98", "title":"HarryPotter", "author":"JK Rowling", 
                        "updatedAt": "", "createdAt": ""} //Parameters
          cy.request({

            method: 'PUT',      // Updating a Book
            url: '/books/edit',
            body: book,
            headers: {
              "content-type" : "application/x-www-form-urlencoded",
            }

          }).then(res => {
            expect(res)
            expect(res).to.have.property('status', 200)
          });

        });

        it('Should be able to delete a book', () => {     // Test Scripts
          
          cy.request({
            method: 'DELETE',       // Deleting a Book
            url: '/books/delete/99',
            headers: {

              "content-type" : "application/x-www-form-urlencoded",
            
            }

          }).then(res => {
            expect(res)
            expect(res).to.have.property('status', 200)
          })

        })

    });