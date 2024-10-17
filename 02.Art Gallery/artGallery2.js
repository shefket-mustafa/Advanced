class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    quantity = Number(quantity);

    articleModel = articleModel.toLowerCase();

    if (!this.possibleArticles[articleModel]) {
      throw new Error("This article model is not included in this gallery!");
    }
    let existingArticleName = this.listOfArticles.find((x) => x.articleName === articleName);
    if (existingArticleName && existingArticleName.articleModel === articleModel) {
        existingArticleName.quantity += quantity;
      } else {
        this.listOfArticles.push({ articleModel, articleName, quantity });
       
      }
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest (guestName, personality){
        let existingGuest= this.guests.find(x=> x.guestName === guestName);

        if(existingGuest){
            throw new Error(`${guestName} has already been invited.`)
        } else {
            if(personality === 'Vip'){
            this.guests.push({guestName, points: 500, purchaseArticle: 0})
            } else if(personality === 'Middle'){
                this.guests.push({guestName, points: 250, purchaseArticle: 0})
            } else {
                this.guests.push({guestName, points: 50, purchaseArticle: 0})
            }
        }
        return `You have successfully invited ${guestName}!`
    }

    buyArticle ( articleModel, articleName, guestName){
        articleModel = articleModel.toLowerCase();
        let existingArticleName = this.listOfArticles.find(x=>x.articleName === articleName);
        let existingGuest = this.guests.find(x=>x.guestName === guestName);
        

        if(!existingArticleName){
            throw new Error("This article is not found.")
        }
        if(existingArticleName){
            if(existingArticleName.articleModel !== articleModel){
                throw new Error("This article is not found.");
            }
        }
        if(existingArticleName.quantity === 0){
            return `The ${articleName} is not available.`
        };

        if(!existingGuest){
            return `This guest is not invited.`
        } else {
            if(existingGuest.points < this.possibleArticles[articleModel]){
                return "You need to more points to purchase the article."
            } else {
                existingGuest.points-= this.possibleArticles[articleModel];
                existingGuest.purchaseArticle++;
                existingArticleName.quantity--
            }
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo (criteria){

            if(criteria === 'article'){
                let result = `Articles information:\n`;
                for (const article of this.listOfArticles) {
                    result+=`${article.articleModel} - ${article.articleName} - ${article.quantity}\n`
                }
                return result.trim();
            } else if(criteria === 'guest'){
                let result =`Guests information:\n`;
        
                for (const guest of this.guests) {
                    result+=`${guest.guestName} - ${guest.purchaseArticle}\n`;
                }
                return result.trim()
        }
    }

  }

  const artGallery = new ArtGallery('Curtis Mayfield'); 
  artGallery.addArticle('picture', 'Mona Liza', 3);
  artGallery.addArticle('Item', 'Ancient vase', 2);
  artGallery.addArticle('picture', 'Mona Liza', 1);
  artGallery.inviteGuest('John', 'Vip');
  artGallery.inviteGuest('Peter', 'Middle');
  artGallery.buyArticle('picture', 'Mona Liza', 'John');
  artGallery.buyArticle('item', 'Ancient vase', 'Peter');
  console.log(artGallery.showGalleryInfo('article'));
  console.log(artGallery.showGalleryInfo('guest'));
