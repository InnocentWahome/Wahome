This SASS tutorial by Hamscript @https://www.youtube.com/watch?v=vBaVuBkUhDk has involved mixins, varibles, media queries and many more for reference available to interested parties.

                                                                                ---SETUP---

In this project I used npm as my sass compiler . 

You need to have the NPM latest version in your laptop

In your terminal, cd to the project folder then you need to initialize a node server by typing in:     npm init  (when prompted, your package name should still be the name of your project folder) then fill in the author and github queries it prompts you

To install the sass compiler open your terminal and type in:    npm install node-sass -g     to install it globally
 
To reload your HTML file you need Live Server which you can also get from npm by typing in:    npm install -g live-server

Now in the 'package.json' file created when you typed in npm init, go to the "scripts" and modify it like this


          "scripts": {
    "dev": "node-sass styles/styles.scss css/styles.css -w" 
    },

where "dev" is just a name variable i will call to run the SASS files
      "node-sass" is the name of the package
      "styles/styles.scss" is the name of the folder and file the command needs to watch out for the SASS code
      "css/styles.css" path for file and folder where all the compiled code (CSS) is going to go
      -w makes it easier so we dont have to write all this code again when we need to
      
      
Now after adding bits of code and you want to check whether it has compiled successfully, run in your terminal the following command
          npm run dev   (where dev is te name of the variable you gave back in "scripts")

>Remember everytime you add a new SASS file, you will need to restart your server by typing in npm run dev (or your variable name)
