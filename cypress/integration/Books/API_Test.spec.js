var faker = require('faker');

describe('API Test', () => { //Test Case

    it.skip('Should request to get Data of Books', () => { //Test Scripts 

        cy.request({        //Parameters
            method: 'GET',      //GET Request
            url: '/books',      //endpoint

            headers: {
                "content-type" : "application/x-www-form-urlencoded"                             //specifying that this is a Form Data
            }

        }).then((res) => {
            
            expect(res).have.property('status', 200)    //for validations
            expect(res).to.not.be.null
            expect(res.body).to.have.length(10)
            
        });

      });

        it('Should be able to Create a book', () =>{     //Test Scripts
        // var randomtitle = faker.name.title();
        // var randomname = faker.name.firstName();
          cy.request({
            method: 'POST',       //Creating a New Book
            url: '/books',        //Endpoint
            body: {

              'title': 'Goblin',
              'author': 'Matt', 
              'updatedAt': '',
              'createdAt': ''

            },
            headers: {
              "content-type" : "application/x-www-form-urlencoded"
            }

          }).then(res => {

            expect(res).to.have.property('status', 200)
            expect(res).to.not.be.null
            expect(res.body).to.have.property('title', 'Goblin' , 'author', 'Matt', 'updatedAt',
                                              '', 'createdAt', '')

            })
          })

        it.only('Should Update the book ', () => {     //Test Scripts
          const book = {"id": "101", "title":"Goblin", "author":"JK Rowling", 
                        "updatedAt": "", "createdAt": ""} //Parameters
          cy.request({

            method: 'PUT',      // Updating a Book
            url: '/books/edit',
            body: book,
            headers: {
              "content-type" : "application/x-www-form-urlencoded",
            }

          }).then(res => {
        
            expect(res).to.have.property('status', 200)
            expect(res.body).to.not.be.null
            expect(res.body).to.have.property('title', 'Goblin' , 'author', 'JK Rowling', 'updatedAt',
            '', 'createdAt', '')

        
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

            expect(res).to.have.property('status', 200)
          
          })

        })

    });