class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    quantity = Number(quantity);
    let isInTheArr = false;

    if (!this.possibleArticles[articleModel]) {
      // prowerka dali sushtestwuwa takuw klyuch w obekta
      throw new Error("This article model is not included in this gallery!");
    }

    for (const element of this.listOfArticles) {
      if (
        element.articleName === articleName &&
        element.articleModel === articleModel
      ) {
        element.quantity += quantity;
        isInTheArr = true;
      }
    }
    if (!isInTheArr) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }
    return `Successfully added article ${articleName} with a new quantity ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    for (let guest of this.guests) {
      if ((guest.guestName === guestName)) {
        throw new Error(`${guestName} has already been invited.`);
      }
    }
    let object = { guestName, points: 0, purchaseArticle: 0 };

    switch (personality) {
      case "Vip":
        object.points = 500;
        break;

      case "Middle":
        object.points = 250;
        break;

      default:
        object.points = 50;
        break;
    }
    this.guests.push(object);

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    articleModel = articleModel.toLowerCase();

    let article;
    let guest;

    let isArticleInTheArray = false;

    for (const element of this.listOfArticles) {
        if(element.articleName !== articleName || element.articleModel !== articleModel){
            isArticleInTheArray = false;
        }else {
            article = element;
            isArticleInTheArray = true;
            break;
        }
    }
    if(!isArticleInTheArray){
        throw new Error(`This article is not available.`);
    }
    if(article.quantity === 0 ){
        throw new Error(`The ${articleName} is not available.`);
    }
    let isGuestInTheArray = false;

    for (const element of this.guests) {
        if(element.guestName !== guestName){
            isGuestInTheArray = false; 
        } else {
            isGuestInTheArray = true;
            guest = element;
            break;
        }
    }
    if(!isGuestInTheArray){
        return `This guest is not invited.`;
    }
    if(guest.points < this.possibleArticles[articleModel]){
        return `You need to more points to purchase the article.`;
    }else {
        article.quantity--;
        guest.points-=this.possibleArticles[articleModel];
        guest.purchaseArticle++;
    }
    
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;

  }

  
}

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.inviteGuest("John", "Vip"));
console.log(artGallery.inviteGuest("Peter", "Middle"));
console.log(artGallery.inviteGuest("John", "Middle"));
