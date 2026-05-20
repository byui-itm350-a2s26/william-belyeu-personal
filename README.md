## Vue Events Bulletin Board

This is the code for the Vue.js [tutorial on Scotch.io](https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-introduction). In the tutorial we build a events bulletin board application and cover the basics of [Vue](http://vuejs.org/).


## Installation

Change the directory to `node-bulletin-board` and follow the commands:

1. Run `npm install`.
2. Run `node server.js`.
3. Visit [http://localhost:8080](http://localhost:8080).

   <img width="1199" alt="image" src="https://github.com/user-attachments/assets/2cf0d1b5-5dde-491c-a158-8425df4576c5">

## guide to using Git
There are several commands that will come up while using Git:
* add. This command is fairly common to use in Git. It is used to add things to the repo. Or rather, it stages it to be pushed to the repository. 
   An example, in rutine use you added code. Now, for the team you work with, you need to get that code to them. You add it to the staging area.
* commit is after add but before push, it is the stage a comment is normally added about the why or what of the change that is being pushed.
* push is the next step of add. Once something has been added to the staging area, it needs the push command run.    
   Use case, continueing what you started with add you still haven't gotten the changes to the program to your team. To do so, you must use Git Push. Once you've done so, the change is now on your repo as well as your machine. Well done!
* pull. This is used to pull. If push sent changes to the repo, pull pulls them from the same. It is highly useful in a project with a team, as running a pull can be used to keep everyone working on the same place even as they keep working on the code. 
   Use case, I'll keep going with the story from earlier. The team still doesn't have your update, as it is on the repo. One notices there is an update to the repo, and realizing what it is uses the git pull commmand. Now, finally, your changes have made it to a crew member.
* log shows the list of commits. It can be minipulated through a few keys, for example git log --oneline condenses the report to a single line. 
   To continue the use case, before he starts using the new code, your crew member wants to check what you changed. But, he was using an old version of the file. So, he uses log to isolate what changes came from your recent, specific update.
* diff is used to study code that has been changed. It highlights the specific lines of code that are different. Specifically, that haven't been pushed to the repo yet. 
   The team member, satisfied with reading the code sent, begins his work in ernest. Reaching a stage, he is about to push when he notices something is gone. Using diff, he choses to check to see if he deleted a line he wasn't supposed to. Finding it, he copies the code and puts it back in. Then, he pushes to the depo.
* show is used to show details and content changes of commits and objects. 
   Use case, another member of the team at this stage pulls the depo. Checking it he first skims it. Then, a little confused on what exactly was changed by who, he uses git show to check. Quickly, he isolates which pushes were which.
* stash is used to hide changes made. Functionally saving it, but allowing the programmer to open another branch without pushing that stashed code yet.
* revert undoes a recent commit. It doesn't overwrite the last push,  meaning that it can still be read. Useful in bug testing as they can then use it to isolate the bug. 
   Use case, having made an error but also having made progress, a programmer chooses to revert then check the exact changes. Then, he begins sorting through the code to try and get it working again.
* reset Is another redo, this one just goes back to the last commit. This deletes the changes made since then, so it likely shouldn't be used if the cause of an error needs to be found. 
   Context of use, much like the revert case, a programmer gets mixed up and breaks something. but, his efforts to repair fail, time and time again. Finally, realising he has made too many changes since the initial crash-causing error, he chooses to reset to the last working version. There, he can start fresh.
* changing the origin url is less often needed than add, push, pull. "git remote set-url origin [URL]" is the code used to change the URL of the repo.


## Using Docker

Clone the repository and run the following command:

```
docker build -t bulletin-board .
docker run -d -p 8080:8080 bulletin-board
```


## RESTful API (contributed by Jason Lam)

1. **Use Node.js & Express for backend server and router.**
2. **RESTful requests towards the server to simulate CRUD on *events* model, instead of local hardcoded ones.**
3. Translated into Traditional Chinese.

## RESTful API written in Go 

If you would like to use a backend written in Go, [thewhitetulip](http://github.com/thewhitetulip) has written on. See [the source code](https://github.com/thewhitetulip/go-vue-events).
 

