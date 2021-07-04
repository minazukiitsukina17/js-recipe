const Name = {
    name: '安田樹奈',
    university: '立命館アジア太平洋大学',
    place: "京都に住んでいます",
    age: 23,
    hobby: ["読書', 'Youtubeでゲーム実況見ること',"一人旅],
    familly: {
      grandma: 'おばあちゃん',
      mama: '母',
      pet: "トイプードル",
    },
    isMentor: true,
    sayHello: function () {
      alert(`こんにちは${this.name}です!!`)
    },
  }
  ​
  console.log(Name.name)
  Name.sayHello()