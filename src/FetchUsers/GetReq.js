import React from "react";
import { useState } from "react";
import Profile from "./Profile";

const GetRqe = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (response) => {
        const data = await response.json();
        setUsers(data);
        console.log("Response:", data);
      })
      .then((response) => {
        alert("Got The Response");
      })
      .catch((err) => {
        alert("Could not get the Response");
        console.log(err);
      });
  };

  return (
    <>
      <h2>Get Request using fetch ()</h2>
      <button onClick={getUsers}>Get users</button>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((user, i) => <Profile key={user.id} {...user} />)}
      </section>
    </>
  );
};

export default GetRqe;

// git repository cant be transferred, not connected to any server, it cant be seen. It is just a file git can read and operate.
// Configuration is needed to track changes by the git.

// nothing to commit means you havent made any changes.

// git commit - that is commiting purposefully, the file of which we want to keep history.

// git add .  OR  git add --all

// Why staging area is there??
// We can choose which files to be commited and which do not. i.e aapan multiple files modify kelya aahet so tyatil kontya commit karayachya aani kontya nahi.
// We can modifify them if want.

// Unstage Changes.
// git reset HEAD <file>
// git restore <file>  // to discard the changes in the working directory.

// git log
// tell history of what we have.
// git log --patch
// to get additional information about commits

// exit the page with q

// commiting a Folder
//*// git only track files and dosenot track folders.
// To detect(commit) a folder we should have files in it. so create empty file .gitkeep by commond
// touch <folder>/.gitkeep  // create gitkeep file into the folder.
// when we add and commit the folder it actually adds amd commits the file and not the folder.
// .gitkeep file is to detect/track the folder.

//*// touch <file>  // creat file
//*// touch <folder>/<file>  // creact file in that folder.

// Deleting Files
// If untracked file run following commond to delete it
// rm <file>
// rm -rf -- <folder>

// already staged/commited file jar delete karayachi asel tar commond => git commit
// working directory varun remove karun bakichya files commit karayachya

// .gitignore
// Folder madhe ashya files aahet jya tumhala git chya part nahi banvaychya aahet tar kay karayach?
// vim .gitignore
// vim editor open hoil tyavar file, folder name lihayach ani ru commond
// Esc :wq (save the files)

// gitignore madhe basically local files, dependency valya files astat.
