// Firebase Config

const firebaseConfig = {
  apiKey: "AIzaSyDSa9qm8yrBuWKggFqpl8wqV6GBkjpDGE4",
  authDomain: "intesab-blog-app.firebaseapp.com",
  projectId: "intesab-blog-app",
  storageBucket: "intesab-blog-app.appspot.com",
  messagingSenderId: "113829977787",
  appId: "1:113829977787:web:7481002ea3f6fa235d139e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, time, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  small.textContent = time;
  p.textContent = content;

  div.appendChild(h2);
  div.appendChild(small);
  div.appendChild(p);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();
