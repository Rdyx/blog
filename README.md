From fresh config

 - git clone
 - bundle install

Serv locally:
 - bundle exec jekyll serve --drafts -I 2>/dev/null  
   - --drafts is to serv the _draft folder
   - -I is for incremental regeneration
   - 2> is for stdout jekyll old version warnings making regeneration slower

Deploy:
 - bash deploy.sh  # Make sure you have a blog-prod folder in parent folder and a git initialized in it
